import Link from 'next/link'
import { sections } from '@/data/sections'

export default function Home() {
  const totalEx = sections.reduce((s, sec) => s + sec.exercises.length, 0)
  const totalMo = sections.reduce((s, sec) => s + sec.movies.length, 0)
  const totalBo = sections.reduce((s, sec) => s + sec.books.length, 0)

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-8 sm:py-16">
      <section className="mb-14 sm:mb-24 mt-2 sm:mt-4">
        <div className="flex flex-col gap-8 sm:gap-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 sm:mb-4 font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-stone-400">
              写作训练追踪社区
            </p>
            <h1 className="mb-4 sm:mb-6 text-4xl sm:text-6xl font-medium leading-tight tracking-tight text-stone-800">
              写作是门手艺
            </h1>
            <p className="max-w-md text-base sm:text-lg leading-relaxed text-stone-500">
              把缄默的知识变成可拆可练的动作，把常翻的车、管用的招，摊开给你看。
            </p>
            <p className="mt-3 sm:mt-4 text-sm text-stone-400">
              —— 刘军强《写作是门手艺》
            </p>
          </div>
          <div className="flex gap-8 sm:gap-10 sm:text-right">
            <div>
              <p className="font-mono text-3xl sm:text-4xl font-light text-stone-800">{totalEx}</p>
              <p className="text-sm text-stone-400 mt-0.5">项训练</p>
            </div>
            <div>
              <p className="font-mono text-3xl sm:text-4xl font-light text-stone-800">{totalMo}</p>
              <p className="text-sm text-stone-400 mt-0.5">部电影</p>
            </div>
            <div>
              <p className="font-mono text-3xl sm:text-4xl font-light text-stone-800">{totalBo}</p>
              <p className="text-sm text-stone-400 mt-0.5">本书</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2">
        {sections.map((section) => (
          <Link
            key={section.id}
            href={`/section/${section.id}`}
            className="group relative flex items-start gap-4 sm:gap-6 rounded-lg border border-stone-200 bg-white p-4 sm:p-6 transition-all duration-200 hover:border-stone-300 hover:shadow-md active:scale-[0.98]"
          >
            <span className="mt-1 font-mono text-3xl sm:text-4xl font-light tracking-tight text-stone-200 transition-colors duration-200 group-hover:text-accent/40">
              {String(section.id).padStart(2, '0')}
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline gap-2">
                <h2 className="text-sm sm:text-base font-medium text-stone-800">
                  {section.title}
                </h2>
                <span className="hidden text-sm text-stone-400 sm:inline">{section.chapters}</span>
              </div>
              <p className="mt-1 text-sm sm:text-base text-stone-500">
                {section.subtitle}
              </p>
              <div className="mt-3 sm:mt-4 flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="inline-flex items-center gap-1 rounded-full bg-stone-100 px-2.5 py-0.5 text-xs sm:text-sm text-stone-500">
                  {section.exercises.length} 训
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-stone-100 px-2.5 py-0.5 text-xs sm:text-sm text-stone-500">
                  {section.movies.length} 影
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-stone-100 px-2.5 py-0.5 text-xs sm:text-sm text-stone-500">
                  {section.books.length} 书
                </span>
                {section.references.length > 0 && (
                  <span className="text-xs sm:text-sm text-stone-300">+{section.references.length} 引用</span>
                )}
              </div>
            </div>
            <span className="mt-1 shrink-0 text-stone-300 transition-colors group-hover:text-stone-500">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </Link>
        ))}
      </section>

      <section className="mt-14 sm:mt-20 border-t border-stone-100 pt-8 sm:pt-10">
        <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-between">
          <p className="text-sm text-stone-400 text-center sm:text-left">
            打开书，动笔写。写作不是想出来的，是写出来的。
          </p>
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 rounded-lg bg-stone-800 px-5 py-2.5 text-sm sm:text-base font-medium text-white transition-colors hover:bg-stone-700 active:bg-stone-900"
          >
            查看进度
            <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
              <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
