import { css } from '@emotion/react'
import { MOBILE_BREAKPOINT } from '../common/theme'
import { Button } from './Button'
import { getArticlesResponse } from '../api/spaceflightnews'

const arrowButtonStyle = css`
  font-size: large;
  padding-inline: 8px;
`

const paginatorStyle = css`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
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

export function Paginator({
  articlesResponse,
  offset,
  limit,
  setOffset,
}: PaginatorProps) {
  const upperRange = offset + limit

  return (
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
  )
}

export interface PaginatorProps {
  articlesResponse: getArticlesResponse | undefined
  offset: number
  limit: number
  setOffset(offset: number): void
}
