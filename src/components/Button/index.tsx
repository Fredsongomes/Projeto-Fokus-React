import styles from './Button.module.css'

interface ButtonProps {
    variant?: 'primary' | 'outline' | 'ghost' | 'dark'
    fullWidth?: boolean
    type?: 'button' | 'submit' | 'reset'
    children?: React.ReactNode
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export function Button({variant = 'primary', fullWidth, type = 'button', children, onClick} : ButtonProps) {
    return (
        <button
            onClick={onClick}
            type={type}
            className={`${styles.button} ${styles[variant]} ${fullWidth ? styles.fullWidth : ''}`}
        >
            {children}
        </button>
    )
}
