const names = [ "Косар", "Ткаченко", "Гурик", "Ключковський", "Зеров", "Грабінський", "Тимощук", "Семків", "Громики", "Чарниш", "Богаченко", "Якутович", "Гнідичі", "Вертипорох", "Дорошкевич", "Семкович", "Піснячевський", "Малий", "Бобикевич", "Садовий", "Сиченко", "Рудинський", "Анищенко", "Чаплинський", "Пашко", "Худченко", "Бевзенко", "Шпек", "Костриця", "Панко", "Паращук", "Волощак", "Проць", "Климович", "Чаговець", "Холоденко", "Шумлянський", "Конончук", "Томашевський", "Чорногуз", "Тригуб", "Грицьків", "Бурч", "Федюк", "Тимчак", "Бокшай", "Могитич", "Черкасенко", "Березовченко", "Радкевич", "Якобовський", "Індишевський", "Гомоляка", "Залізняк", "Ющук", "Бурлюк", "Лончина", "Трутовський", "Гречаний", "Дідушицький", "Ковбасюк", "Федечко", "Майданюк", "Підлужний", "Ярмоленко", "Шестак", "Мохнацький", "Беринда", "Олешко", "Загул", "Карпінський", "Недря", "Лагода", "Мартинович", "Микитин", "Снігур", "Луняк", "Гірняк", "Таран", "Юрчук", "Франко", "Шиманський", "Колесників", "Шахрай", "Старовойт", "Чех", "Кохановський", "Шищенко", "Смик", "Солдатенко", "Стадницький", "Крохмаль", "Баланчук", "Лось", "Богун", "Бурлака", "Апостол", "Воєвода", ];
const fullName = [ "В.М.", "Ш.Г.", "Т.С.", "О.М.", "Н.Я.", "Ю.О.", "О.М.", "П.Д.", "Н.З.", "Р.С.", "В.Н.", "Я.Й.", "В.Б.", "Л.Й.", "І.В.", "Б.Ж.", "Ф.А.", "Т.Ю.", "В.Ю.", "Й.Р.", "Д.Я.", "С.А.", "Ц.О.", "О.Г.", "О.Я.", "Щ.О.", "Ю.Б.", "І.Т.", "П.Я.", "Ф.Ч.", "П.І.", "В.О.", "І.Г.", "С.Я.", "Й.А.", "К.М.", "Х.Б.", "Я.Б.", "Р.Р.", "В.Ч.", "Р.Г.", "Л.П.", "Ш.К.", "С.С.", "Л.Г.", "Б.Т.", "Ю.Г.", "П.Г.", "Д.З.", "Й.О.", "Г.А.", "Х.В.", "О.Г.", "Т.Н.", "Н.З.", "Е.Я.", "З.Б.", "Ж.П.", "Б.М.", "А.В.", "Т.Д.", "К.Ю.", "У.П.", "А.В.", "О.А.", "Х.Ч.", "В.Ю.", "Ф.Ю.", "Ч.Т.", "У.Б.", "Ю.З.", "Є.І.", "Т.Н.", "В.Д.", "Щ.Ф.", "Ч.Б.", "П.П.", "М.Т.", "Й.Г.", "Л.Л.", "У.М.", "Г.Н.", "К.Ж.", "Г.Б.", "С.Л.", "Є.І.", "Ж.С.", "Т.Г.", "Й.Д.", "А.С.", "Б.Я.", "Щ.А.", "Б.С.", "Й.Г.", "Є.М.", "З.Г.", "К.Г.", "Й.З.", "У.А."];
const professions = [ "Сварщик", "Слюсар", "Фрезерувальник", "Столяр", "Водій", "Завідувач складу"];
const nameRegexp = /[А-ЯІ][а-яії]+\s+[А-Я]\.\s?[А-Я]\./;

function getNumber(min, max) { 
    return parseInt(Math.random() * (max - min) + min);
}

function isNameValid(name) {
    return nameRegexp.test(name);
}

