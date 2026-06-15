'use client'

const STORAGE_KEY = 'writing-craft-progress'
const WRITING_KEY = 'writing-craft-submissions'

interface LocalProgress {
  completedExercises: string[]
  watchedMovies: string[]
  readBooks: string[]
}

export interface WritingSubmission {
  exerciseId: string
  content: string
  public: boolean
  createdAt: string
  updatedAt: string
}

function load(): LocalProgress {
  if (typeof window === 'undefined') return { completedExercises: [], watchedMovies: [], readBooks: [] }
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : { completedExercises: [], watchedMovies: [], readBooks: [] }
  } catch {
    return { completedExercises: [], watchedMovies: [], readBooks: [] }
  }
}

function save(data: LocalProgress) {
  if (typeof window === 'undefined') return
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

export function isCompleted(type: 'exercise' | 'movie' | 'book', id: string): boolean {
  const data = load()
  if (type === 'exercise') return data.completedExercises.includes(id)
  if (type === 'movie') return data.watchedMovies.includes(id)
  return data.readBooks.includes(id)
}

export function toggleCompleted(type: 'exercise' | 'movie' | 'book', id: string): boolean {
  const data = load()
  let arr: string[]
  if (type === 'exercise') arr = data.completedExercises
  else if (type === 'movie') arr = data.watchedMovies
  else arr = data.readBooks

  const idx = arr.indexOf(id)
  if (idx >= 0) arr.splice(idx, 1)
  else arr.push(id)

  save(data)
  return idx < 0
}

export function getProgress(): LocalProgress {
  return load()
}

// 写作提交
function loadSubmissions(): WritingSubmission[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(WRITING_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function saveSubmissions(data: WritingSubmission[]) {
  if (typeof window === 'undefined') return
  localStorage.setItem(WRITING_KEY, JSON.stringify(data))
}

export function getSubmission(exerciseId: string): WritingSubmission | null {
  const all = loadSubmissions()
  return all.find((s) => s.exerciseId === exerciseId) || null
}

export function getAllSubmissions(): WritingSubmission[] {
  return loadSubmissions()
}

export function saveSubmission(exerciseId: string, content: string, isPublic = true): WritingSubmission | null {
  // 空文本不保存，如果之前有则删除
  if (!content.trim()) {
    deleteSubmission(exerciseId)
    return null
  }

  const all = loadSubmissions()
  const existing = all.findIndex((s) => s.exerciseId === exerciseId)
  const now = new Date().toISOString()

  if (existing >= 0) {
    all[existing].content = content.trim()
    all[existing].public = isPublic
    all[existing].updatedAt = now
    saveSubmissions(all)
    return all[existing]
  } else {
    const submission: WritingSubmission = { exerciseId, content: content.trim(), public: isPublic, createdAt: now, updatedAt: now }
    all.push(submission)
    saveSubmissions(all)
    return submission
  }
}

export function togglePublic(exerciseId: string): boolean {
  const all = loadSubmissions()
  const idx = all.findIndex((s) => s.exerciseId === exerciseId)
  if (idx < 0) return false
  all[idx].public = !all[idx].public
  saveSubmissions(all)
  return all[idx].public
}

export function deleteSubmission(exerciseId: string) {
  const all = loadSubmissions()
  const filtered = all.filter((s) => s.exerciseId !== exerciseId)
  saveSubmissions(filtered)
}
