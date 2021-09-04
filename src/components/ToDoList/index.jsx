import React, {useState} from 'react';
import ToDoForm from '../forms/TodoForm';
import List from '../List';
import styles from './ToDoList.module.scss';

function ToDoList() {
    const [tasks, setTodos] = useState([]);
    const initialValues = {todo: ''}
    const addTask = (values, formikBag) => {
        formikBag.resetForm();
        setTodos(tasks => [...tasks, values])
    };

    return (
        // Todo list markup
        <article className={styles.todolist}>
            <h1 className={styles.todolistHeader}>Todos ({tasks.length})</h1>
            <ToDoForm initialValues={initialValues} addTask={addTask}/>
            <List tasks={tasks} setTodos={setTodos}/>
        </article>
    )
}

export default ToDoList;