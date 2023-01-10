import React from 'react';
import classes from './Table.module.css';

const Col = ({ children }) => {
    return (
        <td>
            { children }
        </td>
    )
}

export default Col;