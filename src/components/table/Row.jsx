import React from 'react';
import classes from './Table.module.css';

const Row = ({ children }) => {
    return (
        <tr>
            { children }
        </tr>
    )
}

export default Row;