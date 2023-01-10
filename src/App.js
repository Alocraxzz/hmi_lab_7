import logo from './logo.svg';
import './styles/App.css';
import './task.script.js';

import { Table, Thead, Tbody, Row, Col } from './components/table/Table';
import { Container } from './components/layout/Container';
import { Title, Input, Button } from './components/UI/';
import { Form } from './components/form/Form';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Container>
                    <Table>
                        <Thead>
                            <Row>
                                <Col>
                                    <Title>Завдання</Title>
                                </Col>
                            </Row>
                        </Thead>
                        <Tbody>
                            <Row>
                                <Col>
                                    Кожен запис за штатним розкладом підприємства містить наступні дані: номер цеху,
                                    прізвище і ініціали, професію, розряд, стаж роботи. Скласти список слюсарів і
                                    фрезерувальників, що працюють на даному підприємстві більше 10 років і що мають
                                    розряд вище четвертого.
                                </Col>
                            </Row>
                        </Tbody>
                    </Table>
                </Container>
                <Container>
                    <Title>
                        Вирішення
                    </Title>
                    <Form id="first-form" method="post">
                        <Input
                            id="amount-of-personal"
                            name="amount-of-personal"
                            type="number" placeholder=" "
                            required
                        >
                            Кількість персоналу
                        </Input>
                        <Button onClick={}>
                            Згенерувати список персоналу
                        </Button>
                    </Form>
                    <div id="first-form-result"></div>
                </Container>
            </header>
        </div>
    );
}

export default App;
