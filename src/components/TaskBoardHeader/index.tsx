import type {ReactNode} from 'react'
import styles from './TaskBoardHeader.module.css'

interface TaskBoardHeaderProps {
    title: string
    children: ReactNode
}

export function TaskBoardHeader({title, children}: TaskBoardHeaderProps) {
    return (
        <div className={styles.header}>
            <h2 id="task-board-heading" className={styles.heading}>{title}</h2>
            {children}
        </div>
    )
}
