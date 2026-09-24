import styles from './Banner.module.css'

interface BannerProps {
    title: string
    highlight: string
    imageUrl: string
}

export function Banner({title, highlight, imageUrl} : BannerProps) {
    return (
        <section aria-label="Banner" className={styles.banner}>
            <h2 className={styles.title}><span className={styles.title}>{title}</span>
                <br/>
                <strong className={styles.highlight}>{highlight}</strong></h2>
            <img src={imageUrl} alt=""/>
        </section>
    )
}
