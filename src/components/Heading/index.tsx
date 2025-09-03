import type React from 'react';
import styles from './styles.module.css';

type HeadingProps = {
    children: React.ReactNode
}

export function Heading({ children } : HeadingProps) {


    return (
        <>
            <h1 className={styles.heading}>{children}</h1>
        </>
    )

}

// Component react that returns a JSX element. It receives a prop children, destructured. His type is React.ReactNode, that means it can be any valid react element.
// Exist one class css called.
