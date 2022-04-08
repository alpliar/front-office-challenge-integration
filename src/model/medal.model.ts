interface IMedalsCount {
  gold: number
  silver: number
  bronze: number
}

interface ICountryMedals {
  key: string
  country: string
  medals: IMedalsCount
}

export interface ICountryMedalsFlat {
  key: string
  country: string
  gold: number
  silver: number
  bronze: number
  total: number
}

export default ICountryMedals
