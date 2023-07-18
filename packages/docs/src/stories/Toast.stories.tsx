import type { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps } from '@caique-design-ui/react'

export default {
  title: 'Notification/Toast',
  component: Toast,
  args: {
    title: 'Agendamento realizado',
    message: 'Quarta feira, 23 de Outubro ás 16h',
    toastPosition: 'bottomRight',
  },
  argTypes: {
    toastPosition: {
      options: ['topRight', 'topLeft', 'bottomLeft', 'bottomRight'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
