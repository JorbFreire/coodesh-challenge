import { Story, Meta } from '@storybook/react'

import DeleteButton, { DeleteButtonProps } from '.'

export default {
  component: DeleteButton,
  title: 'DeleteButton',
  args: {
    onDelete: () => alert('delete something'),
  },
} as Meta

export const Default: Story<DeleteButtonProps> = (args) => (
  <DeleteButton {...args} />
)
