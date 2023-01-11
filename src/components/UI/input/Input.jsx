import React from 'react';
import classes from './Input.module.css';

const Input = ({ children, ...props }) => {
    return (
        <div className={ classes.inputContainer }>
            <input { ...props } className={[classes.input, classes.large].join(' ')} />
            <label className={ classes.inputLabel } htmlFor={ props.id }>
                { children }
            </label>
        </div>
    )
}

export default Input;