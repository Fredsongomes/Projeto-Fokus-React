import {PageLayout} from './components/PageLayout'
import {HeaderFokus} from "./components/HeaderFokus/index";
import {Banner} from "./components/Banner/index";
import {MainContent} from "./components/MainContent/index";
import {TimerCard} from "./components/TimerCard/index";
import {TimerTabs} from "./components/TimerTabs/index";
import {TimerTab} from "./components/TimerTab/index";
import {TimerDisplay} from "./components/TimerDisplay/index";
import {MusicToggle} from "./components/MusicToggle/index";
import {TimerForm} from "./components/TimerForm/index";
import {Button} from "./components/Button/index";
import {TaskBoard} from "./components/TaskBoard/index";
import {CurrentTask} from "./components/CurrentTask/index";
import {TaskBoardHeader} from "./components/TaskBoardHeader/index";
import {TaskMenu} from "./components/TaskMenu/index";
import {TaskMenuItem} from "./components/TaskMenuItem/index";
import {TaskList} from "./components/TaskList/index";
import {TaskListItem} from "./components/TaskListItem/index";
import {TaskForm} from "./components/TaskForm/index";
import {SiteFooter} from "./components/SiteFooter/index";
import { IconPlay } from './components/Icons/IconPlay';
import { IconPause } from './components/Icons/IconPause';
import { IconCheck } from './components/Icons/IconCheck';
import { IconDeleteOutline } from './components/Icons/IconDeleteOutline';
import { IconAddCircle } from './components/Icons/IconAddCircle';
import { IconClose } from './components/Icons/IconClose';
import { IconSave } from './components/Icons/IconSave';
import {Activity, useActionState, useEffect, useState} from 'react';
import type {FokusMode, Task} from './types';

function formatTimer(seconds: number) {
    const date = new Date(seconds * 1000)

    return date.toLocaleTimeString('pt-BR', {
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'UTC'
    })
}

const context = {
    'focus': {
        title: 'Otimize sua produtividade,',
        highlight: 'mergulhe no que importa',
        imageUrl: '/mode-1.png',
        totalSeconds: 25 * 60
    },
    'shortBreak': {
        title: 'Que tal dar uma respirada?',
        highlight: 'Faça uma pausa curta!',
        imageUrl: '/mode-2.png',
        totalSeconds: 5 * 60
    },
    'longBreak': {
        title: 'Hora de voltar à superfície.',
        highlight: 'Faça uma pausa longa.',
        imageUrl: '/mode-3.png',
        totalSeconds: 15 * 60
    }
}

