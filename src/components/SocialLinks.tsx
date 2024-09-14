import { css } from '@emotion/react'
import { Github } from '../assets/Github'
import { Linkedin } from '../assets/Linkedin'

const SocialLinksContainer = css`
  display: flex;
  gap: 10px;
  padding: 10px;
`

const LINKEDIN_URL = 'https://linkedin.com/in/joseph-phelan-3a871625'
const GITHUB_URL = 'https://github.com/joephela'

export function SocialLinks() {
  return (
    <div css={SocialLinksContainer}>
      <a href={GITHUB_URL} target="_blank">
        <Github fill={'var(--fg-color)'} />
      </a>
      <a href={LINKEDIN_URL} target="_blank">
        <Linkedin fill={'var(--fg-color)'} />
      </a>
    </div>
  )
}
