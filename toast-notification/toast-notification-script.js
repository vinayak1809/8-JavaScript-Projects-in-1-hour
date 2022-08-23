btn = document.getElementById("btn");
container = document.getElementById("container");

btn.addEventListener("click", () => {
  createNotification();
});

function createNotification() {
  const new_ele = document.createElement("div");
  new_ele.innerText = "hello Peter!";
  new_ele.classList.add("toast");
  container.appendChild(new_ele);

  setTimeout(() => {
    new_ele.remove();
  }, 2000);
}

console.log("hello");
