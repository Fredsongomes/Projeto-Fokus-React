import type {ReactNode} from 'react'
import styles from './TaskList.module.css'

export function TaskList({children}: {children: ReactNode}) {
    return (
        <ul className={styles.taskList}>
            {children}
        </ul>
    )
}
