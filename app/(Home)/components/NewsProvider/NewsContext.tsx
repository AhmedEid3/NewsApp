import { createContext } from 'react'
import { IArticle } from '../IArticle'

interface NewsContextProps {
  news: IArticle[]
  searchedNews: IArticle[]
  loading: boolean
  error: string
  hasMore: boolean
  query: string
  setQuery: (query: string) => void
  setPage: (page: number) => void
}

export const NewsContext = createContext<NewsContextProps>({
  news: [],
  searchedNews: [],
  loading: false,
  error: '',
  hasMore: false,
  query: '',
  setQuery: () => {},
  setPage: () => {}
})
