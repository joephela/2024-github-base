import { css } from '@emotion/react'
import { FullscreenImage } from './FullScreenImage'

const acquiaProjectsWrapperStyle = css`
  display: flex;
  padding: 16px;
  margin-block: 40px;
  gap: 40px;
  flex-wrap: wrap;
`

const flexStyle = css`
  display: flex;
  gap: 32px;

  @media (max-width: 1000px) {
    flex-wrap: wrap;
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
  border: 1px solid grey;
  border-radius: 5px;

  @media (max-width: 1000px) {
    width: 100%;
    border: none;
  }
`

export function AcquiaProjects() {
  return (
    <div css={acquiaProjectsWrapperStyle}>
      <div css={flexStyle}>
        <div css={paragraphStyle}>
          <h4>Portals</h4>
          <p>
            Portals is a product that provides a way to create and manage
            multiple websites from a single interface. It is a multi-tenant,
            SaaS product that allows users to create and manage websites to show
            off their dam assets in various ways. I worked on the team that was
            responsible for the front end of the product and developing
            enhancements and new features.
          </p>
        </div>
        <div css={imageWrapperStyle}>
          <FullscreenImage src="/portals.jpg" alt="Portals application" />
        </div>
      </div>

      <div css={flexStyle}>
        <div css={paragraphStyle}>
          <h4>Crop & Download</h4>
          <p>
            A product that allows users to crop and download assets from a DAM
            site. This was setup as a micro frontend that is shared across the
            product suite.
          </p>
        </div>
        <div css={imageWrapperStyle}>
          <FullscreenImage
            src="/crop_download.jpg"
            alt="Crop & download application"
          />
        </div>
      </div>

      <div css={flexStyle}>
        <div css={paragraphStyle}>
          <h4>Search</h4>
          <p>
            Search is a product that provides a way to search for assets across
            a DAM site. I worked on the team that was responsible for the front
            end of the product developing enhancements and new features.
          </p>
        </div>
        <div css={imageWrapperStyle}>
          <FullscreenImage src="/search.jpg" alt="Search application" />
        </div>
      </div>
    </div>
  )
}
