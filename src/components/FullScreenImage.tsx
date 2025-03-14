import { useState } from 'react'

export const FullscreenImage = ({ src, alt }: { src: string; alt: string }) => {
  const [isFullscreen, setIsFullscreen] = useState(false)

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  return (
    <div className="image-container">
      {isFullscreen ? (
        <div
          className="fullscreen-overlay"
          onClick={toggleFullscreen}
          onKeyDown={() => {
            toggleFullscreen()
          }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
          tabIndex={0}
          autoFocus={true}
        >
          <img
            src={src}
            aria-label={alt}
            alt={alt}
            style={{
              maxHeight: '90vh',
              maxWidth: '90vw',
              objectFit: 'contain',
            }}
          />
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          aria-label={alt}
          onClick={toggleFullscreen}
          style={{ cursor: 'pointer' }}
          loading="lazy"
        />
      )}
    </div>
  )
}
