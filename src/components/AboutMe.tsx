import { css } from '@emotion/react'
import Family from '../assets/family.jpeg'
import Farm from '../assets/farm.jpeg'
import Milwaukee from '../assets/milwaukee.jpeg'

const avatarStyle = css`
  width: 200px;
  display: block;
  height: auto;
  border-radius: 10px;
`

const aboutMeWrapperStyle = css`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`

const h2Style = css`
  display: block;
  width: 100%;
  margin-block: 8px;
`

export function AboutMe() {
  return (
    <div css={aboutMeWrapperStyle}>
      <h2 css={h2Style}>Past</h2>
      <p>
        From my humble beginnings working on my fathers farm I learned the value
        of hard work. I developed an interest in all things technology after
        spending time with our family DOS computer. This lead to me attending
        the University of Wisconsin Milwaukee in pursuit of a bachelors degree
        in computer science. Once acquired I moved to Madison WI and began my
        professional career which I break down on the home page.
      </p>
      <img loading="lazy" src={Farm} css={avatarStyle} alt="Picture of cows" />
      <img
        loading="lazy"
        src={Milwaukee}
        css={avatarStyle}
        alt="Picture of Milwaukee"
      />

      <h2 css={h2Style}>Present</h2>
      <p>
        Today I work as a staff software engineer at{' '}
        <a href="https://www.acquia.com/products/acquia-dam">Aquia</a>{' '}
        specializing in front end. I have a wonderful wife and 2 boys that I
        enjoy spending as much time with as possible. When I'm not working I
        enjoy biking, listening to podcasts and audio books, playing video
        games, and reading books.
      </p>
      <img
        loading="lazy"
        src={Family}
        css={avatarStyle}
        alt="Picture of my family"
      />

      <h2 css={h2Style}>Future</h2>
      <p>
        Going forward I want to continue making a difference on teams. Improving
        aging codebases, building out new features, and making other developers'
        lives easier. Above all I want to raise good kids that go on to make a
        difference in this world.
      </p>
    </div>
  )
}
