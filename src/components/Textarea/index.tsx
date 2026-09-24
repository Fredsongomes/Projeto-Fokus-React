import styles from './Textarea.module.css'

interface TextareaProps {
    id: string
    name: string
    placeholder?: string
    required?: boolean
    defaultValue?: string
}

export function Textarea({id, name, placeholder, required, defaultValue}: TextareaProps) {
    return (
        <textarea
            className={styles.textarea}
            id={id}
            name={name}
            required={required}
            placeholder={placeholder}
            defaultValue={defaultValue}
        />
    )
}
