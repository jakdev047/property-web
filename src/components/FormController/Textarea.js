import React from 'react';
import { ErrorMessage, Field } from 'formik';
import TextError from '../TextError';

const Textarea = props => {
    const { label,name,...rest } = props;
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <Field as='textarea' id={name} name={name} {...rest} className="form-control"/>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default Textarea;