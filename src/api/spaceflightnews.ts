const BASE_URL = 'https://api.spaceflightnewsapi.net/v4'

export async function getArticles({ limit, offset, search }: getArticlesProps) {
  const params = new URLSearchParams()
  params.append('limit', limit.toString())
  params.append('offset', offset.toString())
  params.append('search', search)
  const response = await fetch(`${BASE_URL}/articles?${params.toString()}`)
  const json = await response.json()
  return json as getArticlesResponse
}

export interface searchArticle {
  id: number
  summary: string
  title: string
  image_url: string
  published_at: string
  url: string
}

export interface getArticlesResponse {
  count: number
  results: searchArticle[]
  next: string
  previous: string
}

export interface getArticlesProps {
  limit: number
  offset: number
  search: string
}

export async function getArticle({ id }: getArticleProps) {
  const response = await fetch(`${BASE_URL}/articles/${id}`)
  return response
}

export interface getArticleProps {
  id: number
}
