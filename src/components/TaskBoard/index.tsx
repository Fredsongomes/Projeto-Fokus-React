import type {ReactNode} from 'react'
import styles from './TaskBoard.module.css'

export function TaskBoard({children}: {children: ReactNode}) {
    return (
        <section aria-labelledby="task-board-heading" className={styles.taskBoard}>
            {children}
        </section>
    )
}
