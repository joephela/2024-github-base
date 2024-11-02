import { css } from '@emotion/react'
import { MOBILE_BREAKPOINT } from '../common/theme'
import { borderedButton, Button } from './Button'
import { getArticlesResponse } from '../api/spaceflightnews'
import { useNavigate, useSearchParams } from 'react-router-dom'

const arrowButtonStyle = css`
  ${borderedButton}
  font-size: medium;
  padding-inline: 8px;
  min-width: 40px;
`

const paginatorStyle = css`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  top: 0;
  z-index: var(--z-index-popover);
  background: var(--bg-color);
  max-width: 100%;

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
    && {
      gap: 8px;
      padding: 8px;
    }
  }
`

const paginatorButtonsWrapperStyle = css`
  display: flex;
  gap: 8px;
  align-items: center;
`

export function Paginator({ articlesResponse }: PaginatorProps) {
  let [searchParams, setSearchParams] = useSearchParams()
  const limit = searchParams.get('limit')
  const offset = searchParams.get('offset')
  const offsetInt = offset ? parseInt(offset) : 0
  const limitInt = limit ? parseInt(limit) : 25
  const upperRange = offsetInt + limitInt
  const navigate = useNavigate()

  return (
    <div css={paginatorStyle}>
      <p>
        {articlesResponse ? articlesResponse.count.toLocaleString() : 'loading'}{' '}
        results
      </p>
      <div css={paginatorButtonsWrapperStyle}>
        <Button
          css={arrowButtonStyle}
          disabled={offsetInt === 0}
          aria-label="First Page"
          title="First Page"
          onClick={() => {
            searchParams.set('offset', '0')
            setSearchParams(searchParams)
          }}
        >{`<<`}</Button>
        <Button
          css={arrowButtonStyle}
          disabled={offsetInt === 0}
          aria-label="Previous page"
          title="Previous page"
          onClick={() => {
            if (offsetInt - limitInt > 0) {
              searchParams.set('offset', `${offsetInt - limitInt}`)
              navigate(`/news?${searchParams.toString()}`)
            } else {
              searchParams.set('offset', '0')
              navigate(`/news?${searchParams.toString()}`)
            }
          }}
        >{`<`}</Button>
        Showing:{' '}
        {`${offsetInt + 1} - ${upperRange > (articlesResponse?.count ?? upperRange) ? (articlesResponse?.count ?? upperRange) : upperRange}`}
        <Button
          disabled={
            !articlesResponse || limitInt + offsetInt >= articlesResponse.count
          }
          onClick={() => {
            searchParams.set('offset', `${offsetInt + limitInt}`)
            navigate(`/news?${searchParams.toString()}`)
          }}
          css={arrowButtonStyle}
          aria-label="Next page"
          title="Next page"
        >{`>`}</Button>
        <Button
          disabled={
            !articlesResponse || offsetInt === articlesResponse.count - limitInt
          }
          onClick={() => {
            searchParams.set('offset', `${articlesResponse!.count - limitInt}`)
            navigate(`/news?${searchParams.toString()}`)
          }}
          css={arrowButtonStyle}
          aria-label="Last page"
          title="Last page"
        >{`>>`}</Button>
      </div>
    </div>
  )
}

export interface PaginatorProps {
  articlesResponse: getArticlesResponse | undefined
}
