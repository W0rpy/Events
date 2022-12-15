import styles from '../styles/SearchEvents.module.scss';
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import { locations, categories } from "../utils/pages";
import Slider from '@mui/material/Slider';
import { IEvent } from '../models/types';

function valuetext(value: number) {
   return `${value}`;
}

interface SearchEventProps {
   searchDate: IEvent[]
   query: string
   location: string
   category: string
   date: string
   setQuery: (arg0: string) => void
   setLocation: (arg0: string) => void
   setCategory: (arg0: string) => void
   setDate: (arg0: string) => void
   setPrice: (arg0: number[]) => void
   price: number[]
}


function SearchEvent({ searchDate, query, location, category, date, price, setPrice, setQuery, setLocation, setCategory, setDate }: SearchEventProps) {

   const handleChange = (event: Event, newValue: number | number[]) => {
      setPrice(newValue as number[]);
   };
   return (
      <div className={styles.SearchShell}>
         <div className={styles.SearchContent}>
            <div className={styles.SearchQuery}>
               <TextField value={query} size='small' onChange={e => setQuery(e.target.value)} type='text' variant="outlined" fullWidth label='Search' />
            </div>
            <div className={styles.SearchForm}>
               <div className={styles.SearchSelect}>
                  <TextField select label="Location" fullWidth size='small' value={location} onChange={e => setLocation(e.target.value)}>
                     {locations.map((location) => <MenuItem value={location.value} key={location.value}>{location.name}</MenuItem>)}
                  </TextField>
               </div>
               <div className={styles.SearchSelect}>
                  <TextField select label="Category" fullWidth size='small' value={category} onChange={e => setCategory(e.target.value)} >
                     {categories.map((category) => <MenuItem value={category.value} key={category.value}>{category.name}</MenuItem>)}
                  </TextField>
               </div>
               <div className={styles.SearchDate}>
                  <TextField size='small' placeholder='2022-06-10' type='text' value={date} onChange={e => setDate(e.target.value)} fullWidth variant="outlined" label='Search Date' />
               </div>
               <div className={styles.SearchSlider}>
                  <div className={styles.StartingPrice}>{price[0]}€</div>
                  <Slider
                     value={price}
                     onChange={handleChange}
                     valueLabelDisplay="off"
                     getAriaValueText={valuetext}
                     step={1}
                     max={150}
                     min={1}
                  />
                  <div className={styles.FinalPrice}>{price[1]}€</div>
               </div>
            </div>

         </div>
         <div className={styles.SearchResult}>Results: {searchDate.length} event(s)</div>
      </div >
   )
}
export default SearchEvent;