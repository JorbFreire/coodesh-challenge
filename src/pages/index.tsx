import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { useDebounce } from 'use-debounce'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import CircularProgress from '@mui/material/CircularProgress'

import PatientsTableProps from 'components/PatientsTableProps'
import { Ipatient } from 'types/Ipatient'
import {
  Container,
  Main,
  Filters,
  CustomFormControlLabel,
  Search,
  LoadingMore,
} from 'styles/Home'

type Tgender = 'any' | 'female' | 'male'

export default function Home() {
  const [patients, setPatients] = useState<Array<Ipatient>>([])
  const [selectedPatient, setSelectedPatient] = useState<Ipatient>({})
  const [page, setPage] = useState(1)

  const [search, setSearch] = useState('')
  const [searchDebounce] = useDebounce(search, 2000)
  const [nationality, setNationality] = useState('')
  const [nationalityDebounce] = useDebounce(nationality, 2000)
  const [gender, setGender] = useState<Tgender>('any')
  const [genderDebounce] = useDebounce(gender, 2000)

  const [openEditPatientModal, setOpenEditPatientModal] = useState(false)
  const [loading, setLoading] = useState(false)

  const memorizedGetPatientes = useCallback(async () => {
    setLoading(true)
    try {
      const response = await axios.get(
        process.env.NEXT_PUBLIC_URL +
          '/api/get-patients/' +
          page +
          '?nationality=' +
          nationalityDebounce +
          '&name=' +
          searchDebounce +
          '&gender=' +
          genderDebounce,
      )
      setPatients((oldValue) => [...oldValue, ...response.data])
    } catch (error) {
      console.error(error)
    }
    setLoading(false)
  }, [page, searchDebounce, nationalityDebounce, genderDebounce])

  useEffect(() => {
    memorizedGetPatientes()
  }, [memorizedGetPatientes])

  useEffect(() => {
    setPage(1)
    setPatients([])
  }, [searchDebounce, nationalityDebounce, genderDebounce])

  return (
    <Container>
      {/* <Header /> */}
      <Main>
        <Filters>
          <Search
            variant="standard"
            label="Search by name"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <Search
            variant="standard"
            label="Search by natiaonality"
            value={nationality}
            onChange={(event) => setNationality(event.target.value)}
          />

          <RadioGroup
            row
            value={gender}
            onChange={(event) => setGender(event.target.value)}
          >
            <CustomFormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <CustomFormControlLabel
              value="male"
              control={<Radio />}
              label="Male"
            />
            <CustomFormControlLabel
              value="any"
              control={<Radio />}
              label="Any"
            />
          </RadioGroup>
        </Filters>

        <PatientsTableProps
          patients={patients}
          selectedPatient={selectedPatient}
          setSelectedPatient={setSelectedPatient}
          setOpenModal={setOpenEditPatientModal}
        />
        <LoadingMore onClick={() => setPage((oldValue) => oldValue + 1)}>
          {loading && <CircularProgress />}
          {loading ? 'Loading more...' : 'Load more patients'}
        </LoadingMore>
      </Main>

      {/* <EditPatientModal
        open={openEditPatientModal}
        setOpen={setOpenEditPatientModal}
      /> */}
    </Container>
  )
}
