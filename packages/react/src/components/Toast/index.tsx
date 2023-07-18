import { ComponentProps } from 'react'
import {
  ToastContainer,
  ToastMessage,
  ToastTitle,
  ToastTitleContainer,
} from './styles'
import { X } from 'phosphor-react'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string
  message: string
  toastPosition?: 'topRight' | 'bottomRight' | 'topLeft' | 'bottomLeft'
}

export function Toast({ title, message, toastPosition }: ToastProps) {
  return (
    <ToastContainer toastPosition={toastPosition}>
      <ToastTitleContainer>
        <ToastTitle>{title}</ToastTitle>
        <X size={20} />
      </ToastTitleContainer>
      <ToastMessage>{message}</ToastMessage>
    </ToastContainer>
  )
}

Toast.displayName = 'Toast'
