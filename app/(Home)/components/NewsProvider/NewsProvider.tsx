import { PropsWithChildren, useState } from 'react'

import useNewsApi from '../useNewsApi'
import { NewsContext } from './NewsContext'

export const NewsProvider = ({ children }: PropsWithChildren) => {
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)

  const newApi = useNewsApi({
    search: query,
    page
  })

  return (
    <NewsContext.Provider value={{ ...newApi, page, setPage, setQuery, query }}>
      {children}
    </NewsContext.Provider>
  )
}
