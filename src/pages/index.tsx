import { useState, useEffect } from 'react'
import axios from 'axios'

import PatientsTableProps from 'components/PatientsTableProps'
import { Ipatient } from 'types/Ipatient'
import { Container, Main, LoadingMore } from 'styles/Home'

export default function Home() {
  const [patients, setPatients] = useState<Array<Ipatient>>([])
  const [selectedPatient, setSelectedPatient] = useState<Ipatient>({})
  const [page, setPage] = useState(1)

  const [openEditPatientModal, setOpenEditPatientModal] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getPatients = async () => {
      setLoading(true)
      console.log('get patients')
      console.log(process.env.NEXT_PUBLIC_URL)
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_URL}/api/get-patients/${page}`,
        )
        setPatients(response.data)
      } catch (error) {
        console.error(error)
      }
      setLoading(false)
    }
    getPatients()
  }, [page])

  useEffect(() => console.log(patients), [patients])

  return (
    <Container>
      {/* <Header /> */}
      <Main>
        <PatientsTableProps
          patients={patients}
          selectedPatient={selectedPatient}
          setSelectedPatient={setSelectedPatient}
          setOpenModal={setOpenEditPatientModal}
        />
        {loading && <LoadingMore />}
      </Main>

      {/* <EditPatientModal
        open={openEditPatientModal}
        setOpen={setOpenEditPatientModal}
      /> */}
    </Container>
  )
}
