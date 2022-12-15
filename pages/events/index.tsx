import Head from "next/head";
import { useState, useEffect } from "react";
import MainContainer from "../../components/MainContainer";
import styles from '../../styles/Sessions.module.scss';
import { IEvent } from '../../models/types';
import SessionsList from "../../components/SessionsList";
import { GetServerSideProps } from "next";
import PageTitle from "../../components/PageTitle";
import SearchEvent from "../../components/SearchEvent";
import { useSearchDate } from '../../hooks/useSearchSessions';
import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Fab } from "@mui/material";

export const getServerSideProps: GetServerSideProps = async () => {

   try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/data/allevents/`);
      const data = await response.json();

      if (!data) {
         return {
            notFound: true,
         }
      }
      return {
         props: {
            sessions: data,
         }
      }
   } catch {
      return {
         props: {
            sessions: null,
         },
      }
   }
}

interface SessionsProps {
   sessions: IEvent[]
}

function Sessions({ sessions }: SessionsProps) {
   const [query, setQuery] = useState<string>('');
   const [date, setDate] = useState<string>('');
   const [location, setLocation] = useState<string>('ALL LOCATIONS');
   const [category, setCategory] = useState<string>('All CATEGORIES');
   const [price, setPrice] = useState<number[]>([30, 150]);
   const [scroll, setScroll] = useState<number>(0);

   const searchDate = useSearchDate(date, query, price, category, location, sessions)


   const handleScroll = () => {
      setScroll(window.scrollY);
   };

   useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   return (
      <>
         <Head>
            <title>Events</title>
            <meta name="description" content="Web Development" />
            <meta name="keywords" content="Web Development,Events" />
         </Head>
         <section className={styles.Sessions}>
            <MainContainer>
               <div className={styles.SessionsContent}>
                  <PageTitle title='All Events' />
                  <div className={styles.SessionsContentBody}>
                     <SearchEvent searchDate={searchDate} query={query} setQuery={setQuery} price={price} setPrice={setPrice} date={date} setDate={setDate} location={location} setLocation={setLocation} category={category} setCategory={setCategory} />
                     <SessionsList sessions={searchDate} />
                  </div>
                  {scroll > 300
                     ? <div className={styles.ContentFab}>
                        <Fab size='small' color='primary' onClick={() => window.scrollTo({
                           top: 0, left: 0, behavior: 'smooth',
                        })}>
                           < UpIcon sx={{ color: '#FFFFFF' }} />
                        </Fab>
                     </div>
                     : (null)
                  }
               </div>
            </MainContainer>
         </section>
      </>
   )
}
export default Sessions;