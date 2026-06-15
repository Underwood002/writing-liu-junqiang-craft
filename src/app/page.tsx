import Link from 'next/link'
import { sections } from '@/data/sections'

export default function Home() {
  const totalEx = sections.reduce((s, sec) => s + sec.exercises.length, 0)
  const totalMo = sections.reduce((s, sec) => s + sec.movies.length, 0)
  const totalBo = sections.reduce((s, sec) => s + sec.books.length, 0)

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-8 sm:py-16">
      {/* 首屏 */}
      <section className="mb-12 sm:mb-20 mt-2 sm:mt-4">
        <div className="flex flex-col gap-6 sm:gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 sm:mb-3 font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-stone-400">
              写作训练追踪社区
            </p>
            <h1 className="mb-3 sm:mb-5 text-3xl sm:text-5xl font-medium leading-tight tracking-tight text-stone-800">
              写作是门手艺
            </h1>
            <p className="max-w-md text-sm sm:text-base leading-relaxed text-stone-500">
              把缄默的知识变成可拆可练的动作，把常翻的车、管用的招，摊开给你看。
            </p>
            <p className="mt-2 sm:mt-3 text-[10px] sm:text-xs text-stone-400">
              —— 刘军强《写作是门手艺》
            </p>
          </div>
          <div className="flex gap-6 sm:gap-8 sm:text-right">
            <div>
              <p className="font-mono text-2xl sm:text-3xl font-light text-stone-800">{totalEx}</p>
              <p className="text-[10px] sm:text-xs text-stone-400">项训练</p>
            </div>
            <div>
              <p className="font-mono text-2xl sm:text-3xl font-light text-stone-800">{totalMo}</p>
              <p className="text-[10px] sm:text-xs text-stone-400">部电影</p>
            </div>
            <div>
              <p className="font-mono text-2xl sm:text-3xl font-light text-stone-800">{totalBo}</p>
              <p className="text-[10px] sm:text-xs text-stone-400">本书</p>
            </div>
          </div>
        </div>
      </section>

      {/* 十篇卡片 */}
      <section className="grid grid-cols-1 gap-2.5 sm:gap-3 sm:grid-cols-2">
        {sections.map((section) => (
          <Link
            key={section.id}
            href={`/section/${section.id}`}
            className="group relative flex items-start gap-3 sm:gap-5 rounded-lg border border-stone-200 bg-white p-3.5 sm:p-5 transition-all duration-200 hover:border-stone-300 hover:shadow-md active:scale-[0.98]"
          >
            <span className="mt-0.5 font-mono text-2xl sm:text-3xl font-light tracking-tight text-stone-200 transition-colors duration-200 group-hover:text-accent/40">
              {String(section.id).padStart(2, '0')}
            </span>

            <div className="min-w-0 flex-1">
              <div className="flex items-baseline gap-1.5 sm:gap-2">
                <h2 className="text-xs sm:text-sm font-medium text-stone-800">
                  {section.title}
                </h2>
                <span className="hidden text-xs text-stone-400 sm:inline">{section.chapters}</span>
              </div>
              <p className="mt-0.5 text-xs sm:text-sm text-stone-500">
                {section.subtitle}
              </p>

              <div className="mt-2.5 sm:mt-3 flex flex-wrap items-center gap-1.5 sm:gap-3">
                <span className="inline-flex items-center gap-1 rounded-full bg-stone-100 px-2 py-0.5 text-[10px] sm:text-xs text-stone-500">
                  {section.exercises.length} 训
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-stone-100 px-2 py-0.5 text-[10px] sm:text-xs text-stone-500">
                  {section.movies.length} 影
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-stone-100 px-2 py-0.5 text-[10px] sm:text-xs text-stone-500">
                  {section.books.length} 书
                </span>
                {section.references.length > 0 && (
                  <span className="text-[10px] sm:text-xs text-stone-300">+{section.references.length} 引用</span>
                )}
              </div>
            </div>

            <span className="mt-1 shrink-0 text-stone-300 transition-colors group-hover:text-stone-500">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </Link>
        ))}
      </section>

      {/* 底部 */}
      <section className="mt-10 sm:mt-16 border-t border-stone-100 pt-6 sm:pt-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-[10px] sm:text-xs text-stone-400 text-center sm:text-left">
            打开书，动笔写。写作不是想出来的，是写出来的。
          </p>
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 rounded-lg bg-stone-800 px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-white transition-colors hover:bg-stone-700 active:bg-stone-900"
          >
            查看进度
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
