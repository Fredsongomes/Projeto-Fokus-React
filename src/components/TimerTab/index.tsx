import type {ReactNode} from 'react'
import styles from './TimerTab.module.css'

interface TimerTabProps {
    active: boolean
    children: ReactNode
    onClick: () => void
}

export function TimerTab({ active, children, onClick }: TimerTabProps) {
    return (
        <button
            className={`${styles.timerTab} ${active ? styles.active : ""}`}
            role="tab"
            type="button"
            aria-selected={active}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
