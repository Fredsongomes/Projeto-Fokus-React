import type {ReactNode} from 'react'
import styles from './TaskForm.module.css'
import {Label} from "../Label/index";
import {Textarea} from "../Textarea/index";

interface TaskFormProps {
    label: string
    children: ReactNode
    action: (formData: FormData) => void
    defaultValue?: string
}

export function TaskForm({label, children, action, defaultValue}: TaskFormProps) {
    return (
        <form className={styles.taskForm} action={action}>
            <Label htmlFor="task-input">{label}</Label>
            <Textarea
                id="task-input"
                name="task"
                required
                placeholder="No que você está trabalhando?"
                defaultValue={defaultValue}
            />
            <div className={styles.footer}>
                {children}
            </div>
        </form>
    )
}
