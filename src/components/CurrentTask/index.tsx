import styles from './CurrentTask.module.css'


export function CurrentTask({name}: {name: string}) {
    return (
        <p className={styles.currentTask} aria-live="polite">
            <span className={styles.label}>#Em andamento:</span>
            <strong className={styles.name}>{name}</strong>
        </p>
    )
}
