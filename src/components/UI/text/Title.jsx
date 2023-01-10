import React from 'react';
import classes from './Text.module.css';

const Title = ({ children }) => {
    return (
        <div className={ classes.title }>
            { children }
        </div>
    )
}

export default Title;