function App() {
    const [mode, setMode] = useState<FokusMode>('focus')

    const [remainingSeconds, setRemainingSeconds] = useState<number>(context[mode].totalSeconds)

    const [isTimerStarted, setIsTimerStarted] = useState<boolean>(false)

    const isTimerRunning = isTimerStarted && remainingSeconds > 0

    const [isFormVisible, setIsFormVisible] = useState<boolean>(false)

    const [tasks, setTasks] = useState<Task[]>(() => JSON.parse(localStorage.getItem('tasks') || '[]'))

    const [taskToBeEdited, setTaskToBeEdited] = useState<Task | null>(null)

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    useEffect(() => {
        if (!isTimerRunning) {
            return
        }

        const intervalId = setInterval(() => {
            setRemainingSeconds((prevState) => prevState - 1)
        }, 1000)

        return () => clearInterval(intervalId)
    }, [isTimerRunning])

    function showForm() {
        setIsFormVisible(true)
    }

    function hideForm() {
        setTaskToBeEdited(null)
        setIsFormVisible(false)
    }

    function changeMode(newMode: FokusMode) {
        setMode(newMode)
        setRemainingSeconds(context[newMode].totalSeconds)
        setIsTimerStarted(false)
    }

    function toggleTimer() {
        setIsTimerStarted(!isTimerStarted)
    }

    const [, dispatchAction] = useActionState((_prevState: null, formData: FormData) => {
        const name = String(formData.get('task'))

        if (taskToBeEdited) {
            setTasks(prevState => prevState.map(t => {
                if (t.id === taskToBeEdited.id) {
                    return {...taskToBeEdited, name}
                }
                return t
            }))
        } else {
            setTasks([
                ...tasks,
                {
                    id: Date.now(),
                    name,
                    completed: false
                }
            ])
        }

        hideForm()

        return null
    }, null)

    function toggleTaskComplete(task: Task) {
        setTasks(prevState => prevState.map(t => {
            if (t.id === task.id) {
                return {...task, completed: !t.completed}
            }
            return t
        }))
    }

    function editTask(task: Task) {
        setTaskToBeEdited(task)
        showForm()
    }

    function deleteTask() {
        if (taskToBeEdited) {
            setTasks(prevState => prevState.filter(t => t.id !== taskToBeEdited.id))
            hideForm()
        }
    }

    function clearCompletedTasks() {
        setTasks(prevState => prevState.filter(t => !t.completed))
    }

    function clearAllTasks() {
        setTasks([])
    }

    return (<PageLayout mode={mode}>
            <HeaderFokus/>
            <MainContent>
                <Banner
                    title={context[mode].title}
                    highlight={context[mode].highlight}
                    imageUrl={context[mode].imageUrl}
                />
                <TimerCard>
                    <TimerTabs>
                        <TimerTab active={mode === 'focus'} onClick={() => changeMode('focus')}>
                            Foco
                        </TimerTab>
                        <TimerTab active={mode === 'shortBreak'} onClick={() => changeMode('shortBreak')}>
                            Descanso curto
                        </TimerTab>
                        <TimerTab active={mode === 'longBreak'} onClick={() => changeMode('longBreak')}>
                            Descanso longo
                        </TimerTab>
                    </TimerTabs>
                    <TimerDisplay time={formatTimer(remainingSeconds)} />
                    <MusicToggle/>
                    <TimerForm>
                        <Button onClick={toggleTimer}>
                            {isTimerStarted
                                ? <><IconPause /> Pausar</>
                                : <><IconPlay /> Começar</>}
                        </Button>
                    </TimerForm>
                </TimerCard>
                <TaskBoard>
                    <CurrentTask name="Nome da tarefa em andamento"/>
                    <TaskBoardHeader title="Lista de tarefas:">
                        <TaskMenu>
                            <TaskMenuItem icon={<IconCheck/>} onClick={clearCompletedTasks}>
                                Limpar tarefas concluídas
                            </TaskMenuItem>
                            <TaskMenuItem icon={<IconDeleteOutline/>} onClick={clearAllTasks}>
                                Limpar todas as tarefas
                            </TaskMenuItem>
                        </TaskMenu>
                    </TaskBoardHeader>
                    <TaskList>
                        {tasks.map((task) => (
                            <TaskListItem
                                key={task.id}
                                complete={task.completed}
                                active={false}
                                onToggleComplete={() => toggleTaskComplete(task)}
                                onAskForEdit={() => editTask(task)}
                            >
                                {task.name}
                            </TaskListItem>
                        ))}
                    </TaskList>
                    <Activity mode={isFormVisible ? 'visible' : 'hidden'}>
                        <TaskForm
                            label={taskToBeEdited ? 'Editando tarefa' : 'Adicionando tarefa'}
                            action={dispatchAction}
                            defaultValue={taskToBeEdited?.name}
                        >
                            {taskToBeEdited && (
                                <Button variant="ghost" onClick={deleteTask}>
                                    <IconDeleteOutline/> Deletar
                                </Button>
                            )}
                            <Button variant="ghost" onClick={hideForm}>
                                <IconClose/> Cancelar
                            </Button>
                            <Button variant="dark" type="submit">
                                <IconSave/> Salvar
                            </Button>
                        </TaskForm>
                    </Activity>
                    {!isFormVisible && (
                        <Button variant="outline" fullWidth onClick={showForm}>
                            <IconAddCircle/> Adicionar nova tarefa
                        </Button>
                    )}
                </TaskBoard>
            </MainContent>
            <SiteFooter/>
        </PageLayout>);

}

export default App
