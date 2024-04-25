import { useEffect, useState } from 'react'

import { newsApiKey } from '../../../constant/news-api-key'
import { IArticle } from './IArticle'

interface INewsApiResponse {
  articles: IArticle[]
  status: string
  totalResults: number
}

interface Props {
  search: string
  page?: number
  pageSize?: number
}

export default function useNewsApi({ search, page = 1, pageSize = 10 }: Props) {
  const [news, setNews] = useState<IArticle[]>([])
  const [searchedNews, setSearchedNews] = useState<IArticle[]>([])

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [hasMore, setHasMore] = useState(true)

  const fetchNews = async () => {
    try {
      setLoading(true)
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${
          search ? search : 'reactjs'
        }&apiKey=${newsApiKey}&page=${page}&pageSize=${pageSize}`
      )
      const data = (await response.json()) as INewsApiResponse

      if (data.status !== 'ok') {
        console.log(data)
        setError('Error fetching data')
        setLoading(false)
        return
      }

      if (search) {
        setSearchedNews((prev) => [...prev, ...data.articles])
        setNews([])
      } else {
        setNews((prev) => [...prev, ...data.articles])
        setSearchedNews([])
      }

      setHasMore(!!data.articles.length)
      setLoading(false)
    } catch (error) {
      setError('Error fetching search data')
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchNews()
  }, [page, pageSize, search])

  return { news, searchedNews, loading, error, hasMore }
}
