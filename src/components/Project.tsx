import { css } from '@emotion/react'
import { FullscreenImage } from './FullScreenImage'

const flexStyle = css`
  display: flex;
  gap: 32px;
  justify-content: space-between;
  padding-block: 48px;
  border-radius: 4px;
  margin-block: 8px;
  width: 100%;
  padding-inline: 16px;

  @media (max-width: 1000px) {
    flex-wrap: wrap;
    padding-block: 16px;
    padding-inline: 0;
  }

  img {
    border-radius: 5px;
    height: 100%;
    width: auto;

    @media (max-width: 1000px) {
      max-width: 100%;
    }
  }
`

const paragraphStyle = css`
  margin-block: auto;
`

const imageWrapperStyle = css`
  width: 500px;
  max-height: 300px;
  display: flex;
  justify-content: center;
  border-radius: 5px;

  @media (max-width: 1000px) {
    width: 100%;
    border: none;
  }
`

const oppositeFlexStyle = css`
  flex-direction: row-reverse;
`

export function Project({
  title,
  alt,
  description,
  image,
  reverse,
  link,
  linkText = 'View project',
}: ProjectProps) {
  return (
    <div css={[flexStyle, reverse ? oppositeFlexStyle : '']}>
      <div css={paragraphStyle}>
        <h3>{title}</h3>
        <p>{description}</p>
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            {linkText}
          </a>
        ) : null}
      </div>
      <div css={imageWrapperStyle}>
        <FullscreenImage src={image} alt={alt} />
      </div>
    </div>
  )
}

export interface ProjectProps {
  title: string
  description: string
  image: string
  alt: string
  reverse?: boolean
  link?: string
  linkText?: string
}
