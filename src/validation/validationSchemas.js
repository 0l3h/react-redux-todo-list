import * as Yup from 'yup';

const Schemas = {
    todoInput: Yup.object({
        todo: Yup.string('Todo must be a type of string.').required('Field is required'),
    })
};

export default Schemas;