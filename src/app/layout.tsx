import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

export const metadata: Metadata = {
  title: '写作是门手艺 · 训练追踪',
  description: '基于刘军强《写作是门手艺》的写作训练任务追踪社区，跟同路人一起练习说理写作。',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-stone-50 text-stone-900 antialiased">
        <header className="fixed top-0 z-50 w-full border-b border-stone-200 bg-white/80 backdrop-blur-sm">
          <div className="mx-auto flex h-12 sm:h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
            <Link href="/" className="text-sm sm:text-base font-medium tracking-tight text-stone-800">
              写作是门手艺
            </Link>
            <nav className="flex items-center gap-3 sm:gap-6 text-xs sm:text-sm text-stone-500">
              <Link href="/" className="transition-colors hover:text-stone-800">
                首页
              </Link>
              <Link href="/dashboard" className="transition-colors hover:text-stone-800">
                进度
              </Link>
              <Link href="/community" className="transition-colors hover:text-stone-800">
                社区
              </Link>
              <button type="button" className="rounded-full border border-stone-300 px-3 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs font-medium text-stone-600 transition-colors hover:border-stone-400 hover:text-stone-800">
                登录
              </button>
            </nav>
          </div>
        </header>

        <main className="pt-12 sm:pt-14">{children}</main>

        <footer className="border-t border-stone-200 py-6 sm:py-8 text-center text-[10px] sm:text-xs text-stone-400 px-4">
          一个写作训练追踪社区 · 基于刘军强《写作是门手艺》
        </footer>
      </body>
    </html>
  )
}
