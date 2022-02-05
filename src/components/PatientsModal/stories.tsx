import { Story, Meta } from '@storybook/react'

import PatientsModal, { PatientsModalProps } from '.'

export default {
  component: PatientsModal,
  title: 'PatientsModal',
  args: {
    open: true,
    onDelete: () => alert('delete something'),
    selectedPatient: () => alert(''),
  },
} as Meta

export const Default: Story<PatientsModalProps> = (args) => (
  <PatientsModal {...args} />
)
