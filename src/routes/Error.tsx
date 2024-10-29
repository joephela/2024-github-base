import { Link } from 'react-router-dom'
import { ErrorIcon } from '../assets/ErrorIcon'
import { css } from '@emotion/react'

const headerStyle = css`
  display: flex;
  align-items: center;
  gap: 8px;
`

export function Error() {
  return (
    <div>
      <h1 css={headerStyle}>
        <ErrorIcon />
        Path not found
      </h1>
      Looks like the path you are trying to reach does not exist. Run back{' '}
      <Link to="/">Home</Link>!
    </div>
  )
}
