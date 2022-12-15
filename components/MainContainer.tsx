import { ChildrenProps } from '../models/types';
import styles from '../styles/ContainerMain.module.scss';
function MainContainer({ children }: ChildrenProps) {
   return (
      <div className={styles.Container}> {children}</div>
   )
}
export default MainContainer;