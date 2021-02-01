// task_1
var a = 1, b = 1, c, d;
c = ++a; alert(c); // 2 - инкремент a + 1.
d = b++; alert(d); // 1 - инкремент b + 1, но возврат b до увеличения.
c = (2 + ++a); alert(c); // 5 - инкремент a + 1, затем + 2.
d = (2 + b++); alert(d); // 4 - инкремент b, но вощврат до увеличения, затем + 2.
alert(a); // 3
alert(b); // 3

//task_2
var a = 2;
var x = 1 + (a *= 2); // x = 5

// task_3
let a = -3;
let b = -5;

if (a >= 0 && b >= 0)
    console.log(a - b);

else if (a < 0 && b < 0)
    console.log(a * b);

else console.log(a + b);

//task_4
a = prompt('Введите число от 0 до 15: ');

switch (a) {
    case '0':
        console.log('0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
        break;
    case '1':
        console.log('1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
        break;
    case '2':
        console.log('2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
        break;
    case '3':
        console.log('3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
        break;
    case '4':
        console.log('4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
        break;
    case '5':
        console.log('5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
        break;
    case '6':
        console.log('6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
        break;
    case '7':
        console.log('7, 8, 9, 10, 11, 12, 13, 14, 15');
        break;
    case '8':
        console.log('8, 9, 10, 11, 12, 13, 14, 15');
        break;
    case '9':
        console.log('9, 10, 11, 12, 13, 14, 15');
        break;
    case '10':
        console.log('10, 11, 12, 13, 14, 15');
        break;
    case '11':
        console.log('11, 12, 13, 14, 15');
        break;
    case '12':
        console.log('12, 13, 14, 15');
        break;
    case '13':
        console.log('13, 14, 15');
        break;
    case '14':
        console.log('14, 15');
        break;
    case '15':
        console.log('15');
        break;
}

//task_5
function summ(a, b) {
    return a + b
}

function minus(a, b) {
    return a - b
}

function multiplication(a, b) {
    return a * b
}

function division(a, b) {
    return a / b
}

//task_6
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            return summ(arg1, arg2);
        case '-':
            return minus(arg1, arg2);
        case '*':
            return multiplication(arg1, arg2);
        case '/':
            return division(arg1, arg2);
    }
}

console.log(mathOperation(5, 3, '*')) // 15

//task_8
function power(val, pow) {
    if (pow == 0) return 1;

    result = val * power(val, pow - 1);
    return result;
}

console.log(power(5, 3)) // 125

