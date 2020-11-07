import React from 'react';
import Input from "./FormController/Input";
import Textarea from './FormController/Textarea';

const FormikControl = props => {

    const {control,...rest} = props;

    switch (control) {
        case 'input':
            return <Input {...rest} />
            case 'textarea':
                return <Textarea {...rest} /> 
        default: 
            return null;
    }
};

export default FormikControl;