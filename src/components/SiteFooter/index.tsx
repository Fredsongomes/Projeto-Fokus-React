import styles from './SiteFooter.module.css'

export function SiteFooter() {
    return (
        <footer className={styles.siteFooter}>
            <p className={styles.text}>
                Projeto fictício e sem fins comerciais. Imagens geradas por IA no Adobe Firefly. Desenvolvido por Alura.
            </p>
        </footer>
    )
}
