import MainContainer from "./MainContainer";
import { FC } from "react";
import styles from './MainPage.module.scss';
import Image from "next/image";
import web from './../public/images/web.png';
const MainPage: FC = () => {
   return (
      <section className={styles.MainPage}>
         <MainContainer>
            <div className={styles.MainPageContent}>
               <div className={styles.ContentImage}>
                  <Image src={web} width={357} height={234} alt="web" priority className={styles.MainImage} />
               </div>
               <div className={styles.ContentText}>
                  <h1 className={styles.TextTitle}>Web Development</h1>
                  <p className={styles.TextSubtitle}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, facere itaque corrupti quos culpa nostrum nihil, illo fuga blanditiis rerum, minus consequatur id at dignissimos dicta voluptas ullam labore dolorem.</p>
               </div>
            </div>
         </MainContainer>
      </section>
   )
}
export default MainPage;