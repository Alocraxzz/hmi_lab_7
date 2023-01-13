import React from "react";
import { Form } from "../Form";
import { Title } from "../../UI/text/Title";
import { Input } from "../../UI/input/Input";
import { Button } from "../../UI/button/Button";
import { useState } from "react";

import { generatePersonalList } from '../../../task.script.js';

export const PersonalForm = ({ transferPersonalList, transferAmountPersonal, transferIsFormSubmitted }) => {
    const [amountPersonal, setAmountPersonal] = useState('');
    const [personalList, setPersonalList] = useState([]);

    const createPersonal = () => {
        if (amountPersonal < 999 && amountPersonal > 0) {
            setPersonalList(generatePersonalList(amountPersonal));
        }
    }

    const handleClick = (event) => {
        event.preventDefault();
        createPersonal();
        
        transferAmountPersonal(amountPersonal);
        transferIsFormSubmitted(true);
        transferPersonalList(personalList);
    }

    return (
        <Form>
            <Title>
                Згенерувати працівників
            </Title>
            <Input
                id="amount-of-personal"
                type="number" placeholder=" "
                value={amountPersonal}
                onChange={(event) => setAmountPersonal(event.target.value)}
                required
            >
                Кількість
            </Input>
            <Button onClick={handleClick}>
                Згенерувати
            </Button>
        </Form>
    )
}