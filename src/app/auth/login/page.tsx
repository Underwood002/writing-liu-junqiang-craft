'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function LoginPage() {
  const router = useRouter()
  const [mode, setMode] = useState<'login' | 'signup'>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    const { createClient } = await import('@/lib/supabase')
    const supabase = createClient()
    if (!supabase) { setError('认证服务尚未配置，请稍后再试。'); setLoading(false); return }

    if (mode === 'signup') {
      const { error: err } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: `${location.origin}/auth/callback` },
      })
      if (err) {
        setError(err.message)
      } else {
        setError('注册邮件已发送，请查看邮箱并点击确认链接。')
      }
    } else {
      const { error: err } = await supabase.auth.signInWithPassword({ email, password })
      if (err) {
        setError(err.message)
      } else {
        router.push('/dashboard')
        router.refresh()
      }
    }
    setLoading(false)
  }

  return (
    <div className="mx-auto max-w-sm px-4 py-24 sm:py-32">
      <h1 className="mb-2 text-2xl font-medium text-stone-800">
        {mode === 'login' ? '登录' : '注册'}
      </h1>
      <p className="mb-8 text-sm text-stone-500">
        {mode === 'login' ? '欢迎回来，继续你的写作训练。' : '加入写作训练社区，和同路人一起练习。'}
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-stone-600 mb-1">邮箱</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="your@email.com"
            className="w-full rounded-md border border-stone-300 px-4 py-2.5 text-sm text-stone-800 placeholder:text-stone-300 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-stone-600 mb-1">密码</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            placeholder="至少6位"
            className="w-full rounded-md border border-stone-300 px-4 py-2.5 text-sm text-stone-800 placeholder:text-stone-300 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
        </div>

        {error && (
          <p className={`text-sm ${error.includes('已发送') ? 'text-emerald-600' : 'text-red-500'}`}>
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-md bg-stone-800 py-2.5 text-sm font-medium text-white transition-colors hover:bg-stone-700 disabled:opacity-50"
        >
          {loading ? '请稍候…' : mode === 'login' ? '登录' : '注册'}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-stone-400">
        {mode === 'login' ? '还没有账号？' : '已有账号？'}
        <button
          type="button"
          onClick={() => { setMode(mode === 'login' ? 'signup' : 'login'); setError('') }}
          className="ml-1 text-accent hover:underline"
        >
          {mode === 'login' ? '注册' : '登录'}
        </button>
      </p>

      <p className="mt-8 text-center text-xs text-stone-400">
        <Link href="/" className="hover:text-stone-600">返回首页</Link>
      </p>
    </div>
  )
}
