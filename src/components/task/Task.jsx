import React from 'react';
import { Table } from '../table/Table';
import { Title } from '../UI/text/Title';

export const Task = () => {
    return (
        <Table>
            <thead>
                <tr>
                    <td>
                        <Title>Завдання</Title>
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        Кожен запис за штатним розкладом підприємства містить наступні дані: номер цеху,
                        прізвище і ініціали, професію, розряд, стаж роботи. Скласти список слюсарів і
                        фрезерувальників, що працюють на даному підприємстві більше 10 років і що мають
                        розряд вище четвертого.
                    </td>
                </tr>
            </tbody>
        </Table>
    )
}