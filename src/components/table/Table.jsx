import React from 'react';
import classes from './Table.module.css';

const Table = ({ children }) => {
    return (
        <div className={classes.tableContainer}>
            <table>
                {children}
            </table>
        </div>
    )
}

export default Table;