import React from 'react';
import { connect } from 'react-redux';
import styles from './List.module.scss';
import * as actionCreators from '../../actions/actionCreators';

function List(props) {
    const {deleteTodo, tasks} = props;
    // Creates a list of tasks
    const createListOfTasks  = (task, index) => {
        console.log('task', task);
        const deleteTask = () => {
            deleteTodo(index);
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
        <section className={styles.list}>
            <ul>
                {tasks.map(createListOfTasks)}
            </ul>
        </section>
    )
}

const mapStateToProps = (state) => {
   return {
        tasks: state.tasks,
   }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTodo: (index) => {
            dispatch(actionCreators.deleteTodo(index));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);