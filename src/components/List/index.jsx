import React from 'react';
import styles from './List.module.scss';

function List({tasks, setTodos}) {
    // Creates a list of tasks
    const createListOfTasks  = (task, index) => {

        // Deletes a specific task
        const deleteTask = () => {
            tasks.splice(index, 1);
            setTodos(tasks => [...tasks]);
        }

        return (
            // Task markup
            <li key={index}>
                <input type="checkbox"/>
                {task.todo}
                <button onClick={deleteTask}>Delete</button>
            </li>
        )
    }
    
    return (
        <section className={styles['list']}>
            <ul>
                {tasks.map(createListOfTasks)}
            </ul>
        </section>
    )
}

export default List;