import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './../../actions/actionCreators'
import ToDoForm from '../forms/TodoForm';
import List from '../List';
import styles from './ToDoList.module.scss';

function ToDoList({addTask, tasks}) {
    console.log(tasks);
    return (
        // Todo list markup
        <article className={styles.todolist}>
            <h1 className={styles.todolistHeader}>Todos ({tasks.length})</h1>
            <ToDoForm addTask={addTask}/>
            <List/>
        </article>
    )
}

const mapStateToProps = (state) => ({
    tasks: state.tasks,
})

const mapDispatchToProps = (dispatch) => ({
    addTask: (values) => dispatch(actionCreators.addTask(values))
})


export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);