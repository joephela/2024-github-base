export function setTheme() {
  if (
    typeof window !== 'undefined' &&
    window.localStorage.getItem('theme') === 'dark'
  ) {
    document.body.style.setProperty('--fg-color', 'white')
    document.body.style.setProperty('--bg-color', 'black')
  }
}

export function swapTheme() {
  const currentBg = getComputedStyle(document.body).getPropertyValue(
    '--bg-color',
  )
  const currentFg = getComputedStyle(document.body).getPropertyValue(
    '--fg-color',
  )

  document.body.style.setProperty('--fg-color', currentBg)
  document.body.style.setProperty('--bg-color', currentFg)

  typeof window !== 'undefined' &&
    window.localStorage.setItem(
      'theme',
      currentBg === 'black' ? 'light' : 'dark',
    )
}
