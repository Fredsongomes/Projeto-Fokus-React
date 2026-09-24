import type {ReactNode} from 'react'
import styles from './TimeForm.module.css'

export function TimerForm({children}: {children: ReactNode}) {
    return (
        <form className={styles.form}>
            {children}
        </form>
    )
}