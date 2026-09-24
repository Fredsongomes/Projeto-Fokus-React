import {useRef, type ChangeEvent} from 'react'
import styles from './MusicToggle.module.css'

export function MusicToggle() {
    const audioRef = useRef<HTMLAudioElement>(null)

    function handleToggleMusic(event: ChangeEvent<HTMLInputElement>) {
        if (event.target.checked) {
            audioRef.current?.play()
        } else {
            audioRef.current?.pause()
        }
    }

    return (
        <label htmlFor="toggle-music" className={styles.toggle}>
            <input
                type="checkbox"
                id="toggle-music"
                className={styles.input}
                onChange={handleToggleMusic}
            /> Música
            <audio ref={audioRef} src="/sounds/lofi.mp3" loop/>
        </label>
    )
}