document.getElementById("first-form").addEventListener("submit", (e) => {
    e.preventDefault();

    let resultPersonalCount = 0;
    let employees = [];
    let selectedEmployees = [];

    Employee.prototype.isExperienced = function() {
        return this.exp > 10;
    };
    Employee.prototype.isHasHighDischarge = function() {
        return this.discharge > 4;
    }

    function Employee(fullName, workShopNumber, profession, discharge, exp) {
        let object = Object.create(Employee.prototype);
        object.fullName = fullName;
        object.workShopNumber = workShopNumber;
        object.profession = profession;
        object.discharge = discharge;
        object.exp = exp;
        return object;
    }

    const amountPersonal = parseInt(document.getElementById("amount-of-personal").value);
    console.log(amountPersonal);
    const formResult = document.getElementById("first-form-result");
   
    if (isAmountPersonalValid()) {
        employees = randomPersonal();
        console.log(employees);
        formResult.innerHTML = getPersonalTable() + getResultPersonalTable();
    } else if (amountPersonal <= 0) {
        formResult.innerHTML = `
            <div class="alert">Потрібно згенерувати щонайменьше одного працівника!</div>
        `;
    } else if (amountPersonal > 999) {
        formResult.innerHTML = `
            <div class="alert">Завелика кількість працівників!</div>
        `;
    }

    function randomPersonal() {
        let employees = [];
        for (let i = 0; i < amountPersonal; ++i) {
            employees[i] = new Employee();
            employees[i].fullName = new String(`${names[getNumber(0, names.length)]} ${fullName[getNumber(0, names.length)]}`);
            employees[i].workShopNumber = getNumber(1, 10);
            employees[i].profession = professions[getNumber(0, professions.length)];
            employees[i].discharge = getNumber(1, 10);
            employees[i].exp = getNumber(1, 30);
        }
        return employees;
    }


    function getPersonalTable() {
        let result = new String();
        result += `
            <h3>Працівники</h3>
            <div class="table-container">
                <table style="width: 100%;">
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
        `;
        for (let i = 0; i < amountPersonal; ++i) {
            if (employees[i].profession == "Фрезерувальник" || employees[i].profession == "Слюсар"
                && employees[i].isHasHighDischarge() && employees[i].isExperienced()
            ) {
                result += `
                    <tr>
                        <td class="${employees[i].isHasHighDischarge() && employees[i].isExperienced() ? "bg-lightgreen" : ''}">${employees[i].fullName}</td>
                        <td>${employees[i].workShopNumber}</td>
                        <td>${employees[i].profession}</td>
                        <td class="${employees[i].isHasHighDischarge() ? "bg-lightgreen" : ''}">${employees[i].discharge}</td>
                        <td class="${employees[i].isExperienced() ? "bg-lightgreen" : ''}">${employees[i].exp}</td>
                    </tr>
                `;
                selectedEmployees[resultPersonalCount++] = employees[i];
            } else {
                result += `
                    <tr>
                        <td>${employees[i].fullName}</td>
                        <td>${employees[i].workShopNumber}</td>
                        <td>${employees[i].profession}</td>
                        <td>${employees[i].discharge}</td>
                        <td>${employees[i].exp}</td>
                    </tr>
                `;
            }
            
        }
        result += `
                    </tbody>
                </table>
            </div>
        `;
        return result;
    }

    function getResultPersonalTable() {
        if (selectedEmployees.length > 0) {
            let result = new String();
            result += `
            <h3>Слюсарі та фрезерувальники з досвідом</h3>
            <div class="table-container">
                <table style="width: 100%">
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
            `;
            for (let i = 0; i < resultPersonalCount; ++i) {
                    result += `
                    <td>${selectedEmployees[i].fullName}</td>
                    <td>${selectedEmployees[i].workShopNumber}</td>
                    <td>${selectedEmployees[i].profession}</td>
                    <td>${selectedEmployees[i].discharge}</td>
                    <td>${selectedEmployees[i].exp}</td>
                </tr>
                `;
            }
            result += `
                        </tbody>
                    </table>
                </div>
            `;
            return result;
        } else {
            return "<div class='info'>Працівники, що відповідають умові відсутні</div>";
        }
    }

    function isAmountPersonalValid() {
        return amountPersonal > 0 && amountPersonal < 999;
    }
});