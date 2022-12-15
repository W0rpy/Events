import { FC } from 'react';
import styles from '../styles/Error.module.scss';
import Image from 'next/image';
import error from '../public/images/error.png';
import MainContainer from '../components/MainContainer';
const Error: FC = () => {
   return (
      <div className={styles.ErrorPage}>
         <MainContainer>
            <div className={styles.ErrorShell}>
               <div className={styles.ErrorContent}>
                  <div className={styles.ErrorImage}>
                     <Image src={error} width={501} height={400} alt='Error Picture' className={styles.ErrorPicture} />
                  </div>
                  <div className={styles.ErrorText}>
                     <div className={styles.ErrorTitle}>AWWW...DON’T CRY.</div>
                     <div className={styles.SubTitle}>It's just a 404 Error!</div>
                  </div>
               </div>
            </div>
         </MainContainer>
      </div>
   )
}
export default Error;