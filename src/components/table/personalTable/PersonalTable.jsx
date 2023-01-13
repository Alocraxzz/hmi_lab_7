import React from 'react';
import { Table } from '../Table';
import { Alert } from '../../UI/alert/Alert';

export const PersonalTable = ({ personalList, callback }) => {
    if (callback) {
        personalList = personalList.filter((employee) => {
            return callback(employee);
        });
    }

    if (personalList.length > 0) {
        return (
            <Table>
                <thead>
                    <tr>
                        <td>ПІБ</td>
                        <td>Номер цеху</td>
                        <td>Професія</td>
                        <td>Розряд</td>
                        <td>Стаж</td>
                    </tr>
                </thead>
                <tbody>
                    {personalList.map((employee, index) => {    
                        return (
                            <tr key={index}>
                                <td>{employee.fullName}</td>
                                <td>{employee.workShopNumber}</td>
                                <td>{employee.profession}</td>
                                <td>{employee.discharge}</td>
                                <td>{employee.exp}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        )
    } else {
        return (
            <Alert>
                Працівники що відповідають умові завдання не знайдені
            </Alert>
        )
    }
}