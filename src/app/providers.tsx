'use client'

import { useState, useEffect, createContext, useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

type Theme = 'light' | 'dark'
const ThemeCtx = createContext<{ theme: Theme; toggle: () => void }>({ theme: 'light', toggle: () => {} })
export const useTheme = () => useContext(ThemeCtx)

function ThemeToggle() {
  const { theme, toggle } = useTheme()
  return (
    <button
      type="button"
      onClick={toggle}
      className="rounded-full border border-stone-300 p-1.5 text-stone-500 transition-colors hover:border-stone-400 hover:text-stone-700"
      title={theme === 'dark' ? '切换日间模式' : '切换夜间模式'}
    >
      {theme === 'dark' ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1" x2="12" y2="3"/>
          <line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="3" y2="12"/>
          <line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      )}
    </button>
  )
}

export function Providers({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)
  const [user, setUser] = useState<{ email?: string } | null>(null)
  const router = useRouter()

  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme | null
    if (stored === 'dark' || stored === 'light') {
      setTheme(stored)
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    }
    setMounted(true)
  }, [])

  // 检查登录状态
  useEffect(() => {
    if (!mounted) return
    const checkAuth = async () => {
      try {
        const { createClient } = await import('@/lib/supabase')
        const supabase = createClient()
        if (!supabase) return
        const { data } = await supabase.auth.getSession()
        setUser(data.session?.user ?? null)
      } catch {
        // Supabase 未配置时忽略
      }
    }
    checkAuth()

    // 监听认证状态变化
    const { data: listener } = (() => {
      try {
        const { createClient } = require('@/lib/supabase')
        const supabase = createClient()
        if (!supabase) return { data: { subscription: { unsubscribe: () => {} } } }
        return supabase.auth.onAuthStateChange((_event, session) => {
          setUser(session?.user ?? null)
        })
      } catch { return { data: { subscription: { unsubscribe: () => {} } } } }
    })()

    return () => {
      listener?.subscription?.unsubscribe()
    }
  }, [mounted])

  useEffect(() => {
    if (!mounted) return
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme, mounted])

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  const handleLogout = async () => {
    try {
      const { createClient } = await import('@/lib/supabase')
      const supabase = createClient()
      if (supabase) { await supabase.auth.signOut() }
      setUser(null)
      router.refresh()
    } catch { /* ignore */ }
  }

  return (
    <ThemeCtx.Provider value={{ theme, toggle }}>
      <header className="fixed top-0 z-50 w-full border-b border-stone-200 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto flex h-12 sm:h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="text-base sm:text-lg font-medium tracking-tight text-stone-800">
            写作是门手艺
          </Link>
          <nav className="flex items-center gap-3 sm:gap-5 text-base sm:text-lg text-stone-500">
            <Link href="/" className="transition-colors hover:text-stone-800">首页</Link>
            <Link href="/dashboard" className="transition-colors hover:text-stone-800">进度</Link>
            <Link href="/community" className="transition-colors hover:text-stone-800">社区</Link>
            <ThemeToggle />
            {user ? (
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg text-stone-400 max-w-[120px] truncate">{user.email}</span>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="rounded-full border border-stone-300 px-3 py-1 sm:px-4 sm:py-1.5 text-base sm:text-lg font-medium text-stone-500 transition-colors hover:border-stone-400 hover:text-stone-700"
                >
                  退出
                </button>
              </div>
            ) : (
              <Link
                href="/auth/login"
                className="rounded-full border border-stone-300 px-3.5 py-1.5 sm:px-5 sm:py-2 text-base sm:text-lg font-medium text-stone-600 transition-colors hover:border-stone-400 hover:text-stone-800"
              >
                登录
              </Link>
            )}
          </nav>
        </div>
      </header>

      <main className="pt-12 sm:pt-14">{children}</main>

      <footer className="border-t border-stone-200 py-6 sm:py-8 text-center text-base sm:text-lg text-stone-400 px-4">
        一个写作训练追踪社区 · 基于刘军强《写作是门手艺》
      </footer>
    </ThemeCtx.Provider>
  )
}
