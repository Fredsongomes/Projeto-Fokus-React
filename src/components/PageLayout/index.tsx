import type {ReactNode} from 'react'
import type {FokusMode} from '../../types'
import styles from './PageLayout.module.css'

interface PageLayoutProps {
    children: ReactNode
    mode: FokusMode
}

export function PageLayout({children, mode}: PageLayoutProps) {
    return (
        <div className={`${styles.pageLayout} ${styles[mode]}`}>
            <a href="#main-content" className={styles.skipLink}>
                Pular para o conteúdo principal
            </a>
            {children}
        </div>
    )
}
