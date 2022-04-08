import mockData from '../data.json'
import IEvent from '../model/event.model'
import { ICountryMedalsFlat } from '../model/medal.model'
import IMockData from '../model/mockData.model'

export default class MockDataHelper {
  static getEvents = (): IEvent[] => {
    const { nextEvent } = mockData as IMockData
    return nextEvent
  }

  static getEventsByTitle = (titles: string[]): IEvent[] => {
    const filteredEvents = this.getEvents().filter((event) => titles.includes(event.sportTitle))
    return filteredEvents
  }

  static getEventsTitle = (): string[] => {
    const disciplines = this.getEvents().map((event: IEvent) => event.sportTitle)
    // const uniqueDisciplines = [...new Set(disciplines)]
    // const uniqueDisciplines: Array<string> = disciplines.filter(
    //   (discipline, index) => disciplines.indexOf(discipline) === index
    // )
    // return uniqueDisciplines
    return disciplines
  }

  static getMedalsPerCountry = (): ICountryMedalsFlat[] => {
    const { medals: countries } = mockData as IMockData
    return countries.map((medalsSummary) => {
      const {
        key,
        country,
        medals: { gold, silver, bronze },
      } = medalsSummary

      return {
        key,
        country,
        gold,
        silver,
        bronze,
        total: silver + gold + bronze,
      }
    })
  }
}
