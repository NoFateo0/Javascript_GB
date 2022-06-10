// Первое задание

let x = 0;

while (x <= 100) {
	console.log(x);
	x++;
}

// Третье задание

let basket = [];

while(true) {
  let item = prompt("Название: ");
	
	console.log(item);

	if (item === null) {
  	break;
  }

	let price = parseFloat(prompt("Цена: "));

  if (isNaN(price)) {
  	break;
  } 
	else {
		basket.push([item, price]);
  }
}

const countBasketPrice = function(basket) {
	let sum = 0;

	for (i = 0; i < basket.length; i++) {
			sum = sum + basket[i][1];
	}

	return sum;
}

console.log("Общая стоимость: " + countBasketPrice(basket));

// Четвертое задание

for(i = 0; i <= 9; console.log(i), i++){}

// Пятое задание

let star = '*';
let starSet = '';

for (let i = 1; i <= 20; i++) {
	starSet += star;
	console.log(starSet);
}
