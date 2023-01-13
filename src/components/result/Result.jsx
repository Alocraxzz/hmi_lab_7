import React from "react";
import { Title } from "../UI/text/Title";
import { PersonalTable } from "../table/personalTable/PersonalTable";
import { Alert } from "../UI/alert/Alert";

export const Result = ({ personalList, amountPersonal, taskCondition, isFormSubmitted }) => {
    if (!isFormSubmitted) {
        return null;
    }
    
    if (amountPersonal > 0) {
        return (
            <div>
                <Title>
                    Згенеровані працівники
                </Title>
                <PersonalTable personalList={personalList} />
                <Title>
                    Працівники що відповідають умові
                </Title>
                <PersonalTable personalList={personalList} callback={taskCondition} />
            </div>
        )
    } else if (amountPersonal < 0) {
        return (
            <Alert>
                Потрібно згенерувати щонайменьше одного працівника
            </Alert>
        )
    } else if (amountPersonal > 1000) {
        return (
            <Alert>
                Завелика кількість працівників
            </Alert>
        )
    }
}