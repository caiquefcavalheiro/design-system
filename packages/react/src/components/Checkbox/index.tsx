import { ChceckboxIndicator, CheckboxContainer } from './styles'
import { Check } from 'phosphor-react'
import { ComponentProps } from 'react'

export type CheckboxProps = ComponentProps<typeof CheckboxContainer>

export function CheckBox(props: CheckboxProps) {
  return (
    <CheckboxContainer {...props}>
      <ChceckboxIndicator asChild>
        <Check weight="bold" />
      </ChceckboxIndicator>
    </CheckboxContainer>
  )
}

CheckBox.displayName = 'CheckBox'
