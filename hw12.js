// Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

let myArr = [true, 3, 0, 12, null, `hi`, -22, 6, false, `black`];

function calc(array){
    const filteredArr = [];
    let sum = 0;
    let calcSum = 0;
    for (let i = 0; i < array.length; i++){
        let element = array[i];
        if (typeof element == 'number'){
            filteredArr.push(element);
            sum = sum + element;
        }
    }
    if (filteredArr.length == 0) {
        return 'Dividing by zero';
    }

    calcSum = sum / filteredArr.length;
    return calcSum;
}
console.log(calc(myArr))


// Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak.
// У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
// Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

const firstNumber = prompt('Enter the first number');
const secondNumber = prompt('Enter the second number');
const action = prompt('What do you want to do?');

function doMath (firstNumber, action, secondNumber){

    switch (action){
        case '+':
            alert(+firstNumber + +secondNumber);
            break;
        case `-`:
            alert(firstNumber - secondNumber);
            break;
        case '*':
            alert(firstNumber * secondNumber);
            break;
        case '/':
            alert(firstNumber / secondNumber);
            break;
        case '^':
            alert(firstNumber ** secondNumber);
            break;
        case '%':
            alert(firstNumber % secondNumber);
            break;
        default:
            alert(`Unable to calculate`)
    }
}

doMath(firstNumber, action, secondNumber);


// Написати функцію заповнення даними користувача двомірного масиву.
// Довжину основного масиву і внутрішніх масивів задає користувач.
// Значення всіх елементів всіх масивів задає користувач.

let length = Number(prompt(`Enter main array length.`));
let width = Number(prompt(`Enter inner arrays length.`));
let element = prompt(`Enter inner arrays values.`);

function fillArray(length, width){
    let mainArray = new Array(length);
    for (let i = 0; i < mainArray.length; i++){
        mainArray[i] = new Array(width);
        let innerArray = mainArray[i];
        for (let j = 0; j < innerArray.length; j++){
            innerArray[j] = element;
        }
    }
    console.log(mainArray)
}

fillArray(length, width);


// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
// 'func("hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

function remover(string, letters) {
    for (let letter of letters) {
        string = string.replace(new RegExp(letter, "gi"), '');
    }
    alert(string)
}

let str = prompt('Enter a string');
let userInput;
let items = [];
do {
    userInput = prompt('Enter a symbol to remove');
    if (!userInput == ''){
        items.push(userInput);
    }
} while (userInput != null && !userInput == '');

remover(str, items);
