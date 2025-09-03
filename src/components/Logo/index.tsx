import type React from 'react';
import styles from './styles.module.css';

type LogoProps = {
    children: React.ReactNode
}

export function Logo({ children } : LogoProps) {


    return (
        <>
            <h1 className={styles.logo}>{children}</h1>
        </>
    )
}
