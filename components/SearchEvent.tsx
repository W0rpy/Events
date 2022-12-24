import styles from './SearchEvents.module.scss';
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import { locations, categories } from "../utils/pages";
import Slider from '@mui/material/Slider';
import { IEvent } from '../models/types';
import { sortCategories } from '../utils/pages';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Dayjs } from 'dayjs';

function valuetext(value: number) {
   return `${value}`;
}

interface SearchEventProps {
   searchDate: IEvent[]
   query: string
   location: string
   category: string
   selectSession: string
   setSelectSession: (arg0: string) => void
   dateMin: Dayjs | null
   dateMax: Dayjs | null
   setQuery: (arg0: string) => void
   setLocation: (arg0: string) => void
   setCategory: (arg0: string) => void
   setDateMin: (arg0: Dayjs | null) => void
   setDateMax: (arg0: Dayjs | null) => void
   setPrice: (arg0: number[]) => void
   price: number[]
}


function SearchEvent({ selectSession, setSelectSession, searchDate, query, location, category, dateMin, dateMax, price, setPrice, setQuery, setLocation, setCategory, setDateMin, setDateMax }: SearchEventProps) {

   const handleChange = (event: Event, newValue: number | number[]) => {
      setPrice(newValue as number[]);
   };
   return (
      <div className={styles.SearchShell}>
         <div className={styles.SearchContent}>
            <div className={styles.SearchQuery}>
               <TextField value={query} size='small' onChange={e => setQuery(e.target.value)} type='text' variant="outlined" fullWidth label='Search' />
            </div>
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
            <div className={styles.SortedCategories}>
               <TextField select fullWidth size='small' label='Sorting by' value={selectSession} onChange={e => setSelectSession(e.target.value)}  >
                  {sortCategories.map((sortCategory) => <MenuItem value={sortCategory.value} key={sortCategory.name}>{sortCategory.name}</MenuItem>)}
               </TextField>
            </div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
               <div className={styles.SearchDate}>
                  <DateTimePicker
                     label="Start Date"
                     value={dateMin}
                     onChange={(newValue) => { setDateMin(newValue) }}
                     renderInput={(params) => <TextField fullWidth size='small' {...params} />}
                     inputFormat="YYYY/MM/DD hh:mm a"
                  />
               </div>
               <div className={styles.SearchDate}>
                  <DateTimePicker
                     label="End Date"
                     value={dateMax}
                     onChange={(newValue) => { setDateMax(newValue) }}
                     renderInput={(params) => <TextField fullWidth size='small' {...params} />}
                     inputFormat="YYYY/MM/DD hh:mm a"
                  />
               </div>
            </LocalizationProvider>
         </div>
         <div className={styles.SearchResult}>Results: {searchDate.length} event(s)</div>
      </div >
   )
}
export default SearchEvent;