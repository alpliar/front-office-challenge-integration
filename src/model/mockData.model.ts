import IEvent from './event.model'
import ICountryMedals from './medal.model'

interface IMockData {
  nextEvent: Array<IEvent>
  medals: Array<ICountryMedals>
}

export default IMockData
