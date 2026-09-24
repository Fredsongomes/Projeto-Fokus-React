import type {ReactNode} from 'react'
import styles from './TimerTabs.module.css'

export function TimerTabs({children}: {children: ReactNode}) {
    return (
        <div role="tablist" aria-label="Tipo de timer" className={styles.tabs}>
            {children}
        </div>

    )
}