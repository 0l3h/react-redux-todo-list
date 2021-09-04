import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Schema from './../../../validation/validationSchemas';
import styles from './TodoForm.module.scss';
import classNames from 'classnames';

function ToDoForm({initialValues, addTask}) {
    return (
        <Formik initialValues={initialValues} 
            validationSchema={Schema.todoInput} 
            onSubmit={addTask}>
                
           {({errors, touched}) => 
                <Form>
                    <Field className={
                        classNames({
                            [styles.inputValid]: touched.todo && !errors.todo,
                            [styles.inputInvalid]: touched.todo && errors.todo,
                        })
                    } 
                    name='todo' 
                    type='text' 
                    placeholder='Enter todo here'/>

                    <button type="submit">Submit</button>
                    <div className={styles.errorMessage}>
                        <ErrorMessage name='todo'/>
                    </div>
                </Form>
            }
        </Formik>
    )
}

export default ToDoForm;