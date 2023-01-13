import React from 'react';
import classes from './Table.module.css';

export const Table = ({ children }) => {
    return (
        <div className={classes.tableContainer}>
            <table>
                {children}
            </table>
        </div>
    )
}