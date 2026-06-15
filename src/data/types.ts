// 写作训练类型
export interface Exercise {
  id: string
  category: 'think' | 'write' | 'do' // 想·写·作
  title: string
  description: string
}

// 电影推荐
export interface Movie {
  id: string
  title: string
  year: string
  director?: string
  description: string
}

// 延伸阅读（书籍）
export interface Book {
  id: string
  author: string
  title: string
  translator?: string
  publisher?: string
  year?: string
  description?: string
}

// 引用文献（脚注中的学术文献）
export interface Reference {
  id: string
  citation: string
  source: string // 来自哪个章节
}

// 篇（Section）
export interface Section {
  id: number
  title: string // 篇名
  subtitle: string // 如"分野：作文与论文"
  chapters: string // 如"第1-3章"
  exercises: Exercise[]
  movies: Movie[]
  books: Book[]
  references: Reference[]
}

// 用户进度
export interface UserProgress {
  userId: string
  completedExercises: string[] // exercise ids
  watchedMovies: string[] // movie ids
  readBooks: string[] // book ids
}

// 社区动态
export interface Activity {
  id: string
  userId: string
  userName: string
  type: 'exercise' | 'movie' | 'book'
  itemId: string
  itemTitle: string
  sectionId: number
  sectionTitle: string
  createdAt: string
}
