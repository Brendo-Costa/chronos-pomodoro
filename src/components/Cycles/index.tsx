import styles from './styles.module.css';
import clsx from 'clsx';

export function Cycles() {
  return(
    <>
      <div className={styles.cycles}>
        <span>Ciclos</span>

        <div className={styles['cycleDots']}>
          <span className={
            clsx(
              styles.cycleDot, 
              styles.workTime
            )
          }></span>
          
          <span className={
            clsx(
              styles.cycleDot, 
              styles.shortBreakTime
            )
          }></span>
          <span className={
            clsx(
              styles.cycleDot, 
              styles.workTime
            )
          }></span>
          <span className={
            clsx(
              styles.cycleDot, 
              styles.workTime
            )
          }></span>
          <span className={
            clsx(
              styles.cycleDot, 
              styles.workTime
            )
          }></span>
          <span className={
            clsx(
              styles.cycleDot, 
              styles.workTime
            )
          }></span>
          <span className={
            clsx(
              styles.cycleDot, 
              styles.workTime
            )
          }></span>
          <span className={
            clsx(
              styles.cycleDot, 
              styles.longBreakTime
            )
          }></span>
  
        </div>
      </div>
    </>
  )
}

export default Cycles;