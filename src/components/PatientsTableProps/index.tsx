import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import { Ipatient } from 'types/Ipatient'
import Text from '../Text'
import DeleteButton from '../DeleteButton'

import { Container, CustomTableRow, ShortTableCell } from './styles'

export interface PatientsTableProps {
  patients: Array<Ipatient>
  selectedPatient: Ipatient
  setSelectedPatient(arg0: Ipatient): void
  setOpenModal(arg0: boolean): void
}

export default function PatientsTable({
  patients,
  selectedPatient,
  setSelectedPatient,
  setOpenModal,
}: PatientsTableProps) {
  const showEditPatientModal = (patient: Ipatient) => {
    setSelectedPatient(patient)
    setOpenModal(true)
  }

  const onDelete = (patient: Ipatient) => {
    alert('delete user' + patient.id)
  }

  return (
    <Container size="small">
      <TableHead>
        <TableRow>
          {patients[0] &&
            Object.keys(patients[0]).map(
              (key, index) =>
                index < 3 && (
                  <TableCell key={index}>
                    <Text $title>{key}</Text>
                  </TableCell>
                ),
            )}
          <ShortTableCell />
        </TableRow>
      </TableHead>

      <TableBody>
        {patients.map((patient) => (
          <CustomTableRow
            selected={selectedPatient.id === patient.id}
            key={patient.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            {Object.keys(patient).map(
              (key, index) =>
                index < 3 && (
                  <TableCell
                    key={key + patient.id}
                    onClick={() => showEditPatientModal(patient)}
                    scope="patient"
                  >
                    <Text>{patient[key]}</Text>
                  </TableCell>
                ),
            )}

            <ShortTableCell align="right">
              <DeleteButton onDelete={() => onDelete(patient)} />
            </ShortTableCell>
          </CustomTableRow>
        ))}
      </TableBody>
    </Container>
  )
}
