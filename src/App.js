import { useState } from 'react';
import logo from './logo.svg';
import './styles/App.css';

import Table from './components/table/Table';
import Container from './components/layout/Container';
import Title from './components/UI/text/Title';
import Input from './components/UI/input/Input';
import Button from './components/UI/button/Button';
import Form from './components/form/Form';
import Center from './components/layout/center/Center';
import Alert from './components/UI/alert/Alert';

const names = ["Косар", "Ткаченко", "Гурик", "Ключковський", "Зеров", "Грабінський", "Тимощук", "Семків", "Громики", "Чарниш", "Богаченко", "Якутович", "Гнідичі", "Вертипорох", "Дорошкевич", "Семкович", "Піснячевський", "Малий", "Бобикевич", "Садовий", "Сиченко", "Рудинський", "Анищенко", "Чаплинський", "Пашко", "Худченко", "Бевзенко", "Шпек", "Костриця", "Панко", "Паращук", "Волощак", "Проць", "Климович", "Чаговець", "Холоденко", "Шумлянський", "Конончук", "Томашевський", "Чорногуз", "Тригуб", "Грицьків", "Бурч", "Федюк", "Тимчак", "Бокшай", "Могитич", "Черкасенко", "Березовченко", "Радкевич", "Якобовський", "Індишевський", "Гомоляка", "Залізняк", "Ющук", "Бурлюк", "Лончина", "Трутовський", "Гречаний", "Дідушицький", "Ковбасюк", "Федечко", "Майданюк", "Підлужний", "Ярмоленко", "Шестак", "Мохнацький", "Беринда", "Олешко", "Загул", "Карпінський", "Недря", "Лагода", "Мартинович", "Микитин", "Снігур", "Луняк", "Гірняк", "Таран", "Юрчук", "Франко", "Шиманський", "Колесників", "Шахрай", "Старовойт", "Чех", "Кохановський", "Шищенко", "Смик", "Солдатенко", "Стадницький", "Крохмаль", "Баланчук", "Лось", "Богун", "Бурлака", "Апостол", "Воєвода",];
const fullName = ["В.М.", "Ш.Г.", "Т.С.", "О.М.", "Н.Я.", "Ю.О.", "О.М.", "П.Д.", "Н.З.", "Р.С.", "В.Н.", "Я.Й.", "В.Б.", "Л.Й.", "І.В.", "Б.Ж.", "Ф.А.", "Т.Ю.", "В.Ю.", "Й.Р.", "Д.Я.", "С.А.", "Ц.О.", "О.Г.", "О.Я.", "Щ.О.", "Ю.Б.", "І.Т.", "П.Я.", "Ф.Ч.", "П.І.", "В.О.", "І.Г.", "С.Я.", "Й.А.", "К.М.", "Х.Б.", "Я.Б.", "Р.Р.", "В.Ч.", "Р.Г.", "Л.П.", "Ш.К.", "С.С.", "Л.Г.", "Б.Т.", "Ю.Г.", "П.Г.", "Д.З.", "Й.О.", "Г.А.", "Х.В.", "О.Г.", "Т.Н.", "Н.З.", "Е.Я.", "З.Б.", "Ж.П.", "Б.М.", "А.В.", "Т.Д.", "К.Ю.", "У.П.", "А.В.", "О.А.", "Х.Ч.", "В.Ю.", "Ф.Ю.", "Ч.Т.", "У.Б.", "Ю.З.", "Є.І.", "Т.Н.", "В.Д.", "Щ.Ф.", "Ч.Б.", "П.П.", "М.Т.", "Й.Г.", "Л.Л.", "У.М.", "Г.Н.", "К.Ж.", "Г.Б.", "С.Л.", "Є.І.", "Ж.С.", "Т.Г.", "Й.Д.", "А.С.", "Б.Я.", "Щ.А.", "Б.С.", "Й.Г.", "Є.М.", "З.Г.", "К.Г.", "Й.З.", "У.А."];
const professions = ["Сварщик", "Слюсар", "Фрезерувальник", "Столяр", "Водій", "Завідувач складу"];

function getNumber(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

class Employee {
    constructor(id, fulName, workShopNumber, profession, discharge, exp) {
        this.id = id;
        this.fullName = fulName;
        this.workShopNumber = workShopNumber;
        this.profession = profession;
        this.discharge = discharge;
        this.exp = exp;
    }

    isExperienced() {
        return this.exp > 10;
    }

    isHasHighDischarge() {
        return this.discharge > 4;
    }
}

function App() {
    const [amountPersonal, setAmountPersonal] = useState('');
    const [personalList, setPersonalList] = useState([]);

    const generatePersonal = (event) => {
        event.preventDefault();

        if (amountPersonal < 999) {
            setPersonalList(() => {
                let personalList = [];
                for (let i = 0; i < amountPersonal; ++i) {
                    personalList[i] = new Employee(
                        Date.now(),
                        `${names[getNumber(0, names.length)]} ${fullName[getNumber(0, names.length)]}`,
                        getNumber(1, 10),
                        professions[getNumber(0, professions.length)],
                        getNumber(1, 10),
                        getNumber(1, 30)
                    );
                }
                return personalList;
            });
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Container>
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
                </Container>
                <Container>
                    
                    {(personalList.length > 0) ? (
                        <div>
                            <Title>
                                Згенеровані працівники
                            </Title>
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
                                    {personalList.map((employee) => {
                                        return (
                                            <tr>
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
                            <Title>
                                Працівники що відповідають умові
                            </Title>
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
                                    {personalList.map((employee) => {
                                        if (
                                            (employee.profession !== "Фрезерувальник" || employee.profession !== "Слюсар")
                                            && (!employee.isExperienced() || !employee.isHasHighDischarge())
                                        ) {
                                            return null;
                                        }

                                        return (
                                            <tr>
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
                        </div>
                    ) : (
                        <Alert>
                            Згенеруйте працівників
                        </Alert>
                    )}
                </Container>
            </header>
        </div>
    );
}

export default App;
