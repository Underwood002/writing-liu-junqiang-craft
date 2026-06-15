'use client'

import { useParams } from 'next/navigation'
import { sections } from '@/data/sections'
import { isCompleted, toggleCompleted, getProgress, getSubmission, saveSubmission, deleteSubmission, togglePublic } from '@/lib/progress'
import { useState, useCallback, useRef, useEffect } from 'react'
import Link from 'next/link'

const categoryConfig: Record<string, { label: string; en: string; color: string; bg: string; border: string }> = {
  think: { label: '想', en: 'How to Think', color: 'text-amber-700', bg: 'bg-amber-50', border: 'border-amber-200' },
  write: { label: '写', en: 'What to Write', color: 'text-sky-700', bg: 'bg-sky-50', border: 'border-sky-200' },
  do: { label: '作', en: 'What to Do', color: 'text-emerald-700', bg: 'bg-emerald-50', border: 'border-emerald-200' },
}

function fmtDate(iso: string) {
  const d = new Date(iso)
  return `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()} ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`
}

// Markdown 渲染：标题、粗体、斜体、删除线、代码、引用、列表、分隔线、段落
function renderMarkdown(text: string): string {
  // 转义 HTML
  let html = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

  const lines = html.split('\n')
  const result: string[] = []
  let inList = false
  let inOrderedList = false

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i]

    // 行内格式（在任何行上都生效）
    const inline = (l: string) => {
      l = l.replace(/~~(.+?)~~/g, '<del class="text-stone-400">$1</del>')
      l = l.replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-stone-800">$1</strong>')
      l = l.replace(/\*(.+?)\*/g, '<em class="italic text-stone-600">$1</em>')
      l = l.replace(/`([^`]+)`/g, '<code class="bg-stone-100 rounded px-1 py-0.5 text-xs font-mono text-stone-700">$1</code>')
      return l
    }

    // 空行 = 段落分隔，关闭列表
    if (line.trim() === '') {
      if (inList) { inList = false; result.push('</ul>') }
      if (inOrderedList) { inOrderedList = false; result.push('</ol>') }
      result.push('<div class="h-3"></div>')
      continue
    }

    // 标题
    if (line.match(/^### (.+)/)) {
      if (inList) { inList = false; result.push('</ul>') }
      if (inOrderedList) { inOrderedList = false; result.push('</ol>') }
      result.push(`<h3 class="text-base font-semibold text-stone-800 mt-4 mb-1">${inline(RegExp.$1)}</h3>`)
      continue
    }
    if (line.match(/^## (.+)/)) {
      if (inList) { inList = false; result.push('</ul>') }
      if (inOrderedList) { inOrderedList = false; result.push('</ol>') }
      result.push(`<h2 class="text-lg font-semibold text-stone-800 mt-5 mb-1">${inline(RegExp.$1)}</h2>`)
      continue
    }
    if (line.match(/^# (.+)/)) {
      if (inList) { inList = false; result.push('</ul>') }
      if (inOrderedList) { inOrderedList = false; result.push('</ol>') }
      result.push(`<h1 class="text-xl font-semibold text-stone-800 mt-5 mb-2">${inline(RegExp.$1)}</h1>`)
      continue
    }

    // 分隔线
    if (line.match(/^(---|\*\*\*|___)$/)) {
      if (inList) { inList = false; result.push('</ul>') }
      if (inOrderedList) { inOrderedList = false; result.push('</ol>') }
      result.push('<hr class="border-stone-200 my-3"/>')
      continue
    }

    // 引用
    if (line.match(/^> (.+)/)) {
      if (inList) { inList = false; result.push('</ul>') }
      if (inOrderedList) { inOrderedList = false; result.push('</ol>') }
      result.push(`<blockquote class="border-l-2 border-accent/40 pl-3 text-stone-500 italic">${inline(RegExp.$1)}</blockquote>`)
      continue
    }

    // 无序列表
    if (line.match(/^[\-\*] (.+)/)) {
      if (!inList) { inList = true; result.push('<ul class="list-disc pl-5 space-y-1">') }
      if (inOrderedList) { inOrderedList = false; result.push('</ol>') }
      result.push(`<li class="text-stone-700">${inline(RegExp.$1)}</li>`)
      continue
    }

    // 有序列表
    if (line.match(/^\d+\. (.+)/)) {
      if (inList) { inList = false; result.push('</ul>') }
      if (!inOrderedList) { inOrderedList = true; result.push('<ol class="list-decimal pl-5 space-y-1">') }
      result.push(`<li class="text-stone-700">${inline(RegExp.$1)}</li>`)
      continue
    }

    // 关闭列表（普通文本行）
    if (inList) { inList = false; result.push('</ul>') }
    if (inOrderedList) { inOrderedList = false; result.push('</ol>') }

    // 普通段落行
    result.push(`<span>${inline(line)}</span><br/>`)
  }

  // 收尾未关闭的列表
  if (inList) result.push('</ul>')
  if (inOrderedList) result.push('</ol>')

  return result.join('\n')
}

export default function SectionPage() {
  const params = useParams()
  const id = Number(params.id)
  const section = sections.find((s) => s.id === id)

  const [mounted, setMounted] = useState(false)
  const [tick, setTick] = useState(0)
  const refresh = useCallback(() => setTick((t) => t + 1), [])

  useEffect(() => setMounted(true), [])

  const [expandedWriting, setExpandedWriting] = useState<Set<string>>(new Set())
  const toggleWriting = useCallback((exId: string) => {
    setExpandedWriting((prev) => {
      const next = new Set(prev)
      next.has(exId) ? next.delete(exId) : next.add(exId)
      return next
    })
  }, [])

  if (!section) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 sm:py-32 text-center">
        <p className="text-stone-400">该篇不存在。</p>
        <Link href="/" className="mt-3 inline-block text-base text-accent underline underline-offset-4">返回首页</Link>
      </div>
    )
  }

  const prevSection = sections.find((s) => s.id === id - 1)
  const nextSection = sections.find((s) => s.id === id + 1)

  const progress = mounted ? getProgress() : { completedExercises: [], watchedMovies: [], readBooks: [] }
  const secExDone = section.exercises.filter((e) => progress.completedExercises.includes(e.id)).length
  const secMoDone = section.movies.filter((m) => progress.watchedMovies.includes(m.id)).length
  const secBoDone = section.books.filter((b) => progress.readBooks.includes(b.id)).length
  const secTotal = section.exercises.length + section.movies.length + section.books.length
  const secDone = secExDone + secMoDone + secBoDone
  const secPct = secTotal > 0 ? Math.round((secDone / secTotal) * 100) : 0

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-8 sm:py-12">
      {/* 顶部 */}
      <div className="mb-10 sm:mb-12">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <span className="font-mono text-6xl sm:text-8xl font-light tracking-tight text-stone-200 select-none">
              {String(id).padStart(2, '0')}
            </span>
            <h1 className="-mt-2 sm:-mt-3 text-2xl sm:text-3xl font-medium text-stone-800">{section.title}</h1>
            <p className="mt-1.5 sm:mt-2 text-base sm:text-lg text-stone-500">{section.subtitle}</p>
            <p className="mt-1 text-sm sm:text-base text-stone-400">{section.chapters}</p>
          </div>
          <div className="flex shrink-0 flex-col items-center">
            <div className="relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center">
              <svg className="h-full w-full -rotate-90" viewBox="0 0 64 64">
                <circle cx="32" cy="32" r="28" fill="none" stroke="#e7e5e4" strokeWidth="4" />
                <circle cx="32" cy="32" r="28" fill="none" stroke="#b8956a" strokeWidth="4" strokeLinecap="round"
                  strokeDasharray={`${secPct * 1.759} 175.9`} className="transition-all duration-500" />
              </svg>
              <span className="absolute font-mono text-sm font-medium text-stone-700">{secPct}%</span>
            </div>
            <p className="mt-1 text-xs sm:text-sm text-stone-400">{secDone}/{secTotal}</p>
          </div>
        </div>

        <div className="mt-5 sm:mt-6 flex gap-2 overflow-x-auto pb-1">
          {prevSection ? (
            <Link href={`/section/${prevSection.id}`} className="shrink-0 rounded-full border border-stone-200 px-3 py-1 sm:px-3.5 sm:py-1.5 text-xs sm:text-sm text-stone-400 transition-colors hover:border-stone-400 hover:text-stone-600 truncate max-w-[160px] sm:max-w-none">
              ← {prevSection.subtitle.split('：')[1]}
            </Link>
          ) : <span className="shrink-0 px-3 py-1 text-xs sm:text-sm text-stone-200">已到第一篇</span>}
          {nextSection && (
            <Link href={`/section/${nextSection.id}`} className="shrink-0 rounded-full border border-stone-200 px-3 py-1 sm:px-3.5 sm:py-1.5 text-xs sm:text-sm text-stone-400 transition-colors hover:border-stone-400 hover:text-stone-600 truncate max-w-[160px] sm:max-w-none">
              {nextSection.subtitle.split('：')[1]} →
            </Link>
          )}
        </div>

        {/* 移动端横滑目录 */}
        <div className="mt-5 overflow-x-auto lg:hidden">
          <div className="flex gap-1.5 min-w-max">
            {sections.map((s) => (
              <Link
                key={s.id}
                href={`/section/${s.id}`}
                className={`shrink-0 rounded-full border px-3 py-1.5 text-xs transition-colors ${
                  s.id === id
                    ? 'border-stone-300 bg-stone-100 font-medium text-stone-700'
                    : 'border-stone-200 text-stone-400 hover:border-stone-300'
                }`}
              >
                <span className="font-mono mr-1">{String(s.id).padStart(2, '0')}</span>
                {s.subtitle.split('：')[0]}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-8 sm:gap-12">
        <aside className="hidden w-36 shrink-0 lg:block">
          <nav className="sticky top-20">
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-stone-400">全书目录</p>
            <div className="space-y-0.5">
              {sections.map((s) => (
                <Link key={s.id} href={`/section/${s.id}`}
                  className={`flex items-center gap-2 rounded px-3 py-2 text-sm transition-colors ${
                    s.id === id ? 'bg-stone-100 font-medium text-stone-800' : 'text-stone-400 hover:bg-stone-50 hover:text-stone-600'
                  }`}
                >
                  <span className="font-mono text-xs opacity-60">{String(s.id).padStart(2, '0')}</span>
                  <span className="truncate">{s.subtitle.split('：')[0]}</span>
                </Link>
              ))}
            </div>
          </nav>
        </aside>

        <div className="min-w-0 flex-1 space-y-14 sm:space-y-16">
          {/* 训练任务 */}
          <section>
            <div className="mb-5 sm:mb-6 flex items-baseline gap-3">
              <h2 className="text-lg sm:text-xl font-medium text-stone-800">训练任务</h2>
              <span className="text-sm text-stone-400">{section.exercises.length} 项</span>
            </div>
            <div className="space-y-6 sm:space-y-8">
              {(['think', 'write', 'do'] as const).map((cat) => {
                const rawItems = section.exercises.filter((e) => e.category === cat)
                if (!rawItems.length) return null
                // 未完成的排前面，已完成的沉到底部
                const items = [...rawItems].sort((a, b) => {
                  const aDone = mounted ? isCompleted('exercise', a.id) : false
                  const bDone = mounted ? isCompleted('exercise', b.id) : false
                  return aDone === bDone ? 0 : aDone ? 1 : -1
                })
                const cfg = categoryConfig[cat]
                const canWrite = cat === 'think' || cat === 'write'

                return (
                  <div key={cat}>
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs sm:text-sm font-medium ${cfg.color} ${cfg.bg} ${cfg.border}`}>
                        {cfg.label}
                      </span>
                      <span className="text-xs sm:text-sm text-stone-300">{cfg.en}</span>
                      {canWrite && (
                        <span className="text-xs sm:text-sm text-stone-300">· 可写作</span>
                      )}
                    </div>

                    <div className="space-y-2">
                      {items.map((ex) => {
                        const done = mounted ? isCompleted('exercise', ex.id) : false
                        const submission = mounted ? getSubmission(ex.id) : null
                        const isExpanded = expandedWriting.has(ex.id)

                        return (
                          <div key={ex.id}>
                            <label
                              className={`flex cursor-pointer items-start gap-3 rounded-md border p-4 sm:p-5 transition-all duration-150 ${
                                done
                                  ? 'border-stone-100 bg-stone-50/50'
                                  : 'border-stone-200 bg-white hover:border-stone-300 active:bg-stone-50'
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={done}
                                onChange={() => { toggleCompleted('exercise', ex.id); refresh() }}
                                className="mt-0.5 h-4 w-4 shrink-0 rounded border-stone-300 text-accent focus:ring-accent/30 cursor-pointer"
                              />
                              <div className="min-w-0 flex-1">
                                <div className="flex items-start justify-between gap-3">
                                  <div>
                                    <p className={`text-sm sm:text-base font-medium transition-colors ${done ? 'text-stone-400 line-through decoration-stone-300' : 'text-stone-800'}`}>
                                      {ex.title}
                                    </p>
                                    <p className={`mt-1 text-xs sm:text-sm leading-relaxed transition-colors ${done ? 'text-stone-300' : 'text-stone-500'}`}>
                                      {ex.description}
                                    </p>
                                  </div>
                                  {canWrite && (
                                    <button
                                      type="button"
                                      onClick={(e) => { e.preventDefault(); toggleWriting(ex.id) }}
                                      className={`shrink-0 rounded-md border px-3 py-1 sm:px-3.5 sm:py-1.5 text-xs sm:text-sm font-medium transition-colors ${
                                        submission
                                          ? 'border-accent/30 bg-accent-light text-accent hover:bg-accent/20'
                                          : isExpanded
                                            ? 'border-stone-300 bg-stone-100 text-stone-600'
                                            : 'border-stone-200 text-stone-400 hover:border-stone-300 hover:text-stone-600'
                                      }`}
                                    >
                                      {submission ? '已提交' : isExpanded ? '收起' : '写作'}
                                    </button>
                                  )}
                                </div>

                                {submission && !isExpanded && (
                                  <div className="mt-3 rounded-md border border-accent/10 bg-stone-50/70 p-3 sm:p-4">
                                    <div className="flex items-start justify-between gap-2">
                                      <div className="flex-1 min-w-0">
                                        <div
                                          className="text-xs sm:text-sm leading-relaxed text-stone-600 line-clamp-3 prose-stone"
                                          dangerouslySetInnerHTML={{ __html: renderMarkdown(submission.content) }}
                                        />
                                      </div>
                                      {submission.public === false && (
                                        <span className="shrink-0 rounded-full border border-stone-200 bg-stone-100 px-2 py-0.5 text-[10px] text-stone-400">私密</span>
                                      )}
                                    </div>
                                    <p className="mt-2 text-xs text-stone-400">
                                      提交于 {fmtDate(submission.createdAt)}
                                    </p>
                                  </div>
                                )}
                              </div>
                            </label>

                            {canWrite && isExpanded && (
                              <WritingArea
                                exerciseId={ex.id}
                                existingSubmission={submission}
                                onSaved={refresh}
                                onClose={() => toggleWriting(ex.id)}
                              />
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          <hr className="border-stone-100" />

          {/* 电影时刻 */}
          <section>
            <div className="mb-5 sm:mb-6 flex items-baseline gap-3">
              <h2 className="text-lg sm:text-xl font-medium text-stone-800">电影时刻</h2>
              <span className="text-sm text-stone-400">{section.movies.length} 部</span>
            </div>
            <div className="space-y-2">
              {section.movies.map((m) => {
                const done = mounted ? isCompleted('movie', m.id) : false
                return (
                  <label key={m.id}
                    className={`flex cursor-pointer items-start gap-3 rounded-md border p-4 sm:p-5 transition-all duration-150 ${
                      done ? 'border-stone-100 bg-stone-50/50' : 'border-stone-200 bg-white hover:border-stone-300 active:bg-stone-50'
                    }`}
                  >
                    <input type="checkbox" checked={done}
                      onChange={() => { toggleCompleted('movie', m.id); refresh() }}
                      className="mt-0.5 h-4 w-4 shrink-0 rounded border-stone-300 text-accent focus:ring-accent/30 cursor-pointer" />
                    <div className="min-w-0">
                      <p className={`text-sm sm:text-base font-medium transition-colors ${done ? 'text-stone-400 line-through decoration-stone-300' : 'text-stone-800'}`}>
                        {m.title} <span className="ml-1.5 font-normal text-stone-400">{m.year}</span>
                      </p>
                      <p className={`mt-1 text-xs sm:text-sm leading-relaxed transition-colors ${done ? 'text-stone-300' : 'text-stone-500'}`}>{m.description}</p>
                    </div>
                  </label>
                )
              })}
            </div>
          </section>

          <hr className="border-stone-100" />

          {/* 延伸阅读 */}
          <section>
            <div className="mb-5 sm:mb-6 flex items-baseline gap-3">
              <h2 className="text-lg sm:text-xl font-medium text-stone-800">延伸阅读</h2>
              <span className="text-sm text-stone-400">{section.books.length} 本</span>
            </div>
            <div className="space-y-2">
              {section.books.map((b) => {
                const done = mounted ? isCompleted('book', b.id) : false
                return (
                  <label key={b.id}
                    className={`flex cursor-pointer items-start gap-3 rounded-md border p-4 sm:p-5 transition-all duration-150 ${
                      done ? 'border-stone-100 bg-stone-50/50' : 'border-stone-200 bg-white hover:border-stone-300 active:bg-stone-50'
                    }`}
                  >
                    <input type="checkbox" checked={done}
                      onChange={() => { toggleCompleted('book', b.id); refresh() }}
                      className="mt-0.5 h-4 w-4 shrink-0 rounded border-stone-300 text-accent focus:ring-accent/30 cursor-pointer" />
                    <div className="min-w-0">
                      <p className={`text-sm sm:text-base transition-colors ${done ? 'text-stone-400 line-through decoration-stone-300' : 'text-stone-800'}`}>
                        <span className="font-medium">{b.author}</span>
                        {b.author && '《'}{b.title}{b.author && '》'}
                        {b.translator && <span className="text-stone-400">，{b.translator}译</span>}
                      </p>
                      {b.publisher && (
                        <p className={`mt-0.5 text-xs sm:text-sm transition-colors ${done ? 'text-stone-300' : 'text-stone-400'}`}>
                          {b.publisher}{b.year ? `，${b.year}` : ''}
                        </p>
                      )}
                    </div>
                  </label>
                )
              })}
            </div>
          </section>

          {/* 引用文献 */}
          {section.references.length > 0 && (
            <>
              <hr className="border-stone-100" />
              <section>
                <details className="group">
                  <summary className="cursor-pointer text-sm sm:text-base font-medium text-stone-400 transition-colors hover:text-stone-600 select-none">
                    本章引用文献（{section.references.length} 条）
                  </summary>
                  <div className="mt-3 space-y-2 rounded-md border border-stone-100 bg-stone-50/50 p-4 sm:p-5">
                    {section.references.map((ref, i) => (
                      <div key={ref.id} className="flex gap-3">
                        <span className="font-mono text-xs sm:text-sm text-stone-300 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                        <p className="text-xs sm:text-sm leading-relaxed text-stone-500">{ref.citation}</p>
                      </div>
                    ))}
                  </div>
                </details>
              </section>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

function WritingArea({
  exerciseId,
  existingSubmission,
  onSaved,
  onClose,
}: {
  exerciseId: string
  existingSubmission: ReturnType<typeof getSubmission>
  onSaved: () => void
  onClose: () => void
}) {
  const [content, setContent] = useState(existingSubmission?.content || '')
  const [saved, setSaved] = useState(!!existingSubmission)
  const [saving, setSaving] = useState(false)
  const [preview, setPreview] = useState(false)
  const [isPublic, setIsPublic] = useState(existingSubmission?.public ?? true)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    textareaRef.current?.focus()
  }, [])

  const hasChanged = existingSubmission
    ? content !== existingSubmission.content
    : content !== ''

  const handleSave = () => {
    if (!content.trim()) return
    setSaving(true)
    saveSubmission(exerciseId, content, isPublic)
    setTimeout(() => {
      setSaving(false)
      setSaved(true)
      onSaved()
    }, 300)
  }

  const handleClose = () => {
    if (hasChanged && !confirm('你还有未保存的内容，确定要关闭吗？')) return
    onClose()
  }

  useEffect(() => {
    if (!hasChanged) return
    const timer = setInterval(() => {
      if (content.trim()) {
        saveSubmission(exerciseId, content, isPublic)
        setSaved(true)
      }
    }, 30000)
    return () => clearInterval(timer)
  }, [content, hasChanged, exerciseId, isPublic])

  const handleTogglePublic = () => {
    const newVal = togglePublic(exerciseId)
    setIsPublic(newVal)
  }

  const handleDelete = () => {
    if (!confirm('确定删除这篇写作吗？')) return
    deleteSubmission(exerciseId)
    setContent('')
    setSaved(false)
    onSaved()
  }

  const insertFormat = (wrapper: string) => {
    const ta = textareaRef.current
    if (!ta) return
    const start = ta.selectionStart
    const end = ta.selectionEnd
    const selected = content.substring(start, end)
    const newText = content.substring(0, start) + wrapper.replace('$1', selected || '文字') + content.substring(end)
    setContent(newText)
    setTimeout(() => {
      ta.focus()
      const pos = selected ? start + wrapper.length : start + wrapper.indexOf('$1')
      ta.setSelectionRange(pos, pos + (selected ? selected.length : 2))
    }, 0)
  }

  return (
    <div className="mx-3 sm:mx-4 mt-2 rounded-md border border-stone-200 bg-white">
      <div className="border-b border-stone-100 px-4 py-2.5 flex items-center justify-between">
        <span className="text-xs sm:text-sm text-stone-400">
          {saved ? '编辑你的写作' : '写下你的思考或写作'}
        </span>
        <div className="flex items-center gap-3">
          {/* 格式按钮 */}
          <div className="flex items-center gap-1">
            <button type="button" onClick={() => insertFormat('**$1**')}
              className="rounded px-1.5 py-0.5 text-xs font-bold text-stone-400 hover:bg-stone-100 hover:text-stone-700 transition-colors" title="粗体">
              B
            </button>
            <button type="button" onClick={() => insertFormat('*$1*')}
              className="rounded px-1.5 py-0.5 text-xs italic text-stone-400 hover:bg-stone-100 hover:text-stone-700 transition-colors" title="斜体">
              I
            </button>
            <span className="text-stone-200 mx-0.5">|</span>
            <button type="button" onClick={() => setPreview(!preview)}
              className={`rounded px-2 py-0.5 text-xs transition-colors ${preview ? 'bg-stone-100 text-stone-700' : 'text-stone-400 hover:bg-stone-100 hover:text-stone-700'}`}>
              {preview ? '编辑' : '预览'}
            </button>
          </div>
          <span className="text-xs text-stone-300">{content.length} 字</span>
          <button type="button" onClick={handleClose} className="text-xs sm:text-sm text-stone-400 hover:text-stone-600">
            收起
          </button>
        </div>
      </div>

      {/* 输入 / 预览切换 */}
      {preview ? (
        <div
          className="min-h-[200px] px-4 py-3 text-sm sm:text-base leading-relaxed text-stone-700"
          dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }}
        />
      ) : (
        <textarea
          ref={textareaRef}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder={"使用 **粗体** 和 *斜体* 来排版你的文字。段落之间空一行即可分段。"}
          rows={8}
          className="w-full resize-y border-0 bg-transparent px-4 py-3 text-sm sm:text-base leading-relaxed text-stone-700 placeholder:text-stone-300 focus:outline-none"
        />
      )}

      {/* 格式提示 */}
      <div className="border-t border-stone-50 px-4 py-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-stone-300">
        <span>格式：</span>
        <span><code className="text-stone-400">**粗体**</code></span>
        <span><code className="text-stone-400">*斜体*</code></span>
        <span><code className="text-stone-400">~~删除线~~</code></span>
        <span><code className="text-stone-400">`代码`</code></span>
        <span><code className="text-stone-400"># 标题</code></span>
        <span><code className="text-stone-400">- 列表</code></span>
        <span><code className="text-stone-400">&gt; 引用</code></span>
        <span><code className="text-stone-400">--- 分隔线</code></span>
      </div>

      <div className="flex items-center justify-between border-t border-stone-100 px-4 py-3">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleTogglePublic}
            className={`flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs transition-colors ${
              isPublic
                ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                : 'border-stone-200 bg-stone-50 text-stone-400'
            }`}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isPublic ? (
                <>
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </>
              ) : (
                <>
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
                  <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                  <line x1="1" y1="1" x2="23" y2="23"/>
                </>
              )}
            </svg>
            {isPublic ? '公开' : '私密'}
          </button>
          {saved && (
            <button type="button" onClick={handleDelete}
              className="text-xs sm:text-sm text-stone-400 hover:text-red-500 transition-colors">
              删除
            </button>
          )}
        </div>
        <div className="flex items-center gap-2">
          <button type="button" onClick={handleClose}
            className="rounded-md border border-stone-200 px-3 py-1.5 text-xs sm:text-sm text-stone-500 hover:text-stone-700 transition-colors">
            取消
          </button>
          <button
            type="button"
            onClick={handleSave}
            disabled={!content.trim() || saving}
            className="rounded-md bg-stone-800 px-4 py-1.5 text-xs sm:text-sm font-medium text-white transition-colors hover:bg-stone-700 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {saving ? '保存中…' : saved ? '更新' : '提交'}
          </button>
        </div>
      </div>

      {saved && (
        <div className="border-t border-accent/10 bg-accent-light/30 px-4 py-2.5">
          <p className="text-xs sm:text-sm text-accent">
            已保存{isPublic ? '，将在社区中公开' : '，仅自己可见'}。
          </p>
        </div>
      )}
    </div>
  )
}
