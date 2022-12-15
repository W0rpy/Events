import Grid from '@mui/material/Grid';
import Link from "next/link";
import { Card, CardContent, Pagination, Stack } from "@mui/material";
import styles from '../styles/SessionsList.module.scss';
import { IEvent } from '../models/types';
import { useEffect, useState } from 'react';

interface SessionsProps {
   sessions: IEvent[]
}

function SessionsList({ sessions }: SessionsProps) {

   const [currentPage, setCurrentPage] = useState(1);
   const [limit] = useState(12);

   const lastCurrentIndex = currentPage * limit;
   const firstCurrentIndex = lastCurrentIndex - limit;
   const totalCounts = sessions.length;
   const sessionsOnPage = sessions.slice(firstCurrentIndex, lastCurrentIndex);
   const totalPages = Math.ceil(totalCounts / limit)


   function handleCurrentPage(currentPage: number) {
      setCurrentPage(currentPage)
   }

   useEffect(() => {
      setCurrentPage(1)
   }, [totalCounts])

   return (
      <div className={styles.Events}>
         <div className={styles.EventsList}>
            <Grid container columnSpacing={2} rowSpacing={2}>
               {sessionsOnPage && sessionsOnPage.map((session) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={session.id}>
                     <Link href={`/events/${session.id}`}>
                        <Card sx={{ border: '2px solid #34547A' }}>
                           <CardContent>
                              <div className={styles.SessionCard}>{session.name}</div>
                              <div className={styles.SessionCard}>Category: <span>{session.category}</span></div>
                              <div className={styles.SessionCard}>Date: <span>{session.date}</span></div>
                              <div className={styles.SessionCard}>Location: <span>{session.location}</span></div>
                              <div className={styles.SessionCard}>Price: <span>{session.price}</span></div>
                           </CardContent>
                        </Card>
                     </Link>
                  </Grid>
               ))}
            </Grid>
         </div>
         <div className={styles.EventsPagination}>
            {totalCounts !== 0
               ? <Stack spacing={2}>
                  <Pagination size='small' variant='text' count={totalPages} page={currentPage} onChange={(_, currentPage) => handleCurrentPage(currentPage)} shape="rounded" color='primary' />
               </Stack>
               : (null)
            }
         </div>
      </div >
   )
}
export default SessionsList;