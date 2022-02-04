import { Ipicture } from 'types/Ipicture'
interface Iname {
  title: string
  first: string
  last: string
}

interface Ilocation {
  street: {
    number: number
    name: string
  }
  city: string
  state: string
  country: string
  postcode: number
}

interface Idob {
  date: string
  age: string
}

export interface Irandomuser {
  gender: string
  name: Iname
  location: Ilocation
  email: string
  dob: Idob
  phone: string
  id: {
    name: string
    value: string
  }
  picture: Ipicture
  nat: string
}
