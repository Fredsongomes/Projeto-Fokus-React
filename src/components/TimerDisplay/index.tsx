import styles from './timerDisplay.module.css'

export function TimerDisplay({time}: {time: string}) {

    return (
        <div className={styles.timerDisplay}>
            <span className={styles.timerTime} role="timer" aria-live="polite"  aria-label="Tempo restante">
                {time}
            </span>
        </div>
    )
}