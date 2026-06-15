import { createBrowserClient } from '@supabase/ssr'

// 浏览器端客户端，未配置时返回 null
export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !key || url.includes('你的项目')) {
    return null
  }
  return createBrowserClient(url, key)
}
