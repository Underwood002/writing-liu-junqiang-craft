'use client'

import { useParams } from 'next/navigation'
import { sections } from '@/data/sections'
import { isCompleted, toggleCompleted, getProgress, getSubmission, saveSubmission, deleteSubmission } from '@/lib/progress'
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

export default function SectionPage() {
  const params = useParams()
  const id = Number(params.id)
  const section = sections.find((s) => s.id === id)

  const [tick, setTick] = useState(0)
  const refresh = useCallback(() => setTick((t) => t + 1), [])

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
        <Link href="/" className="mt-3 inline-block text-sm text-accent underline underline-offset-4">返回首页</Link>
      </div>
    )
  }

  const prevSection = sections.find((s) => s.id === id - 1)
  const nextSection = sections.find((s) => s.id === id + 1)

  const progress = getProgress()
  const secExDone = section.exercises.filter((e) => progress.completedExercises.includes(e.id)).length
  const secMoDone = section.movies.filter((m) => progress.watchedMovies.includes(m.id)).length
  const secBoDone = section.books.filter((b) => progress.readBooks.includes(b.id)).length
  const secTotal = section.exercises.length + section.movies.length + section.books.length
  const secDone = secExDone + secMoDone + secBoDone
  const secPct = secTotal > 0 ? Math.round((secDone / secTotal) * 100) : 0

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-6 sm:py-12">
      {/* 顶部 */}
      <div className="mb-8 sm:mb-10">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <span className="font-mono text-5xl sm:text-7xl font-light tracking-tight text-stone-200 select-none">
              {String(id).padStart(2, '0')}
            </span>
            <h1 className="-mt-1 sm:-mt-2 text-xl sm:text-2xl font-medium text-stone-800">{section.title}</h1>
            <p className="mt-1 text-sm sm:text-base text-stone-500">{section.subtitle}</p>
            <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-stone-400">{section.chapters}</p>
          </div>
          {/* 进度环 */}
          <div className="flex shrink-0 flex-col items-center">
            <div className="relative flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center">
              <svg className="h-full w-full -rotate-90" viewBox="0 0 64 64">
                <circle cx="32" cy="32" r="28" fill="none" stroke="#e7e5e4" strokeWidth="4" />
                <circle cx="32" cy="32" r="28" fill="none" stroke="#b8956a" strokeWidth="4" strokeLinecap="round"
                  strokeDasharray={`${secPct * 1.759} 175.9`} className="transition-all duration-500" />
              </svg>
              <span className="absolute font-mono text-xs sm:text-sm font-medium text-stone-700">{secPct}%</span>
            </div>
            <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-stone-400">{secDone}/{secTotal}</p>
          </div>
        </div>

        {/* 上下篇导航 */}
        <div className="mt-4 sm:mt-6 flex gap-1.5 sm:gap-2 overflow-x-auto pb-1">
          {prevSection ? (
            <Link href={`/section/${prevSection.id}`} className="shrink-0 rounded-full border border-stone-200 px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs text-stone-400 transition-colors hover:border-stone-400 hover:text-stone-600 truncate max-w-[160px] sm:max-w-none">
              ← {prevSection.subtitle.split('：')[1]}
            </Link>
          ) : <span className="shrink-0 px-2.5 py-1 text-[10px] sm:text-xs text-stone-200">已到第一篇</span>}
          {nextSection && (
            <Link href={`/section/${nextSection.id}`} className="shrink-0 rounded-full border border-stone-200 px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs text-stone-400 transition-colors hover:border-stone-400 hover:text-stone-600 truncate max-w-[160px] sm:max-w-none">
              {nextSection.subtitle.split('：')[1]} →
            </Link>
          )}
        </div>

        {/* 移动端横滑目录 */}
        <div className="mt-4 overflow-x-auto lg:hidden">
          <div className="flex gap-1 min-w-max">
            {sections.map((s) => (
              <Link
                key={s.id}
                href={`/section/${s.id}`}
                className={`shrink-0 rounded-full border px-2.5 py-1 text-[10px] transition-colors ${
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
        {/* 桌面端左侧目录 */}
        <aside className="hidden w-36 shrink-0 lg:block">
          <nav className="sticky top-20">
            <p className="mb-3 text-xs font-medium uppercase tracking-wider text-stone-400">全书目录</p>
            <div className="space-y-0.5">
              {sections.map((s) => (
                <Link key={s.id} href={`/section/${s.id}`}
                  className={`flex items-center gap-2 rounded px-2.5 py-1.5 text-sm transition-colors ${
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

        {/* 主内容 */}
        <div className="min-w-0 flex-1 space-y-12 sm:space-y-16">
          {/* 训练任务 */}
          <section>
            <div className="mb-4 sm:mb-6 flex items-baseline gap-2 sm:gap-3">
              <h2 className="text-base sm:text-lg font-medium text-stone-800">训练任务</h2>
              <span className="text-[10px] sm:text-xs text-stone-400">{section.exercises.length} 项</span>
            </div>
            <div className="space-y-6 sm:space-y-8">
              {(['think', 'write', 'do'] as const).map((cat) => {
                const items = section.exercises.filter((e) => e.category === cat)
                if (!items.length) return null
                const cfg = categoryConfig[cat]
                const canWrite = cat === 'think' || cat === 'write'

                return (
                  <div key={cat}>
                    <div className="mb-2 sm:mb-3 flex flex-wrap items-center gap-1.5 sm:gap-2">
                      <span className={`inline-flex items-center rounded-full border px-2 py-0.5 sm:px-2.5 text-[10px] sm:text-xs font-medium ${cfg.color} ${cfg.bg} ${cfg.border}`}>
                        {cfg.label}
                      </span>
                      <span className="text-[10px] sm:text-xs text-stone-300">{cfg.en}</span>
                      {canWrite && (
                        <span className="text-[10px] sm:text-xs text-stone-300">· 可写作</span>
                      )}
                    </div>

                    <div className="space-y-1 sm:space-y-1.5">
                      {items.map((ex) => {
                        const done = isCompleted('exercise', ex.id)
                        const submission = getSubmission(ex.id)
                        const isExpanded = expandedWriting.has(ex.id)

                        return (
                          <div key={ex.id}>
                            <label
                              className={`flex cursor-pointer items-start gap-2.5 sm:gap-3 rounded-md border p-3 sm:p-4 transition-all duration-150 ${
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
                                <div className="flex items-start justify-between gap-2 sm:gap-3">
                                  <div>
                                    <p className={`text-xs sm:text-sm font-medium transition-colors ${done ? 'text-stone-400 line-through decoration-stone-300' : 'text-stone-800'}`}>
                                      {ex.title}
                                    </p>
                                    <p className={`mt-0.5 sm:mt-1 text-[11px] sm:text-xs leading-relaxed transition-colors ${done ? 'text-stone-300' : 'text-stone-500'}`}>
                                      {ex.description}
                                    </p>
                                  </div>
                                  {canWrite && (
                                    <button
                                      type="button"
                                      onClick={(e) => { e.preventDefault(); toggleWriting(ex.id) }}
                                      className={`shrink-0 rounded-md border px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-xs font-medium transition-colors ${
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

                                {/* 已提交内容预览 */}
                                {submission && !isExpanded && (
                                  <div className="mt-2.5 sm:mt-3 rounded-md border border-accent/10 bg-stone-50/70 p-2.5 sm:p-3">
                                    <p className="text-[11px] sm:text-xs leading-relaxed text-stone-600 line-clamp-3">
                                      {submission.content}
                                    </p>
                                    <p className="mt-1.5 sm:mt-2 text-[10px] sm:text-xs text-stone-400">
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
            <div className="mb-4 sm:mb-6 flex items-baseline gap-2 sm:gap-3">
              <h2 className="text-base sm:text-lg font-medium text-stone-800">电影时刻</h2>
              <span className="text-[10px] sm:text-xs text-stone-400">{section.movies.length} 部</span>
            </div>
            <div className="space-y-1 sm:space-y-1.5">
              {section.movies.map((m) => {
                const done = isCompleted('movie', m.id)
                return (
                  <label key={m.id}
                    className={`flex cursor-pointer items-start gap-2.5 sm:gap-3 rounded-md border p-3 sm:p-4 transition-all duration-150 ${
                      done ? 'border-stone-100 bg-stone-50/50' : 'border-stone-200 bg-white hover:border-stone-300 active:bg-stone-50'
                    }`}
                  >
                    <input type="checkbox" checked={done}
                      onChange={() => { toggleCompleted('movie', m.id); refresh() }}
                      className="mt-0.5 h-4 w-4 shrink-0 rounded border-stone-300 text-accent focus:ring-accent/30 cursor-pointer" />
                    <div className="min-w-0">
                      <p className={`text-xs sm:text-sm font-medium transition-colors ${done ? 'text-stone-400 line-through decoration-stone-300' : 'text-stone-800'}`}>
                        {m.title} <span className="ml-1 font-normal text-stone-400">{m.year}</span>
                      </p>
                      <p className={`mt-0.5 sm:mt-1 text-[11px] sm:text-xs leading-relaxed transition-colors ${done ? 'text-stone-300' : 'text-stone-500'}`}>{m.description}</p>
                    </div>
                  </label>
                )
              })}
            </div>
          </section>

          <hr className="border-stone-100" />

          {/* 延伸阅读 */}
          <section>
            <div className="mb-4 sm:mb-6 flex items-baseline gap-2 sm:gap-3">
              <h2 className="text-base sm:text-lg font-medium text-stone-800">延伸阅读</h2>
              <span className="text-[10px] sm:text-xs text-stone-400">{section.books.length} 本</span>
            </div>
            <div className="space-y-1 sm:space-y-1.5">
              {section.books.map((b) => {
                const done = isCompleted('book', b.id)
                return (
                  <label key={b.id}
                    className={`flex cursor-pointer items-start gap-2.5 sm:gap-3 rounded-md border p-3 sm:p-4 transition-all duration-150 ${
                      done ? 'border-stone-100 bg-stone-50/50' : 'border-stone-200 bg-white hover:border-stone-300 active:bg-stone-50'
                    }`}
                  >
                    <input type="checkbox" checked={done}
                      onChange={() => { toggleCompleted('book', b.id); refresh() }}
                      className="mt-0.5 h-4 w-4 shrink-0 rounded border-stone-300 text-accent focus:ring-accent/30 cursor-pointer" />
                    <div className="min-w-0">
                      <p className={`text-xs sm:text-sm transition-colors ${done ? 'text-stone-400 line-through decoration-stone-300' : 'text-stone-800'}`}>
                        <span className="font-medium">{b.author}</span>
                        {b.author && '《'}{b.title}{b.author && '》'}
                        {b.translator && <span className="text-stone-400">，{b.translator}译</span>}
                      </p>
                      {b.publisher && (
                        <p className={`mt-0.5 text-[10px] sm:text-xs transition-colors ${done ? 'text-stone-300' : 'text-stone-400'}`}>
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
                  <summary className="cursor-pointer text-xs sm:text-sm font-medium text-stone-400 transition-colors hover:text-stone-600 select-none">
                    本章引用文献（{section.references.length} 条）
                  </summary>
                  <div className="mt-2 sm:mt-3 space-y-1.5 sm:space-y-2 rounded-md border border-stone-100 bg-stone-50/50 p-3 sm:p-5">
                    {section.references.map((ref, i) => (
                      <div key={ref.id} className="flex gap-2 sm:gap-3">
                        <span className="font-mono text-[10px] sm:text-xs text-stone-300 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                        <p className="text-[10px] sm:text-xs leading-relaxed text-stone-500">{ref.citation}</p>
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

// 写作区域组件
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
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    textareaRef.current?.focus()
  }, [])

  const handleSave = () => {
    if (!content.trim()) return
    setSaving(true)
    saveSubmission(exerciseId, content.trim())
    setTimeout(() => {
      setSaving(false)
      setSaved(true)
      onSaved()
    }, 300)
  }

  const handleDelete = () => {
    if (!confirm('确定删除这篇写作吗？')) return
    deleteSubmission(exerciseId)
    setContent('')
    setSaved(false)
    onSaved()
  }

  const chars = content.length

  return (
    <div className="mx-2 sm:mx-4 mt-2 rounded-md border border-stone-200 bg-white">
      <div className="border-b border-stone-100 px-3 sm:px-4 py-2 flex items-center justify-between">
        <span className="text-[10px] sm:text-xs text-stone-400">
          {saved ? '编辑你的写作' : '写下你的思考或写作'}
        </span>
        <div className="flex items-center gap-2">
          <span className="text-[10px] sm:text-xs text-stone-300">{chars} 字</span>
          <button type="button" onClick={onClose} className="text-[10px] sm:text-xs text-stone-400 hover:text-stone-600">
            收起
          </button>
        </div>
      </div>
      <textarea
        ref={textareaRef}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="开始写吧……写出来才算真正的训练。"
        rows={6}
        className="w-full resize-y border-0 bg-transparent px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm leading-relaxed text-stone-700 placeholder:text-stone-300 focus:outline-none"
      />
      <div className="flex items-center justify-between border-t border-stone-100 px-3 sm:px-4 py-2 sm:py-2.5">
        <div>
          {saved && (
            <button type="button" onClick={handleDelete}
              className="text-[10px] sm:text-xs text-stone-400 hover:text-red-500 transition-colors">
              删除
            </button>
          )}
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2">
          <button type="button" onClick={onClose}
            className="rounded-md border border-stone-200 px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs text-stone-500 hover:text-stone-700 transition-colors">
            取消
          </button>
          <button
            type="button"
            onClick={handleSave}
            disabled={!content.trim() || saving}
            className="rounded-md bg-stone-800 px-3 sm:px-4 py-1 text-[10px] sm:text-xs font-medium text-white transition-colors hover:bg-stone-700 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {saving ? '保存中…' : saved ? '更新' : '提交'}
          </button>
        </div>
      </div>

      {saved && (
        <div className="border-t border-accent/10 bg-accent-light/30 px-3 sm:px-4 py-2">
          <p className="text-[10px] sm:text-xs text-accent">
            已保存。社区上线后将被同路人看到。
          </p>
        </div>
      )}
    </div>
  )
}
