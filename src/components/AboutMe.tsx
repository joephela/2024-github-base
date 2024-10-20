import { css } from '@emotion/react'
import Family from '../assets/family.jpg'

const avatarStyle = css`
  width: 100%;
  display: block;
  height: auto;
  border-radius: 10px;
  max-width: 400px;
`

const aboutMeWrapperStyle = css`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: auto 1fr;

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`

const imageWrapperStyle = css`
  margin-inline: auto;
  margin-block-start: 27px;
`

const textWrapperStyle = css`
  max-width: 42em;

  p:first-child {
    margin-top: 0;
  }
`

export function AboutMe() {
  return (
    <div css={aboutMeWrapperStyle}>
      <div css={textWrapperStyle}>
        <h1>About</h1>
        <p>
          From my humble beginnings working on my fathers farm I learned the
          value of hard work. I developed an interest in all things technology
          after spending time with our family DOS computer. This lead to me
          attending the University of Wisconsin Milwaukee in pursuit of a
          bachelors degree in computer science. Once acquired I moved to Madison
          WI and began my professional career which I break down on the home
          page.
        </p>
        <p>
          Today I work as a staff software engineer at{' '}
          <a href="https://www.acquia.com/products/acquia-dam">Acquia</a>{' '}
          specializing in front end. I have a wonderful wife and 2 boys that I
          enjoy spending as much time with as possible. When I'm not working I
          enjoy biking, listening to podcasts and audio books, playing video
          games, and reading books.
        </p>
        <p>
          Going forward I want to continue making a difference on teams.
          Improving aging codebases, building out new features, and making other
          developers' lives easier. Above all I want to raise good kids that go
          on to make a difference in this world.
        </p>
      </div>
      <div css={imageWrapperStyle}>
        <img
          loading="lazy"
          src={Family}
          css={avatarStyle}
          alt="Picture of my family"
        />
      </div>
    </div>
  )
}
