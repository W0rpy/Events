import ContainerMain from './MainContainer';
import styles from './Header.module.scss';
import { FC } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import logo from './../public/images/logo.svg';
import { Box } from '@mui/material';
const Header: FC = () => {

   return (
      <header className={styles.Header}>
         <ContainerMain>
            <div className={styles.HeaderBody}>
               <div className={styles.HeaderBlock}>
                  <Box >
                     <Link href='/'><Image src={logo} width={76} height={40} alt='Logo' /></Link>
                  </Box>
                  <nav className={styles.HeaderNav}>
                     <ul className={styles.NavList}>
                        <li className={styles.NavItem}><Link href='/events' legacyBehavior><a className={styles.NavLink}>Events</a></Link></li>
                     </ul>
                  </nav>
               </div>

            </div>
         </ContainerMain>
      </header>
   )
}
export default Header;