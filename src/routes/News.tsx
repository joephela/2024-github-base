import { css } from '@emotion/react'
import { centerMixin, transitionMixin } from '../common/sharedStyles'
import { useFadeTransition } from '../hooks/useFadeTransition'
import { useRef, useState } from 'react'
import { Select } from '../components/Select'
import { getArticles } from '../api/spaceflightnews'
import { useQuery } from '@tanstack/react-query'
import { borderedButton, Button } from '../components/Button'
import { Loading } from '../assets/Loading'
import { Article } from '../components/Article'
import { Paginator } from '../components/Paginator'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { SearchIcon } from '../assets/SearchIcon'
import { MOBILE_BREAKPOINT } from '../common/theme'

const newsWrapperStyle = css`
  ${transitionMixin}
  ${centerMixin}
`

const searchResultsWrapperStyle = css`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  padding-block: 8px;
`

const inputStyle = css`
  height: 36px;
  width: 200px;
  border: 1px solid var(--fg-color);
  border-radius: 4px 0 0 4px;
  color: var(--fg-color);
  background: var(--bg-color);
  padding-inline: 8px;
  border-right: 0;
  box-sizing: border-box;

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
    && {
      width: 124px;
    }
  }
`

const searchStyle = css`
  ${borderedButton}
  height: 36px;
  border-radius: 0 4px 4px 0;
  border-left: 0;
  box-sizing: border-box;
`

const loadingWrapperStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    max-width: 300px;
  }
`

const searchFormStyle = css`
  display: flex;
  padding-block: 16px;
`

const searchFormWrapperStyle = css`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
`

const selectStyle = css`
  border: 1px solid var(--fg-color);
  border-radius: 4px;
  background: unset;
  height: 36px;
  font-size: medium;
  cursor: pointer;
  color: var(--fg-color);
  padding-inline: 8px;
`

export function News() {
  const { ref } = useFadeTransition()
  const navigate = useNavigate()
  const [params, setParams] = useSearchParams()
  const offset = params.get('offset')
  const limit = params.get('limit')
  const search = params.get('search')
  const offsetInt = offset ? parseInt(offset) : 0
  const limitInt = limit ? parseInt(limit) : 25
  const [searchInput, setSearchInput] = useState('')
  const limitOptions = [
    { label: '25', value: '25' },
    { label: '50', value: '50' },
    { label: '100', value: '100' },
  ]
  const inputRef = useRef<HTMLInputElement>(null)
  const {
    data: articlesResponse,
    isFetching,
    isLoading,
  } = useQuery({
    queryFn: () => {
      return getArticles({
        limit: limitInt,
        offset: offsetInt,
        search: search ?? '',
      })
    },
    queryKey: ['articles', search, limit, offset],
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })
  function onUrlChange({
    offset,
    search,
    limit,
  }: {
    offset: number
    search: string
    limit: number
  }) {
    const params = new URLSearchParams()
    params.append('offset', offset.toString())
    params.append('search', search)
    params.append('limit', limit.toString())
    navigate(`/news?${params.toString()}`)
  }

  return (
    <div css={newsWrapperStyle} ref={ref}>
      <h1>News</h1>
      <p>
        An example of a search experience built with a{' '}
        <a
          href="https://spaceflightnewsapi.net/?ref=public_apis"
          target="_blank"
        >
          public api
        </a>
        .
      </p>
      <div css={searchFormWrapperStyle}>
        <form
          css={searchFormStyle}
          onSubmit={(e) => {
            e.preventDefault()
            onUrlChange({
              limit: limitInt,
              offset: 0,
              search: searchInput,
            })
          }}
        >
          <input
            ref={inputRef}
            id="news-search"
            type="text"
            aria-label="search news"
            css={inputStyle}
            placeholder="Search articles..."
            onChange={(event) => {
              setSearchInput(event.target.value)
            }}
          ></input>
          <Button type="submit" css={searchStyle} aria-label="perform search">
            <SearchIcon />
          </Button>
        </form>
        <Select
          label="Limit"
          hideLabel={true}
          css={selectStyle}
          options={limitOptions}
          onChange={({ target }) => {
            onUrlChange({
              limit: parseInt(target.value),
              offset: offsetInt,
              search: search ?? '',
            })
          }}
        />

        <Button
          css={borderedButton}
          type="button"
          onClick={() => {
            setParams()

            if (inputRef.current) {
              inputRef.current.value = ''
            }
          }}
        >
          Reset
        </Button>
      </div>
      {articlesResponse?.results.length ? (
        <Paginator articlesResponse={articlesResponse} />
      ) : null}
      {isFetching || isLoading ? (
        <div css={loadingWrapperStyle}>
          <Loading />
        </div>
      ) : articlesResponse ? (
        <div css={searchResultsWrapperStyle}>
          {articlesResponse.results.length === 0 ? (
            <p>No results found.</p>
          ) : (
            articlesResponse.results.map((props) => (
              <Article key={props.id} {...props} />
            ))
          )}
        </div>
      ) : null}
      {articlesResponse?.results.length ? (
        <Paginator articlesResponse={articlesResponse} />
      ) : null}
    </div>
  )
}
