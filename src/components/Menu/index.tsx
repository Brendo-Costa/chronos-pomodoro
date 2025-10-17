import type React from 'react';
import styles from './styles.module.css';
import { HouseIcon, SettingsIcon, SunIcon, TimerIcon } from 'lucide-react';
import { Link } from '../Link';
type MenuProps = {
  children: React.ReactNode
}

export function Menu({ children } : MenuProps ) {


  return (
    <nav className={styles['menu']}>
      <Link icon={<HouseIcon />} />
      <Link icon={<TimerIcon />} />
      <Link icon={<SettingsIcon />} />
      <Link icon={<SunIcon />} />
    </nav>
  )
}
