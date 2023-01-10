import React from 'react';
import classes from './Form.module.css';

const Form = ({ children, ...props }) => {
    return (
        <form { ...props } className={ classes.form }>
            { children }
        </form>
    )
}

export default Form;