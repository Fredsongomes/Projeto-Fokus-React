import type {ReactNode} from 'react'
import styles from './TaskMenuItem.module.css'

interface TaskMenuItemProps {
    icon: ReactNode
    children: ReactNode
    onClick: () => void
}

export function TaskMenuItem({icon, children, onClick}: TaskMenuItemProps) {
    return (
        <li className={styles.item} role="none">
            <button type="button" className={styles.button} role="menuitem" onClick={onClick}>
                {icon}
                {children}
            </button>
        </li>
    )
}
