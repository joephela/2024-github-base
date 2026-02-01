import { css } from '@emotion/react'
import { reducedMotionMixin } from '../common/sharedStyles'

const cardStyle = css`
  ${reducedMotionMixin}
  background: var(--bg-color);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 16px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    ${reducedMotionMixin}
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`

const cardImageStyle = css`
  width: 100%;
  height: 200px;
  object-fit: cover;
`

const cardContentStyle = css`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

interface CardProps {
  imageSrc: string
  imageAlt: string
  title: string
  description: string
  link?: { href: string; text: string }
}

export function Card({
  imageSrc,
  imageAlt,
  title,
  description,
  link,
}: CardProps) {
  return (
    <div css={cardStyle}>
      <img src={imageSrc} alt={imageAlt} css={cardImageStyle} />
      <div css={cardContentStyle}>
        <h3>{title}</h3>
        <p>{description}</p>
        {link && (
          <a href={link.href} target="_blank" rel="noopener noreferrer">
            {link.text}
          </a>
        )}
      </div>
    </div>
  )
}
