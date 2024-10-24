import { Fragment, useEffect, useRef, useState } from 'react'
import { Button } from './Button'
import { MenuIcon } from '../assets/MenuIcon'
import { Nav } from './Nav'
import { css } from '@emotion/react'
import { useLocation } from 'react-router-dom'
import { CloseIcon } from '../assets/CloseIcon'

const hiddenStyle = css`
  display: none;
`

const menuStyle = css`
  width: 100%;
  height: 100%;
  position: inherit;
  top: 0;
  position: fixed;
  left: 0;
  top: 0;
  overflow: hidden;
  z-index: 10;
  background: var(--bg-color);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: xxx-large;
`

const closeButtonStyle = css`
  position: fixed;
  top: 16px;
  right: 16px;
  font-size: xx-large;
`

export function Menu() {
  const [isOpen, setIsOpen] = useState(false)
  const { pathname } = useLocation()
  const ref = useRef<HTMLButtonElement>(null)

  //whenever we navigate, close the menu
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <Fragment>
      <Button
        aria-expanded={isOpen}
        aria-controls="menu"
        onClick={() => {
          setIsOpen(!isOpen)
          // focus close button after delay
          setTimeout(() => {
            ref.current?.focus()
          }, 50)
        }}
        aria-label="Open nav menu"
      >
        <MenuIcon fill={'var(--fg-color)'} />
      </Button>
      <div
        id="menu"
        role="dialog"
        css={[menuStyle, !isOpen && hiddenStyle]}
        onKeyDown={(e) => {
          if (e.key === 'Escape') {
            setIsOpen(false)
          }
        }}
      >
        <Button
          ref={ref}
          onClick={() => {
            setIsOpen(false)
          }}
          aria-label="close nav menu"
          css={closeButtonStyle}
        >
          <CloseIcon />
        </Button>
        <Nav />
      </div>
    </Fragment>
  )
}
