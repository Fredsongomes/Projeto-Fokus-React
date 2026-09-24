export type FokusMode = 'focus' | 'shortBreak' | 'longBreak'

export interface Task {
    id: number
    name: string
    completed: boolean
}
