import React from 'react';
import { ErrorMessage, Field } from 'formik';
import TextError from '../TextError';

const Input = props => {
    const { name,...rest } = props;
    return (
        <div>
            <Field id={name} name={name} {...rest} className="form-control"/>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default Input;