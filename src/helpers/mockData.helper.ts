import mockData from '../data.json'
import IEvent from '../model/event.model'
import IMockData from '../model/mockData.model'

export default class MockDataHelper {
  static getEvents() {
    const { nextEvent } = mockData as IMockData
    return nextEvent
  }

  static getEventsByTitle(titles: string[]) {
    const filteredEvents = this.getEvents().filter((event) => titles.includes(event.sportTitle))
    return filteredEvents
  }

  static getEventsTitle() {
    const disciplines = this.getEvents().map((event: IEvent) => event.sportTitle)
    // const uniqueDisciplines = [...new Set(disciplines)]
    // const uniqueDisciplines: Array<string> = disciplines.filter(
    //   (discipline, index) => disciplines.indexOf(discipline) === index
    // )
    // return uniqueDisciplines
    return disciplines
  }

  static getMedalsPerCountry() {
    const { medals: countries } = mockData as IMockData
    return countries.map((medalsSummary) => {
      const { key, country, medals } = medalsSummary
      return {
        key,
        country,
        ...medals,
        total: medals.silver + medals.gold + medals.bronze,
      }
    })
  }
}
