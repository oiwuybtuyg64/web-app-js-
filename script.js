const isWorking = true;
console.log(isWorking);

const output = document.getElementById('output');

const emp = [
    {id: 1, title: "Иван Дмитриевич", value: 345,    status: "работает", createdAt: "2026-12-12"},
    {id: 2, title: "Настасия Кириловна",   value: 127,     status: "работает", createdAt: "2027-03-02"},
    {id: 3, title: "Иван Петрович",   value:890 ,    status: "new",  createdAt: "2020-04-04"},
    {id: 4, title: "Ксения Михайловна",   value: 567,     status: "работает",  createdAt: "2024-03-05"},
    {id: 5, title: "Илья Фёдорович", value:9345 ,    status: "работает",  createdAt: "2026-06-12"},
    {id: 6, title: "Пётр Иванови",   value:801 ,     status: "new",  createdAt: "2026-05-20"},
];

const input = document.createElement('input');
input.id = 'minValue';
input.type = 'number';
input.placeholder = 'Порог value для вывода: ';
document.body.appendChild(input);
input.hidden = true;

const btnInput = document.createElement('button');
btnInput.id = 'minValue';
btnInput.type = 'submit';
document.body.appendChild(btnInput);
btnInput.textContent = 'Найти';
btnInput.hidden = true;

const btnAll = document.getElementById('btnAll');
const btnNew = document.getElementById('btnNew');
const btnStats = document.getElementById('btnStats');

btnAll.addEventListener('click', function() {
    input.hidden = true;
    btnInput.hidden = true;

    const appName = 'Список сотрудников';

    output.textContent = `${appName}\n`;

    for (let i = 0; i < emp.length; i++){
        output.textContent += JSON.stringify(emp[i], null, 1);
    }
});

btnNew.addEventListener('click', function() {
    input.hidden = true;
    btnInput.hidden = true;

    const appName = 'Новые сотрудники';

    output.textContent = `${appName}\n`;
    for (let i = 0; i < emp.length; i++){
        if(emp[i].status === "new"){
            output.textContent += JSON.stringify(emp[i], null, 1);
        }
    }
});

btnStats.addEventListener('click', function() {
    input.hidden = false;
    btnInput.hidden = false;
    
    btnInput.addEventListener('click', function(){
        output.textContent = ``;
        for (let i = 0; i < emp.length; i++){
            if(emp[i].value >= input.value){
                output.textContent += JSON.stringify(emp[i], null, 1);
        }
    }
    })
    const appName = 'Статистика';
    
    let empCount = emp.length;
    let sum = 0;
    let newCount = 0;
    let maxValue = 0;
    const minValue = document.getElementById('minValue');
    for (let i = 0; i < emp.length; i++){
        sum += emp[i].value;
    }
    for (let i = 0; i < emp.length; i++){
        if(emp[i].status === "New"){
            newCount++;
        }
    }
    for (let i = 0; i < emp.length; i++){
        if(emp[i].value > maxValue){
            maxValue = emp[i].value;
        }
    }
      
    output.textContent = `${appName}\nДанные корректны: true
Всего заявок: ${empCount}\nОбщая сумма: ${sum}\nМаксимальное значение: ${maxValue}
Кол-во новых заявок: ${newCount}\n`;
    
    
});
 
