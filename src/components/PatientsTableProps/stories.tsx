import { Story, Meta } from '@storybook/react'

import PatientsTable, { PatientsTableProps } from '.'

export default {
  component: PatientsTable,
  title: 'PatientsTable',
  args: {
    patients: [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    selectedPatient: { id: 0 },
    setSelectedPatient: (patient: { id: number }) =>
      console.info('set selectedPatient with ID: ' + patient.id),
    setOpenModal: () => console.info('Show Modal'),
  },
} as Meta

export const Default: Story<PatientsTableProps> = (args) => (
  <PatientsTable {...args} />
)
