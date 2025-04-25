import { css } from '@emotion/react'
import { searchArticle } from '../api/spaceflightnews'
import { MOBILE_BREAKPOINT } from '../common/theme'

const articleStyle = css`
  display: flex;
  gap: 16px;
  width: 90%;
  border-bottom: 1px solid gray;
  padding: 16px;
  padding-block: 40px;

  &&:last-child {
    border-bottom: none;
  }

  h3 {
    padding: 0;
    margin: 0;
  }

  p {
    margin-block-end: 0;
  }

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
    && {
      flex-direction: column;
    }
  }
`

const imageWrapperStyle = css`
  max-width: 200px;
  min-width: 200px;

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
    && {
      max-width: unset;
    }
  }
`

const imageStyle = css`
  width: 100%;
  border-radius: 4px;
`

const dateLineStyle = css`
  font-size: small;
  line-height: 1em;
`

export function Article({
  id,
  image_url,
  published_at,
  summary,
  title,
  url,
}: searchArticle) {
  return (
    <div css={articleStyle} key={id}>
      <div css={imageWrapperStyle}>
        <img
          css={imageStyle}
          src={image_url}
          loading="lazy"
          aria-label={`relating to ${title}`}
          onError={(props) => {
            //@ts-expect-error there is a src
            props.target.src = '/image-not-found.svg'
          }}
        />
      </div>
      <div>
        <a href={url} target="_blank">
          <h2>{title}</h2>
        </a>
        <p
          css={dateLineStyle}
        >{`${new Date(published_at).toLocaleDateString()} - ${new Date(published_at).toLocaleTimeString()}`}</p>
        <p>{summary}</p>
      </div>
    </div>
  )
}
