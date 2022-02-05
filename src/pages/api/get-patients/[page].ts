import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { Ipatient } from 'types/Ipatient'
import { Irandomuser } from 'types/Irandomuser'

export default async function getPatients(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const { page, nationality, name, gender } = request.query
  const pageSize = 50
  const seed = 'coodesh'

  let apiUrl = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=${pageSize}&exc=login,registered,cell`

  // Filter not working as specified on api docs, probably an api problem
  if (nationality) apiUrl = apiUrl + `&nat=${nationality}`
  if (name) apiUrl = apiUrl + `&nat=${name}`
  if (gender !== 'any') apiUrl = apiUrl + `&gender=${gender}`

  const { data } = await axios.get(apiUrl)
  const patients: Array<Ipatient> = []

  data.results.map((patient: Irandomuser) => {
    patients.push({
      Name: `${patient.name.title} ${patient.name.first} ${patient.name.last}`,
      Gender: patient.gender,
      birth: patient.dob.date,
      image: patient.picture,
      email: patient.email,
      phone: patient.phone,
      nationality: patient.nat,
      address: `${patient.location.street.name} ${patient.location.street.number} - ${patient.location.city}/${patient.location.state} ${patient.location.postcode} - ${patient.location.country}`,
      id: patient.id.value,
    })
  })

  response.status(200).json(patients)
}
