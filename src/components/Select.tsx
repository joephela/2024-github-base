import { css } from '@emotion/react'
import { SelectHTMLAttributes } from 'react'

const selectWrapperStyle = css`
  display: flex;
  gap: 4px;
  flex-direction: column;

  option {
    background: var(--bg-color);
    color: var(--fg-color);
  }
`

export function Select({
  label,
  options,
  hideLabel = false,
  ...props
}: SelectProps) {
  return (
    <span css={selectWrapperStyle}>
      {hideLabel ? null : <label htmlFor={label}>{label}</label>}
      <select {...props} id={label} aria-label={label} title={label}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </span>
  )
}

export interface SelectOptionProps {
  value: string
  label: string
}

export interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'options' | 'id'> {
  label: string
  options: SelectOptionProps[]
  hideLabel?: boolean
}
