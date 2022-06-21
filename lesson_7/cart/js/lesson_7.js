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
        itemPurchased.classList.add("img", "black");
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
        itemPurchased.classList.add("img", "white");
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
        itemPurchased.classList.add("img", "red");
        check.appendChild(itemPurchased);
      }
    }
  },

  deleter() {
    if (this.dataset.id === "0") {
      if (cart.summary() == 0) {
        return 0;
      } else {
        let div = document.querySelector(".black");
        if (div == null) {
          return 0;
        }
        let itemDel = cart.purchases.findIndex((object) => {
          return object.id === 1;
        });
        cart.purchases.splice(itemDel, 1);
        div.remove();
        cart.summary();
      }
    } else if (this.dataset.id === "1") {
      if (cart.summary() == 0) {
        return 0;
      } else {
        let div = document.querySelector(".white");
        if (div == null) {
          return 0;
        }
        let itemDel = cart.purchases.findIndex((object) => {
          return object.id === 2;
        });
        cart.purchases.splice(itemDel, 1);
        div.remove();
        cart.summary();
      }
    } else {
      if (cart.summary() == 0) {
        return 0;
      } else {
        let div = document.querySelector(".red");
        if (div == null) {
          return 0;
        }
        let itemDel = cart.purchases.findIndex((object) => {
          return object.id === 3;
        });
        cart.purchases.splice(itemDel, 1);
        div.remove();
        cart.summary();
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

      const buttonAddElementWrapper = document.createElement("div");
      buttonAddElementWrapper.classList.add("buttonAddElementWrapper");
      const buttonAddElement = document.createElement("button");
      buttonAddElement.innerHTML = "<span>Добавить</span>";
      buttonAddElement.dataset.id = item.id;
      buttonAddElement.addEventListener("click", this.clicker);
      buttonAddElementWrapper.appendChild(buttonAddElement);
      purchasedElement.appendChild(buttonAddElementWrapper);

      const buttonDelElementWrapper = document.createElement("div");
      buttonDelElementWrapper.classList.add("buttonDelElementWrapper");
      const buttonDelElement = document.createElement("button");
      buttonDelElement.innerHTML = "<span>Убрать</span>";
      buttonDelElement.dataset.id = item.id;
      buttonDelElement.addEventListener("click", this.deleter);
      buttonDelElementWrapper.appendChild(buttonDelElement);
      purchasedElement.appendChild(buttonDelElementWrapper);

      catalogElement.appendChild(purchasedElement);
    });

    catalogWrapper.appendChild(catalogElement);
  },

  resetButton() {
    const reset = document.querySelector(".reset");
    reset.textContent = "Очистить";
    reset.classList.add("text2");
    reset.addEventListener("click", () => {
      cart.purchases.splice(0);
      document.querySelector(".cart").innerHTML = "";
      cart.summary();
    });
  },

  nextButton() {
    const next = document.querySelector(".next");
    const cata = document.querySelectorAll(".hideShowElement");
    next.textContent = "Продолжить";
    next.classList.add("text2");
    next.addEventListener("click", () => {
      let style1 = getComputedStyle(cata[0]);
      let visibility1 = style1.visibility;
      let style2 = getComputedStyle(cata[1]);
      let visibility2 = style2.visibility;
      if (visibility1 === "visible") {
        cata[1].style.visibility = "visible";
        cata[0].style.visibility = "hidden";
        cata[2].style.visibility = "hidden";
      } else if (visibility2 === "visible") {
        cata[1].style.visibility = "hidden";
        cata[0].style.visibility = "hidden";
        cata[2].style.visibility = "visible";
      } else {
				cata[1].style.visibility = "hidden";
        cata[0].style.visibility = "visible";
        cata[2].style.visibility = "hidden";
			}
    });
  },
};

cart.summary();
catalog.summary();
catalog.resetButton();
catalog.nextButton();
