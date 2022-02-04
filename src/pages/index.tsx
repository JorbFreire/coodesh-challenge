import { useState, useEffect } from 'react'
import PatientsTableProps from 'components/PatientsTableProps'
import { Ipatient } from 'types/patient'
import { Container, Main, LoadingMore } from 'styles/Home'

export default function Home() {
  const [patients, setPatients] = useState<Array<Ipatient>>([])
  const [selectedPatient, setSelectedPatient] = useState<Ipatient>()
  const [page, setPage] = useState(0)

  const [openEditPatientModal, setOpenEditPatientModal] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    console.log('get patients')
    setPatients([])
  }, [page])

  return (
    <Container>
      {/* <Header /> */}
      <Main>
        {patients[0] && (
          <PatientsTableProps
            patients={patients}
            selectedPatient={selectedPatient}
            setSelectedPatient={setSelectedPatient}
            setOpenModal={setOpenEditPatientModal}
          />
        )}
        {loading && <LoadingMore />}
      </Main>

      {/* <EditPatientModal
        open={openEditPatientModal}
        setOpen={setOpenEditPatientModal}
      /> */}
    </Container>
  )
}
