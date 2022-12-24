import styles from './PageTitle.module.scss';

interface TitleProps {
   title: string
}
function PageTitle({ title }: TitleProps) {
   return (
      <h2 className={styles.SessionsContentTitle}>{title}</h2>
   )
}
export default PageTitle;