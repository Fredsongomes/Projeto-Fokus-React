import type {ReactNode} from 'react'
import styles from './TaskMenu.module.css'
import {IconMoreVert} from "../Icons/IconMoreVert";

export function TaskMenu({children}: {children: ReactNode}) {
    return (
        <details className={styles.taskMenu}>
            <summary className={styles.trigger} aria-label="Opções da lista de tarefas">
                <IconMoreVert/>
            </summary>
            <ul className={styles.list} role="menu">
                {children}
            </ul>
        </details>
    )
}
