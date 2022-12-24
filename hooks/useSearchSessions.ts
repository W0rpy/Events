import { IEvent } from "../models/types"
import { useMemo } from 'react'
import { Dayjs } from 'dayjs'
import { KeyOfEvent } from "../models/types"

export const useSortedEvents = (selectSession: string, sessions: IEvent[]) => {
   const sortedSessions = useMemo(() => {
      if (selectSession !== 'All Values' && selectSession !== 'price') {
         return [...sessions].sort((a, b) => a[selectSession as keyof KeyOfEvent].localeCompare(b[selectSession as keyof KeyOfEvent]))
      } else if (selectSession !== 'All Values' && selectSession === 'price') {
         return [...sessions].sort((a, b) => a.price - b.price)
      } else {
         return sessions;
      }
   }, [sessions, selectSession])
   return sortedSessions;
}

export const useSearchDate = (dateMin: Dayjs | null, dateMax: Dayjs | null, query: string, price: number[], category: string, location: string, sortedSessions: IEvent[]) => {
   const filterEvents = useMemo(() => {
      const searchLocation = (location: string, sortedSessions: IEvent[]) => {
         if (location !== 'ALL LOCATIONS') {
            return sortedSessions.filter((session) => session.location === location);
         } else {
            return sortedSessions;
         }
      }
      const selectLocation = searchLocation(location, sortedSessions);
      const searchCategory = (category: string, selectLocation: IEvent[]) => {
         if (category !== 'All CATEGORIES') {
            return selectLocation.filter((session) => session.category === category);
         } else {
            return selectLocation;
         }
      }
      const selectCategory = searchCategory(category, selectLocation);
      const searchPrice = (price: number[], selectCategory: IEvent[]) => {
         return selectCategory.filter((session) => price[0] <= session.price && session.price <= price[1])
      }
      const selectPrice = searchPrice(price, selectCategory);
      const searchQuery = (query: string, selectPrice: IEvent[]) => {
         return selectPrice.filter((session) => session.name.toLowerCase().includes(query.toLocaleLowerCase()));
      }
      const selectQuery = searchQuery(query, selectPrice);
      const searchDate = (dateMin: Dayjs | null, dateMax: Dayjs | null, selectQuery: IEvent[]) => {
         if (dateMin !== null && dateMax !== null) {
            return selectQuery.filter((session => session.date >= dateMin.format() && session.date <= dateMax.format()))
         } else if (dateMin === null && dateMax !== null) {
            return selectQuery.filter((session => session.date >= '2022-02-01T00:34:54.340Z' && (session.date) <= dateMax.format()))
         } else if (dateMin !== null && dateMax === null) {
            return selectQuery.filter((session => session.date >= dateMin.format() && session.date <= '2022-12-30T17:28:02.970Z'))
         } else {
            return selectQuery;
         }
      };
      const selectDate = searchDate(dateMin, dateMax, selectQuery)
      return selectDate;

   }, [query, price, category, dateMin, location, sortedSessions, dateMax]);
   return filterEvents;
}

