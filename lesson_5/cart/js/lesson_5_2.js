const itemsInCart = {
	newItemsArr() {
		let basket = document.createElement('div');
		document.body.appendChild(basket);
		basket.classList.add('cart');

		let randomColor;
		let items = [];
		let itemPurchased;

		while(true) {
			let item = prompt("Название: ");

			if (item === null) {
				break;
			}

			if (item) {
				itemPurchased = document.createElement('div');
				itemPurchased.classList.add('itemPurchased', 'text');
				basket.appendChild(itemPurchased);
				itemPurchased.innerText = `${item}`;
				randomColor = Math.floor(Math.random()*16777215).toString(16);
				console.log(randomColor);
				itemPurchased.style.backgroundColor = "#" + randomColor;
			}

			let price = parseFloat(prompt("Цена: "));

			if (isNaN(price)) {
				break;
			}
			else {
				items.push({item:item, price:price});
			}
		}
		console.log(items);
		return items;
	}
}

const cart = {
	purchases: itemsInCart.newItemsArr(),
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
	summary() {
		if (cart.amountItems() == 0) {
			window.onload = () => alert('Корзина пуста');
		}
		else {
			window.onload = () => alert(`Было куплено ${cart.amountItems()} вещи(ей) на сумму ${cart.countItemsPrice()} рублей(я).`)
		}
	},
}

const result = {
	check: cart.summary(),
}
