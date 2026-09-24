import type {ReactNode} from 'react'
import styles from './TimerCard.module.css'
export function TimerCard({children}: {children: ReactNode}) {
    return (
        <section aria-label="Timer" className={styles.timerCard}>
            {children}
        </section>
    )
}