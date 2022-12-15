import { IEvent } from "../models/types";
import { useMemo } from 'react'

export const useSearchLocation = (location: string, sessions: IEvent[]) => {
   const selectLocation = useMemo(() => {
      if (location !== 'ALL LOCATIONS') {
         return sessions.filter((session) => session.location === location);
      } else {
         return sessions;
      }
   }, [location, sessions]);

   return selectLocation;
}
export const useSearchCategory = (category: string, location: string, sessions: IEvent[]) => {
   const selectLocation = useSearchLocation(location, sessions);

   const selectCategory = useMemo(() => {
      if (category !== 'All CATEGORIES') {
         return selectLocation.filter((session) => session.category === category);
      } else {
         return selectLocation;
      }
   }, [category, selectLocation]);

   return selectCategory;
}
export const useSearchPrice = (price: number[], category: string, location: string, sessions: IEvent[]) => {
   const selectCategory = useSearchCategory(category, location, sessions);
   const selectPrice = useMemo(() => {
      return selectCategory.filter((session) => price[0] <= session.price && session.price <= price[1])
   }, [price, selectCategory]);

   return selectPrice;
}
export const useSearchQuery = (query: string, price: number[], category: string, location: string, sessions: IEvent[]) => {

   const selectPrice = useSearchPrice(price, category, location, sessions);
   const searchQuery = useMemo(() => {
      return selectPrice.filter((session) => session.name.toLowerCase().includes(query.toLocaleLowerCase()));

   }, [query, selectPrice]);

   return searchQuery;
}
export const useSearchDate = (date: string, query: string, price: number[], category: string, location: string, sessions: IEvent[]) => {
   const searchQuery = useSearchQuery(query, price, category, location, sessions)
   const searchDate = useMemo(() => {
      return searchQuery.filter((session) => session.date.toLowerCase().includes(date.toLocaleLowerCase()))
   }, [date, searchQuery])

   return searchDate;
}