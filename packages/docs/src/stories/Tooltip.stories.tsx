import type { StoryObj, Meta } from '@storybook/react'
import { Tooltip, ToastProps } from '@caique-design-ui/react'

export default {
  title: 'Notification/Tooltip',
  component: Tooltip,
  args: {
    children: (
      <p style={{ backgroundColor: 'white', width: '100px' }}>Texto aqui</p>
    ),
    message: 'tooltip message',
  },
  decorators: [
    (Story) => {
      return (
        <div
          style={{
            height: '100vh',
            width: '100vw',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {Story()}
        </div>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
