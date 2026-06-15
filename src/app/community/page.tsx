import { sections, writingTips } from '@/data/sections'

export default function CommunityPage() {
  const totalExercises = sections.reduce((s, sec) => s + sec.exercises.length, 0)
  const totalMovies = sections.reduce((s, sec) => s + sec.movies.length, 0)
  const totalBooks = sections.reduce((s, sec) => s + sec.books.length, 0)
  const totalAll = totalExercises + totalMovies + totalBooks

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-8 sm:py-16">
      <div className="mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl font-medium text-stone-800">社区</h1>
        <p className="mt-1.5 sm:mt-2 text-base sm:text-lg text-stone-500">
          基于刘军强《写作是门手艺》整理的写作训练体系。
        </p>
      </div>

      {/* 全书总览 */}
      <section className="mb-10 sm:mb-14">
        <h2 className="mb-3 sm:mb-4 text-base sm:text-lg font-medium text-stone-600">全书任务总览</h2>
        <div className="grid grid-cols-4 gap-2 sm:gap-3">
          {[
            { label: '篇', value: sections.length, color: 'text-stone-800' },
            { label: '项训练', value: totalExercises, color: 'text-amber-700' },
            { label: '部电影', value: totalMovies, color: 'text-sky-700' },
            { label: '本书', value: totalBooks, color: 'text-emerald-700' },
          ].map((item) => (
            <div key={item.label} className="rounded-lg border border-stone-200 bg-white p-3.5 sm:p-5 text-center">
              <p className={`font-mono text-xl sm:text-3xl font-light ${item.color}`}>{item.value}</p>
              <p className="mt-0.5 sm:mt-1 text-base sm:text-lg text-stone-400">{item.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-2.5 sm:mt-3 text-center text-base sm:text-lg text-stone-400">
          共计 {totalAll} 项任务，覆盖十篇三十章
        </p>
      </section>

      {/* 各篇内容量 */}
      <section className="mb-10 sm:mb-14">
        <h2 className="mb-3 sm:mb-4 text-base sm:text-lg font-medium text-stone-600">各篇内容量</h2>
        <div className="space-y-1.5 sm:space-y-2">
          {sections.map((sec) => (
            <div key={sec.id} className="flex items-center gap-3 sm:gap-4 rounded-md border border-stone-200 bg-white p-3 sm:p-4">
              <span className="font-mono text-base sm:text-lg font-light text-stone-300 w-6 sm:w-7">{String(sec.id).padStart(2, '0')}</span>
              <div className="min-w-0 flex-1">
                <p className="text-base sm:text-lg font-medium text-stone-700 truncate">{sec.title}：{sec.subtitle}</p>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                <span className="inline-flex items-center gap-1 text-base sm:text-lg text-stone-400">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-400/60" />
                  <span className="hidden sm:inline">{sec.exercises.length} 训</span>
                  <span className="sm:hidden">{sec.exercises.length}</span>
                </span>
                <span className="inline-flex items-center gap-1 text-base sm:text-lg text-stone-400">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-sky-400/60" />
                  <span className="hidden sm:inline">{sec.movies.length} 影</span>
                  <span className="sm:hidden">{sec.movies.length}</span>
                </span>
                <span className="inline-flex items-center gap-1 text-base sm:text-lg text-stone-400">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400/60" />
                  <span className="hidden sm:inline">{sec.books.length} 书</span>
                  <span className="sm:hidden">{sec.books.length}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 写作伴手礼 */}
      <section className="mb-10 sm:mb-14">
        <h2 className="mb-3 sm:mb-4 text-base sm:text-lg font-medium text-stone-600">
          写作伴手礼
          <span className="ml-1.5 sm:ml-2 text-base sm:text-lg font-normal text-stone-400">全书36条精华</span>
        </h2>
        <div className="grid grid-cols-1 gap-1.5 sm:gap-2 sm:grid-cols-2">
          {writingTips.map((tip) => (
            <div key={tip.id} className="flex gap-2.5 sm:gap-3 rounded-md border border-stone-100 bg-white p-3 sm:p-3.5">
              <span className="font-mono text-base sm:text-lg text-stone-300 shrink-0 mt-px">{String(tip.id).padStart(2, '0')}</span>
              <div>
                <p className="text-base sm:text-lg font-medium text-stone-700">{tip.title}</p>
                <p className="mt-0.5 text-base sm:text-lg text-stone-400">{tip.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 社区占位 */}
      <section className="border-t border-stone-100 pt-8 sm:pt-10">
        <div className="rounded-lg border border-dashed border-stone-200 bg-white p-6 sm:p-8 text-center">
          <p className="text-base sm:text-lg font-medium text-stone-500">多用户功能即将上线</p>
          <p className="mt-1 sm:mt-1.5 text-base sm:text-lg text-stone-400">
            登录后即可记录训练进度，与同路人分享写作成长的每一步。
          </p>
          <div className="mt-4 sm:mt-5 inline-flex items-center gap-2 rounded-full border border-stone-200 px-3 sm:px-4 py-1.5 text-base sm:text-lg text-stone-400">
            Supabase Auth · 邮箱注册 / GitHub 登录
          </div>
        </div>
      </section>
    </div>
  )
}
