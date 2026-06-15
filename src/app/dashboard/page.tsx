'use client'

import { useState, useEffect } from 'react'
import { sections } from '@/data/sections'
import { getProgress } from '@/lib/progress'
import Link from 'next/link'

function RingProgress({ pct, size = 72, stroke = 4 }: { pct: number; size?: number; stroke?: number }) {
  const r = size / 2 - stroke
  const circ = 2 * Math.PI * r
  const offset = circ - (pct / 100) * circ

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg className="h-full w-full -rotate-90" viewBox={`0 0 ${size} ${size}`}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#e7e5e4" strokeWidth={stroke} />
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#b8956a" strokeWidth={stroke} strokeLinecap="round"
          strokeDasharray={circ} strokeDashoffset={offset}
          className="transition-all duration-1000 ease-out" />
      </svg>
      <span className="absolute font-mono text-sm font-medium text-stone-800">{pct}%</span>
    </div>
  )
}

export default function DashboardPage() {
  const [mounted, setMounted] = useState(false)
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    setMounted(true)
    const t = setTimeout(() => setAnimated(true), 200)
    return () => clearTimeout(t)
  }, [])

  if (!mounted) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <p className="text-stone-300">加载中……</p>
      </div>
    )
  }

  const progress = getProgress()
  const totalExercises = sections.reduce((s, sec) => s + sec.exercises.length, 0)
  const totalMovies = sections.reduce((s, sec) => s + sec.movies.length, 0)
  const totalBooks = sections.reduce((s, sec) => s + sec.books.length, 0)

  const doneExercises = progress.completedExercises.length
  const doneMovies = progress.watchedMovies.length
  const doneBooks = progress.readBooks.length

  const exPct = totalExercises > 0 ? Math.round((doneExercises / totalExercises) * 100) : 0
  const moPct = totalMovies > 0 ? Math.round((doneMovies / totalMovies) * 100) : 0
  const boPct = totalBooks > 0 ? Math.round((doneBooks / totalBooks) * 100) : 0
  const allPct = totalExercises + totalMovies + totalBooks > 0
    ? Math.round(((doneExercises + doneMovies + doneBooks) / (totalExercises + totalMovies + totalBooks)) * 100)
    : 0

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-8 sm:py-16">
      <div className="mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl font-medium text-stone-800">我的进度</h1>
        <p className="mt-1.5 sm:mt-2 text-sm sm:text-base text-stone-500">
          数据保存在当前浏览器中，随时回来继续。
        </p>
      </div>

      {/* 总完成率 */}
      <div className="mb-10 sm:mb-12 flex flex-col items-center">
        <RingProgress pct={animated ? allPct : 0} size={100} stroke={5} />
        <p className="mt-2.5 sm:mt-3 text-sm font-medium text-stone-700">总完成率</p>
        <p className="mt-0.5 text-sm text-stone-400">
          {doneExercises + doneMovies + doneBooks} / {totalExercises + totalMovies + totalBooks} 项已完成
        </p>
      </div>

      {/* 三大分类 */}
      <div className="mb-10 sm:mb-14 grid grid-cols-3 gap-2.5 sm:gap-4">
        {[
          { label: '训练', done: doneExercises, total: totalExercises, pct: exPct },
          { label: '电影', done: doneMovies, total: totalMovies, pct: moPct },
          { label: '书籍', done: doneBooks, total: totalBooks, pct: boPct },
        ].map((item) => (
          <div key={item.label} className="flex flex-col items-center rounded-lg border border-stone-200 bg-white p-3.5 sm:p-5">
            <RingProgress pct={animated ? item.pct : 0} size={56} stroke={4} />
            <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm font-medium text-stone-600">{item.label}</p>
            <p className="mt-0.5 text-xs sm:text-sm text-stone-400">{item.done}/{item.total}</p>
          </div>
        ))}
      </div>

      {/* 各篇进度 */}
      <h2 className="mb-3 sm:mb-4 text-sm sm:text-base font-medium text-stone-600">各篇详情</h2>
      <div className="space-y-1.5 sm:space-y-2">
        {sections.map((sec) => {
          const secExDone = sec.exercises.filter((e) => progress.completedExercises.includes(e.id)).length
          const secMoDone = sec.movies.filter((m) => progress.watchedMovies.includes(m.id)).length
          const secBoDone = sec.books.filter((b) => progress.readBooks.includes(b.id)).length
          const secTotal = sec.exercises.length + sec.movies.length + sec.books.length
          const secDone = secExDone + secMoDone + secBoDone
          const secPct = secTotal > 0 ? Math.round((secDone / secTotal) * 100) : 0

          return (
            <Link
              key={sec.id}
              href={`/section/${sec.id}`}
              className="flex items-center gap-3 sm:gap-4 rounded-md border border-stone-200 bg-white p-3 sm:p-4 transition-all duration-150 hover:border-stone-300 active:bg-stone-50"
            >
              <span className="font-mono text-base sm:text-lg font-light text-stone-300 w-6 sm:w-7">{String(sec.id).padStart(2, '0')}</span>
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between">
                  <p className="text-xs sm:text-sm text-stone-700 truncate">{sec.subtitle}</p>
                  <span className="ml-1.5 sm:ml-2 shrink-0 font-mono text-xs sm:text-sm text-stone-400">{secDone}/{secTotal}</span>
                </div>
                <div className="mt-1.5 sm:mt-2 flex h-1.5 w-full gap-0.5 rounded-full overflow-hidden bg-stone-100">
                  {sec.exercises.length > 0 && (
                    <div className="bg-amber-400/60 transition-all duration-500" style={{ width: `${(sec.exercises.length / secTotal) * 100}%` }} />
                  )}
                  {sec.movies.length > 0 && (
                    <div className="bg-sky-400/60 transition-all duration-500" style={{ width: `${(sec.movies.length / secTotal) * 100}%` }} />
                  )}
                  {sec.books.length > 0 && (
                    <div className="bg-emerald-400/60 transition-all duration-500" style={{ width: `${(sec.books.length / secTotal) * 100}%` }} />
                  )}
                </div>
              </div>
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="shrink-0 text-stone-300">
                <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          )
        })}
      </div>

      {/* 空状态 */}
      {doneExercises + doneMovies + doneBooks === 0 && (
        <div className="mt-10 sm:mt-12 rounded-lg border border-dashed border-stone-200 bg-white p-6 sm:p-8 text-center">
          <p className="text-xs sm:text-sm text-stone-400">
            还没有任何完成记录。去各篇的训练页开始勾选吧。
          </p>
          <Link href="/section/1"
            className="mt-3 inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-accent hover:underline underline-offset-4">
            从第一篇开始
          </Link>
        </div>
      )}
    </div>
  )
}
