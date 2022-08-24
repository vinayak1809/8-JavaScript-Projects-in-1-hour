// const listen = e.target;
const store = [];

const item = document.getElementById("item");
const price = document.getElementById("price");
const quantity = document.getElementById("quantity");
const total = document.getElementById("total");

var purchase_price = 0;

function addtocart(event) {
  const find = event.target.id;

  var say = true;
  for (i = 0; i < store.length; i++) {
    if (store[i] == find) {
      say = false;
    } else {
      say = true;
    }
  }

  if (say == false) {
    alert("This item is already added to cart");
    return;
  }
  store.push(find);

  const take = document.getElementById(find);

  const image = document.createElement("img");
  image.setAttribute("src", take.children[1].src);
  item.appendChild(image);

  const cart_price = document.createElement("p");
  cart_price.innerHTML = take.children[2].children[0].innerHTML;
  price.appendChild(cart_price);

  const inner_quant = document.createElement("div");
  inner_quant.setAttribute("class", "inner-quant");

  const cart_quantity = document.createElement("p");
  cart_quantity.innerHTML = 1;
  const cart_quan_btn = document.createElement("button");
  cart_quan_btn.innerHTML = "X";

  inner_quant.appendChild(cart_quantity);
  inner_quant.appendChild(cart_quan_btn);

  quantity.appendChild(inner_quant);

  document.getElementById("no._of_items").innerHTML = store.length;
  const notify = document.getElementById("notification");
  notify.innerHTML = `Your Product: ${take.children[0].innerHTML} is added to cart`;
  notify.style.setProperty("display", "flex");

  setTimeout(notification, 2000);
}

function checkTheCart(id) {}

function notification() {
  const notify = document.getElementById("notification");
  notify.style.setProperty("display", "none");
}

function showCart() {
  const show = document.querySelector(".cart-section");
  show.style.setProperty("display", "block");
}

function closeCart() {
  const show = document.querySelector(".cart-section");
  show.style.setProperty("display", "none");
}
