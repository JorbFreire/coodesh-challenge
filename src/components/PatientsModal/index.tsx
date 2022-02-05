import Text from 'components/Text'
import { Ipatient } from 'types/Ipatient'
import {
  Container,
  Photo,
  TopContent,
  Line,
  ContentColumn,
  PatientName,
} from './styles'

export interface PatientsModalProps {
  open: boolean
  setOpen(arg0: boolean): void
  selectedPatient: Ipatient
}

export default function PatientsModal({
  open,
  setOpen,
  selectedPatient,
}: PatientsModalProps) {
  return (
    selectedPatient && (
      <Container maxWidth="md" open={open} onClose={() => setOpen(false)}>
        <TopContent>
          <Photo
            src={selectedPatient.image && selectedPatient.image.large}
            alt=""
          />
        </TopContent>
        <TopContent>
          <PatientName>{selectedPatient.Name}</PatientName>
        </TopContent>

        <Line>
          <ContentColumn>
            <Text $title>ID</Text>
            <Text>{selectedPatient.id}</Text>
            <Text $title>Gender</Text>
            <Text>{selectedPatient.Gender}</Text>
            <Text $title>Birth Date</Text>
            <Text>{selectedPatient.birth}</Text>
            <Text $title>Nationality</Text>
            <Text>{selectedPatient.nationality}</Text>
          </ContentColumn>

          <ContentColumn>
            <Text $title>Address</Text>
            <Text>{selectedPatient.address}</Text>
            <Text $title>Email</Text>
            <Text>{selectedPatient.email}</Text>
            <Text $title>Phone</Text>
            <Text>{selectedPatient.phone}</Text>
          </ContentColumn>
        </Line>
      </Container>
    )
  )
}
