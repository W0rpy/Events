import MainContainer from '../../components/MainContainer'
import styles from '../../styles/Session.module.scss';
import SessionInfo from '../../components/SessionInfo';
import PageTitle from "../../components/PageTitle";
import useSWR from 'swr';
import { useRouter } from 'next/router';

const fetcher = async (url: string) => {
   const res = await fetch(url)
   const data = await res.json()

   if (res.status !== 200) {
      throw new Error(data.message)
   }
   return data
}
function Session() {
   const { query } = useRouter()
   const { data, error } = useSWR(
      () => query.id && `/api/data/${query.id}`,
      fetcher
   )

   if (error) return <div>{error.message}</div>
   if (!data) return <div>Loading...</div>

   return (
      <div className={styles.CardEvent}>
         <MainContainer>
            <div className={styles.CardEventBody}>
               <PageTitle title='Event Details' />
               <SessionInfo card={data} />
            </div>
         </MainContainer>
      </div>

   )
}
export default Session;