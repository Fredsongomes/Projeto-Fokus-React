import type {ReactNode} from 'react'
import styles from './TaskListItem.module.css'
import {IconCheckCircle} from "../Icons/IconCheckCircle";
import {IconEdit} from "../Icons/IconEdit";

interface TaskListItemProps {
    complete: boolean
    active: boolean
    children: ReactNode
    onToggleComplete: () => void
    onAskForEdit: () => void
}

export function TaskListItem({complete, active, children, onToggleComplete, onAskForEdit}: TaskListItemProps) {
    return (
        <li className={`${styles.item} ${complete ? styles.complete : ''} ${active ? styles.active : ''}`}>
            <button type="button" className={styles.status} onClick={onToggleComplete}>
                <IconCheckCircle checked={complete}/>
            </button>
            <p className={styles.description}>{children}</p>
            <button type="button" className={styles.edit} onClick={onAskForEdit}>
                <IconEdit/>
            </button>
        </li>
    )
}
