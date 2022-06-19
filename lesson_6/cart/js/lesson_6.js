const cart = {
  purchases: [],

  countItemsPrice() {
    return this.purchases.reduce((sum, item) => sum + item.price, 0);
  },

  amountItems() {
    return this.purchases.length;
  },

  summary() {
    const check = document.querySelector(".check");
    if (this.amountItems() === 0) {
      check.textContent = "Корзина пуста";
    } else if (this.amountItems() < 16) {
      check.textContent = `Было куплено ${cart.amountItems()} вещи(ей) на сумму ${cart.countItemsPrice()} рублей(я).`;
    } else if (this.amountItems() === 16) {
      check.textContent = `Корзина заполнена. Было куплено ${cart.amountItems()} вещи(ей) на сумму ${cart.countItemsPrice()} рублей(я).`;
    } else {
      return 0;
    }
    document.body.appendChild(check);
  },
};

const catalog = {
  cart,
  items: [
    {
      id: 0,
      name: "Black cat",
      price: 10,
      url: "./img/black_cat.png",
    },
    {
      id: 1,
      name: "White cat",
      price: 20,
      url: "./img/white_cat.png",
    },
    {
      id: 2,
      name: "Red cat",
      price: 15,
      url: "./img/red_cat.png",
    },
  ],

  clicker() {
    if (this.dataset.id === "0") {
      cart.purchases.push({
        id: 1,
        name: "Black cat",
        price: 10,
        url: "./img/black_cat.png",
      });
      if (cart.summary() == 0) {
        return false;
      } else {
        cart.summary();
        let check = document.querySelector(".cart");
        let itemPurchased = document.createElement("img");
        itemPurchased.src = "./img/black_cat.png";
        itemPurchased.classList.add("img");
        check.appendChild(itemPurchased);
      }
    } else if (this.dataset.id === "1") {
      cart.purchases.push({
        id: 2,
        name: "White cat",
        price: 20,
        url: "./img/white_cat.png",
      });
      if (cart.summary() == 0) {
        return 0;
      } else {
        cart.summary();
        let check = document.querySelector(".cart");
        let itemPurchased = document.createElement("img");
        itemPurchased.src = "./img/white_cat.png";
        itemPurchased.classList.add("img");
        check.appendChild(itemPurchased);
      }
    } else {
      cart.purchases.push({
        id: 3,
        name: "Red cat",
        price: 15,
        url: "./img/red_cat.png",
      });
      if (cart.summary() == 0) {
        return 0;
      } else {
        cart.summary();
        let check = document.querySelector(".cart");
        let itemPurchased = document.createElement("img");
        itemPurchased.src = "./img/red_cat.png";
        itemPurchased.classList.add("img");
        check.appendChild(itemPurchased);
      }
    }
  },

  summary() {
    const catalogWrapper = document.querySelector(".catalog");
    const catalogElement = document.createElement("div");
    catalogElement.classList.add("catalogElement");
    this.items.forEach((item) => {
      const purchasedElement = document.createElement("div");
      purchasedElement.classList.add("purchasedElement");

      const headerElementWrapper = document.createElement("div");
      headerElementWrapper.classList.add("headerElementWrapper");
      const headerElement = document.createElement("img");
      headerElement.src = item.url;
      headerElement.classList.add("img");
      headerElementWrapper.appendChild(headerElement);
      purchasedElement.appendChild(headerElementWrapper);

      const priceElementWrapper = document.createElement("div");
      priceElementWrapper.classList.add("priceElementWrapper");
      const priceElement = document.createElement("p");
      priceElement.innerHTML = item.price + "р" + "<br>";
      priceElementWrapper.appendChild(priceElement);
      purchasedElement.appendChild(priceElementWrapper);

      const buttonElementWrapper = document.createElement("div");
      buttonElementWrapper.classList.add("buttonElementWrapper");
      const buttonElement = document.createElement("button");
      buttonElement.innerHTML = "<span>Купить</span>";
      buttonElement.dataset.id = item.id;
      buttonElement.addEventListener("click", this.clicker);
      buttonElementWrapper.appendChild(buttonElement);
      purchasedElement.appendChild(buttonElementWrapper);

      catalogElement.appendChild(purchasedElement);
    });

    catalogWrapper.appendChild(catalogElement);
  },
};

cart.summary();
catalog.summary();
