export function Loading() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <circle
        cx="50"
        cy="50"
        r="35"
        stroke="var(--bg-accent)"
        stroke-width="8"
        fill="none"
      />

      <circle
        cx="50"
        cy="50"
        r="35"
        stroke="currentColor"
        stroke-width="8"
        fill="none"
        stroke-dasharray="220"
        stroke-dashoffset="0"
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="0 50 50"
          to="360 50 50"
          dur="1.5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-dashoffset"
          values="0;220"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </circle>

      <g transform="translate(35,35) scale(0.8)">
        <circle
          cx="15"
          cy="15"
          r="10"
          stroke="var(--bg-accent)"
          stroke-width="3"
          fill="none"
        >
          <animate
            attributeName="opacity"
            values="1;0.3;1"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </circle>

        <line
          x1="22"
          y1="22"
          x2="30"
          y2="30"
          stroke="var(--bg-accent)"
          stroke-width="3"
          stroke-linecap="round"
        >
          <animate
            attributeName="opacity"
            values="1;0.3;1"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </line>
      </g>
    </svg>
  )
}
