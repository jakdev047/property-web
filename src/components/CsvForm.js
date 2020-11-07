import React, { } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../components/FormikControl';

const CsvForm = props => {
    const initialValues = {
        name: '',
        email: '',
        description: ''
    }
    const validationSchema = Yup.object({
        name: Yup.string().required('name is required'),
        email: Yup.string().email('Invalid Email Formate').required('Email is required'),
        description: Yup.string().required('Description is required')
    });
    const onSubmit = (values, onSubmitProps) => {
        onSubmitProps.setSubmitting(false);
        onSubmitProps.resetForm();
        console.log(values);
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
                                <div className="form-group my-3">
                                    <FormikControl control="input" type="text" name="name" placeholder="Name " />
                                </div>
                                <div className="form-group">
                                    <FormikControl control="input" type="email" name="email" placeholder="Email " />
                                </div>
                                <div className="form-group">
                                    <FormikControl control="textarea" name="description" placeholder="Description " />
                                </div>
                                <div className="form-group my-3">
                                    <button type="submit" className="btn btn-success" disabled={!formik.isValid || formik.isSubmitting}>
                                        Submit
                                    </button>
                                </div>
                            </Form>
                        )
                    }
                }
            </Formik>
        </div>
    )
};

export default CsvForm;
