import { css } from '@emotion/react'
import { centerMixin, transitionMixin } from '../common/sharedStyles'
import { useFadeTransition } from '../hooks/useFadeTransition'
import { useState } from 'react'
import { Select } from '../components/Select'
import { getArticles } from '../api/spaceflightnews'
import { useQuery } from '@tanstack/react-query'
import { Button } from '../components/Button'
import { Loading } from '../assets/Loading'
import { MOBILE_BREAKPOINT } from '../common/theme'
import { Article } from '../components/Article'

const newsWrapperStyle = css`
  ${transitionMixin}
  ${centerMixin}
`

export function News() {
  const { ref } = useFadeTransition()
  const [limit, setLimit] = useState(25)
  const [offset, setOffset] = useState(0)
  const [searchInput, setSearchInput] = useState('')
  const [search, setSearch] = useState('')
  const limitOptions = [
    { label: '25', value: '25' },
    { label: '50', value: '50' },
    { label: '100', value: '100' },
  ]
  const {
    data: articlesResponse,
    isFetching,
    isLoading,
  } = useQuery({
    queryKey: ['articles', search, limit, offset],
    queryFn: () => {
      return getArticles({ limit, offset, search })
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })

  const searchResultsWrapperStyle = css`
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    padding-block: 24px;
  `

  const arrowButtonStyle = css`
    font-size: large;
    padding-inline: 8px;
  `

  const paginatorStyle = css`
    display: flex;
    gap: 16px;
    align-items: center;
    position: sticky;
    flex-wrap: wrap;
    top: 0;
    z-index: var(--z-index-popover);
    background: var(--bg-color);
    width: 100%;

    @media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
      && {
        gap: 8px;
        padding: 8px;
      }
    }
  `

  const inputStyle = css`
    height: 1em;
    width: 100px;
  `

  const searchStyle = css`
    border: 1px solid;
    border-radius: 4px;
    padding-inline: 8px;
    margin-inline-start: 4px;
  `

  const loadingWrapperStyle = css`
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      max-width: 300px;
    }
  `

  const upperRange = offset + limit

  const searchFormStyle = css`
    padding-block: 16px;
  `

  const searchFormWrapperStyle = css`
    display: flex;
    gap: 16px;
    align-items: center;
  `

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
            setSearch(searchInput)
            setOffset(0)
          }}
        >
          <input
            id="news-search"
            type="text"
            aria-label="search news"
            css={inputStyle}
            onChange={(event) => {
              setSearchInput(event.target.value)
            }}
          ></input>
          <Button type="submit" css={searchStyle}>
            Search
          </Button>
        </form>
        <Select
          label="Limit"
          hideLabel={true}
          options={limitOptions}
          onChange={({ target }) => {
            setLimit(parseInt(target.value))
          }}
        />
      </div>
      <div css={paginatorStyle}>
        <p>Total: {articlesResponse ? articlesResponse.count : 'loading'}</p>
        <div>
          <Button
            css={arrowButtonStyle}
            disabled={offset === 0}
            aria-label="First Page"
            title="First Page"
            onClick={() => {
              setOffset(0)
            }}
          >{`<<`}</Button>
          <Button
            css={arrowButtonStyle}
            disabled={offset === 0}
            aria-label="Previous page"
            title="Previous page"
            onClick={() => {
              if (offset - limit > 0) {
                setOffset(offset - limit)
              } else {
                setOffset(0)
              }
            }}
          >{`<`}</Button>
          Showing:{' '}
          {`${offset + 1} - ${upperRange > (articlesResponse?.count ?? upperRange) ? (articlesResponse?.count ?? upperRange) : upperRange}`}
          <Button
            disabled={
              !articlesResponse || limit + offset >= articlesResponse.count
            }
            onClick={() => {
              setOffset(offset + limit)
            }}
            css={arrowButtonStyle}
            aria-label="Next page"
            title="Next page"
          >{`>`}</Button>
          <Button
            disabled={
              !articlesResponse || offset === articlesResponse.count - limit
            }
            onClick={() => {
              setOffset(articlesResponse!.count - limit)
            }}
            css={arrowButtonStyle}
            aria-label="Last page"
            title="Last page"
          >{`>>`}</Button>
        </div>
      </div>
      {isFetching || isLoading ? (
        <div css={loadingWrapperStyle}>
          <Loading />
        </div>
      ) : articlesResponse ? (
        <div css={searchResultsWrapperStyle}>
          {articlesResponse.count === 0 ? (
            <p>No results found.</p>
          ) : (
            articlesResponse.results.map((props) => (
              <Article key={props.id} {...props} />
            ))
          )}
        </div>
      ) : null}
    </div>
  )
}
