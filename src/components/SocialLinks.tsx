import { css } from '@emotion/react'
import { Github } from '../assets/Github'
import { Linkedin } from '../assets/Linkedin'
import { ButtonLink } from './Button'

const SocialLinksContainer = css`
  display: flex;
  gap: 10px;
  padding: 10px;
`

const LINKEDIN_URL = 'https://linkedin.com/in/joephela'
const GITHUB_URL = 'https://github.com/joephela'

export function SocialLinks() {
  return (
    <div css={SocialLinksContainer}>
      <ButtonLink
        as="a"
        aria-label="View Joe Phelan's Github"
        target="_blank"
        href={GITHUB_URL}
      >
        <Github fill={'var(--fg-color)'} />
      </ButtonLink>
      <ButtonLink
        as="a"
        aria-label="View Joe Phelan's Linkedin"
        href={LINKEDIN_URL}
        target="_blank"
      >
        <Linkedin fill={'var(--fg-color)'} />
      </ButtonLink>
    </div>
  )
}
