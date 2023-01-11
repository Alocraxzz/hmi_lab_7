import React from "react";
import classes from "./Form.module.css";

const PersonalAmountForm = (props) => {
    return (
        <Form>
            <Title>
                props.title
            </Title>
            <Input
                id="amount-of-personal"
                type="number" placeholder=" "
                value={amountPersonal}
                onChange={(e) => setAmountPersonal(e.target.value)}
                required
            >
                props.inputLabel
            </Input>
            <Button onClick={generatePersonal}>
                props.buttonLabel
            </Button>
        </Form>
    );
}

export default PersonalAmountForm;