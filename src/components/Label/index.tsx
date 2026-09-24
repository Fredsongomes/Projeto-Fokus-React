import type {ReactNode} from 'react'
import styles from './Label.module.css'

interface LabelProps {
    htmlFor: string
    children: ReactNode
}

export function Label({htmlFor, children}: LabelProps) {
    return (
        <label className={styles.label} htmlFor={htmlFor}>
            {children}
        </label>
    )
}
