import { useState } from 'react';
import logo from './logo.svg';
import './styles/App.css';

import { Container } from './components/layout/Container';
import { Task } from './components/task/Task';
import { PersonalForm } from './components/form/personalForm/PersonalForm';
import { Result } from './components/result/Result';

function App() {
    const [amountPersonal, setAmountPersonal] = useState('');
    const [personalList, setPersonalList] = useState([]);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const transferPersonalList = (list) => {
        console.log(list);
        setPersonalList(list);
    }

    const transferAmountPersonal = (amount) => {
        setAmountPersonal(amount);
    }

    const transferIsFormSubmitted = (isSubmitted) => {
        setIsFormSubmitted(isSubmitted);
    }

    const taskCondition = (employee) => {
        return (employee.profession === "Слюсар" || employee.profession === "Фрезерувальник") && (employee.isExperienced() && employee.isHasHighDischarge());
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Container>
                    <Task />
                </Container>
                <Container>
                    <PersonalForm transferPersonalList={transferPersonalList}
                        transferAmountPersonal={transferAmountPersonal}
                        transferIsFormSubmitted={transferIsFormSubmitted}
                    />
                    <Result personalList={personalList}
                        amountPersonal={amountPersonal}
                        taskCondition={taskCondition}
                        isFormSubmitted={isFormSubmitted}
                    />
                </Container>
            </header>
        </div>
    );
}

export default App;
