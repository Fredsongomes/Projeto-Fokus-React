import styles from './Logo.module.css';

export function Logo() {
    return (
        <h1 className={styles.logo}>
            <img src= "/logo.png" alt="" />
        </h1>
    )
}