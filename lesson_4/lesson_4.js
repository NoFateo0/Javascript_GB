// Первое задание

function numberToObject (number) {
	let voidObject = {};
	
	if (isNaN(number)) {
		console.log('Нужно ввести число!');
		return voidObject;
	} else if (number % 1 != 0) {
		console.log('Вы ввели не целое число');
		return voidObject;
	} else if (number > 999 || number < 0) {
		console.log('Вы ввели число вне разрешенного диапазона!');
		return voidObject;
	} else {
		let hundreds = Math.trunc(number / 100);
		let tens = Math.trunc((number - hundreds * 100) / 10);
		let ones = number - hundreds * 100 - tens * 10;
		let myObject = {
			'ones': ones,
			'tens': tens,
			'hundreds': hundreds,
		};

		return myObject;
	}
}
let number = +prompt('Введите целое число от 0 до 999');

console.log(numberToObject(number));

// Второе задание

function newItemsArr() {
	let items = [];

	while(true) {
		let item = prompt("Название: ");

		if (item === null) {
			break;
		}

		let price = parseFloat(prompt("Цена: "));

		if (isNaN(price)) {
			break;
		} 
		else {
			items.push({item:item, price:price});
		}
	}

	return items;
}

const cart = {
	purchases: newItemsArr(),
	countItemsPrice() {
		let sum = 0;

		for (i = 0; i < this.purchases.length; i++) {
			sum = sum + this.purchases[i].price;
		}

		return sum;
	},
	amountItems() {
		return this.purchases.length;
	},
}

console.log(`Было куплено ${cart.amountItems()} вещи(ей) на сумму ${cart.countItemsPrice()} рублей.`)