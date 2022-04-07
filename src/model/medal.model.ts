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

export default ICountryMedals
