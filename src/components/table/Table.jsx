import React from 'react';
import Thead from './Thead';
import Tbody from './Tbody';
import Row from './Row';
import Col from './Col';
import './Table.module.css';

const Table = ({ children }) => {
    return (
        <table className="table-container">
            { children }
        </table>
    )
}

export {
    Table,
    Thead,
    Tbody,
    Row,
    Col
};