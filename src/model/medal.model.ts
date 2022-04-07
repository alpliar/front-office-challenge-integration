interface IMedalsCount {
  gold: number
  silver: number
  bronze: number
}

interface IMedalsSummary {
  key: string
  country: string
  medals: IMedalsCount
}

export default IMedalsSummary
