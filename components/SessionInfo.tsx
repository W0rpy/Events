import { IEvent } from "../models/types";
import Head from "next/head";
import styles from '../styles/SessionInfo.module.scss';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StadiumIcon from '@mui/icons-material/Stadium';
import DescriptionIcon from '@mui/icons-material/Description';
import EuroSymbolIcon from '@mui/icons-material/EuroSymbol';

interface SessionInfoProps {
   card: IEvent
}

function SessionInfo({ card }: SessionInfoProps) {

   return (
      <>
         <Head>
            <title>Event Details</title>
            <meta name="description" content="Web Development" />
            <meta name="keywords" content="Web Development,Events,Event Details" />
         </Head>
         <div className={styles.CardDetails}>
            <div className={styles.Card}>
               <div className={styles.CardName}>{card.name}</div>

               <div className={styles.CardBody}>
                  <div className={styles.CardField}>
                     <div className={styles.CardIcon}>
                        <CalendarMonthIcon fontSize="large" />
                     </div>
                     <div className={styles.CardText}>Date: <span>{card.date}</span></div>
                  </div>
                  <div className={styles.CardField}>
                     <div className={styles.CardIcon}>
                        <LocationOnIcon fontSize="large" />
                     </div>
                     <div className={styles.CardText}>Location: <span>{card.location}</span></div>
                  </div>
                  <div className={styles.CardField}>
                     <div className={styles.CardIcon}>
                        <StadiumIcon fontSize="large" />
                     </div>
                     <div className={styles.CardText}>Category: <span>{card.category}</span></div>
                  </div>
                  <div className={styles.CardField}>
                     <div className={styles.CardIcon}>
                        <DescriptionIcon fontSize="large" />
                     </div >
                     <div className={styles.CardText}>Description: <span>{card.description}</span></div>
                  </div>
                  <div className={styles.CardField}>
                     <div className={styles.CardIcon}>
                        <EuroSymbolIcon fontSize="large" />
                     </div>
                     <div className={styles.CardText}>Price: <span>{card.price}</span></div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
export default SessionInfo;