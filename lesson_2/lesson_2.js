// Первое задание

var a = 1, b = 1, c, d;
c = ++a; alert(c); // 2 - потому что инкремент увеличивает переменную а на 1, а потом присваивает ее значение с
d = b++; alert(d); // 1 - потому что сначала переменной d присваивается значение, а потом инкремент увеличивает значение переменной b
c = (2+ ++a); alert(c); // 5 - инкремент увеличивает значение переменной а, а потом оператор сложения складывает два числа и присваивает с
d = (2+ b++); alert(d); // 4 - тут сначала произвоидится сложение, потом присвоение, а потом уже инкремент
alert(a); // 3 переменная а инкрементировалась два раза
alert(b); // 3 переменна b инкрементировалась тоже два раза 

// Второе задание

var a = 2;
var x = 1 + (a *= 2); // x будет равен 5

// Третье задание 

let a = 3;
let b = -2;

if (a >= 0 && b >= 0) {
	console.log(a - b);
}
else if (a < 0 && b < 0) {
	console.log(a * b);
}
else {
	console.log(a + b);
}

// Четвертое задание 

let a = 7;

switch(a) {
	case 1:
		console.log(a);
		break;
	case 2:
		console.log(a);
		break;
	case 3:
		console.log(a);
		break;
	case 4:
		console.log(a);
		break;
	case 5:
		console.log(a);
		break;
	case 6:
		console.log(a);
		break;
	case 7:
		console.log(a);
		break;
	case 8:
		console.log(a);
		break;
	case 9:
		console.log(a);
		break;
	case 10:
		console.log(a);
		break;
	case 11:
		console.log(a);
		break;
	case 12:
		console.log(a);
		break;
	case 13:
		console.log(a);
		break;
	case 14:
		console.log(a);
		break;
	case 15:
		console.log(a);
		break;
}

// Пятое задание 

function addition(a, b) {
	return a + b;
}

function subtraction(a, b) {
	return a - b;
}

function multiplication(a, b) {
	return a * b;
}

function division(a, b) {
	return a / b;
}

// Шестое задание

function mathOperation(arg1, arg2, operation) {
	switch (operation) {
		case addition:
			return addition(arg1, arg2)
		case subtraction:
			return subtraction(arg1, arg2)
		case multiplication:
			return multiplication(arg1, arg2)
		case division:
			return division(arg1, arg2)
	}
}

mathOperation(3, 5, multiplication)

// Седьмое задание

console.log( null == 0 ) // false, потому что null равен только undefined и не равен ничему другому
console.log( null === 0 ) // false, потому что разные типы данных

// Восьмое задание 

function power(val, pow) {
	if (pow === 0) {
			return 1;
	}
	else {
			return val * power(val, pow - 1);
	}
}

power(3, 3);

