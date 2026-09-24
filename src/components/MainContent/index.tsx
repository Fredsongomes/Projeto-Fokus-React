import type {ReactNode} from 'react'
import styles from './MainContent.module.css'

export function MainContent({children}: {children: ReactNode}) {
    return (
        <main id="main-content" className={styles.main}>
            {children}
        </main>
    )
}