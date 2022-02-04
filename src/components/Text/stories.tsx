import { Story, Meta } from '@storybook/react'

import Text from '.'

export default {
  component: Text,
  title: 'Text',
  args: {
    $title: true,
    children: 'Text',
  },
} as Meta

export const Default: Story = (args) => <Text {...args} />
