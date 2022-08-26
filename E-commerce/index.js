const store = [];

const item = document.getElementById("item");
const price = document.getElementById("price");
const quantity = document.getElementById("quantity");
const total = document.getElementById("total");

var total_price = 0;

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

  const div = document.createElement("div");

  const image = document.createElement("img");
  image.setAttribute("src", take.children[1].src);

  const h3 = document.createElement("h3");
  h3.innerHTML = take.children[0].innerHTML;

  const p = document.createElement("p");
  p.innerHTML = take.children[2].children[0].innerHTML;

  const a = take.children[2].children[0].innerHTML;
  const b = Number(a.slice(1, a.length));

  total_price += b;
  total.innerHTML = `$${total_price}`;
  console.log(purchase_price);

  div.appendChild(image);
  div.appendChild(h3);
  div.appendChild(p);

  quantity.appendChild(div);

  const notify = document.getElementById("notification");
  notify.innerHTML = `Your Product: ${take.children[0].innerHTML} is added to cart`;
  notify.style.setProperty("display", "flex");

  setTimeout(notification, 2000);

  call();
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

// image-carousel
function call() {
  const carouselImages = document.querySelector(".carousel__images");
  const images = document.querySelectorAll(".carousel__images img");
  const carouselButtons = document.querySelectorAll(".carousel__button");
  const numberOfImages = document.querySelectorAll(
    ".carousel__images img"
  ).length;
  let imageIndex = 1;
  let translateX = 0;

  carouselButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      if (event.target.id === "previous") {
        if (imageIndex !== 1) {
          imageIndex--;
          translateX += 300;
        }
      } else {
        if (imageIndex !== numberOfImages) {
          imageIndex++;
          translateX -= 300;
        }
      }

      carouselImages.style.transform = `translateX(${translateX}px)`;
      images.forEach((image, index) => {
        if (index === imageIndex - 1) {
          image.classList.add("active");
        } else {
          image.classList.remove("active");
        }
      });
    });
  });
}
call();

const items = document.getElementById("items");

window.addEventListener("DOMContentLoaded", () => {
  axios
    .get("http://localhost:2000/products")
    .then((data) => {
      console.log(data.data);

      data.data.forEach((item) => {
        const div = document.createElement("div");
        div.innerHTML = `<div class="album album-4" id="album-4">
        <h5>${item.title}</h5>
        <img src="${item.imageUrl}" alt="Album 4">
        <div class="price-cart">
            <p class="price">$${item.price}</p>

            <form action="http://localhost:2000/cart/${item.id}" method="POST">
            
            <button class="add-to-cart" type="submit" id="${item.id}"> Add to Cart </button></form>
        </div>
        </div>`;

        items.appendChild(div);
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
