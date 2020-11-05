import React,{useState} from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import FormikControl from '../components/FormikControl';
import { useHistory } from 'react-router-dom';

const TodoForm = () => {
    const history = useHistory();
    const [todoList,setTodoList] = useState([]);
    const initialValues = {
        todo: ''
    }
    const validationSchema = Yup.object({
        todo: Yup.string().required('Todo is required')
    });
    const onSubmit = (values, onSubmitProps) => {
        onSubmitProps.setSubmitting(false);
        onSubmitProps.resetForm();
        todoList.unshift(values)
        history.push({
            pathname: '/todo',
            state: todoList
        })
    }
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                enableReinitialize
            >
                {
                    formik => {
                        return (
                            <Form>
                                <div className="form-group my-3 inputComponent">
                                    <FormikControl control="input" type="text" name="todo" placeholder="Add New Task.." />
                                    <div className="input-icon">
                                        <button type="submit" className="btn" disabled={!formik.isValid || formik.isSubmitting}>
                                            <FontAwesomeIcon icon={faPlus} />
                                        </button>
                                    </div>
                                </div>
                            </Form>
                        )
                    }
                }
            </Formik>
        </div>
    )
};

export default TodoForm;
