import { css } from '@emotion/react'
import { useState, useRef, useEffect, useCallback } from 'react'

const selectWrapperStyle = css`
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;
`

const selectButtonStyle = css`
  padding-inline: 16px;
  border: 1px solid var(--border-color);
  border-radius: 24px;
  height: 44px;
  background: var(--bg-color);
  color: var(--fg-color);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  min-width: 120px;
  position: relative;
  outline: none;
  gap: 8px;
  justify-content: space-evenly;

  :focus {
    border-color: var(--hover-color);
  }
`

const dropdownStyle = css`
  position: absolute;
  top: 104%;
  left: 0;
  z-index: 10;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background: var(--bg-color);
  color: var(--fg-color);
  max-height: 200px;
  overflow-y: auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  flex-direction: column;
`

const optionStyle = css`
  padding: 8px 12px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover,
  &:focus {
    background: var(--hover-color);
    color: var(--hover-color-fg);
  }
`

export function Select({
  label,
  options,
  hideLabel = false,
  value,
  onChange,
  css: customCss,
  className,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [focusedOptionIndex, setFocusedOptionIndex] = useState(-1)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)

  const selectedOption =
    options.find((option) => option.value === value) || options[0]

  const toggleDropdown = useCallback(() => {
    setIsOpen((prev) => !prev)
    setFocusedOptionIndex(-1)
  }, [])

  const handleOptionClick = useCallback(
    (option: SelectOptionProps) => {
      onChange?.({
        target: { value: option.value },
      } as React.ChangeEvent<HTMLSelectElement>)
      setIsOpen(false)
    },
    [onChange],
  )

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        toggleDropdown()
      } else if (e.key === 'Escape') {
        e.preventDefault()
        setIsOpen(false)
      } else if (e.key === 'ArrowDown') {
        e.preventDefault()
        setFocusedOptionIndex((prev) => Math.min(prev + 1, options.length - 1))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setFocusedOptionIndex((prev) => Math.max(prev - 1, 0))
      }
    },
    [toggleDropdown, options.length],
  )

  // New handler specifically for keyboard navigation in the dropdown
  const handleDropdownKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        setIsOpen(false)
        buttonRef.current?.focus()
      } else if (e.key === 'ArrowDown') {
        e.preventDefault()
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
      }
    },
    [],
  )

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false)
      setFocusedOptionIndex(-1)
    }
  }, [])

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [handleClickOutside])

  useEffect(() => {
    if (isOpen && focusedOptionIndex >= 0 && buttonRef.current) {
      const optionElements =
        dropdownRef.current?.querySelectorAll('[role="option"]')
      if (optionElements && optionElements.length > 0) {
        ;(optionElements[focusedOptionIndex] as HTMLElement).focus()
      }
    }
  }, [isOpen, focusedOptionIndex, options.length])

  return (
    <span css={selectWrapperStyle}>
      {hideLabel ? null : <label htmlFor={label}>{label}</label>}
      <div
        ref={buttonRef}
        css={[selectButtonStyle, customCss]}
        tabIndex={0}
        onClick={toggleDropdown}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-controls="dropdown"
        role="combobox"
        aria-owns="dropdown"
        className={className}
      >
        {selectedOption.label}
        <span aria-hidden="true">{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && (
        <div
          id="dropdown"
          ref={dropdownRef}
          css={dropdownStyle}
          onKeyDown={handleDropdownKeyDown}
        >
          {options.map((option, index) => (
            <div
              key={option.value}
              css={optionStyle}
              onClick={() => handleOptionClick(option)}
              role="option"
              aria-selected={option.value === value}
              tabIndex={-1}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  handleOptionClick(option)
                } else if (e.key === 'ArrowDown') {
                  e.preventDefault()
                  setFocusedOptionIndex((prev) =>
                    Math.min(prev + 1, options.length - 1),
                  )
                } else if (e.key === 'ArrowUp') {
                  e.preventDefault()
                  setFocusedOptionIndex((prev) => Math.max(prev - 1, 0))
                } else if (e.key === 'Escape') {
                  e.preventDefault()
                  setIsOpen(false)
                  buttonRef.current?.focus()
                }
              }}
              onFocus={() => setFocusedOptionIndex(index)}
              onBlur={() => setFocusedOptionIndex(-1)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </span>
  )
}

export interface SelectOptionProps {
  value: string
  label: string
}

export interface SelectProps {
  label: string
  options: SelectOptionProps[]
  hideLabel?: boolean
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void
  value?: string
  css?: any
  className?: string
}
