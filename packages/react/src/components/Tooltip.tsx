import { ComponentProps, ElementType, ReactNode } from 'react'
import { styled } from '../styles'

export const TooltipContainer = styled('div', {
  position: 'relative',
  display: 'inline-block',

  '&:hover > div': {
    display: 'block',
  },
})

export const TooltipMessage = styled('div', {
  display: 'none',
  position: 'absolute',
  minWidth: '200px',
  backgroundColor: '$gray900',
  padding: '$3 $4',
  borderRadius: '$md',
  color: '$gray100',
  top: '-55%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 99999,

  svg: {
    position: 'absolute',
    bottom: 0,
    top: '108%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
})

export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {
  as?: ElementType
  children: ReactNode
  message: string
}

export function Tooltip({ children, message }: TooltipProps) {
  return (
    <TooltipContainer>
      <TooltipMessage>
        {message}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="8"
          viewBox="0 0 17 8"
          fill="none"
        >
          <path d="M8.5 8L16.5 0L0.5 0L8.5 8Z" fill="#121214" />
        </svg>
      </TooltipMessage>
      {children}
    </TooltipContainer>
  )
}

Tooltip.displayName = 'Tooltip'
