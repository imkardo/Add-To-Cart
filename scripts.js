let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector(".list");
let cardList = document.querySelector(".listCard");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");

openShopping.addEventListener("click", () => {
  body.classList.add("active");
});
closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});

let products = [
  {
    id: 0,
    name: "PRODUCT NAME 1",
    image: "image/1.PNG",
    price: 620000,
  },
  {
    id: 1,
    name: "PRODUCT NAME 2",
    image: "image/2.PNG",
    price: 120000,
  },
  {
    id: 2,
    name: "PRODUCT NAME 3",
    image: "image/3.PNG",
    price: 220000,
  },
  {
    id: 3,
    name: "PRODUCT NAME 4",
    image: "image/4.PNG",
    price: 320000,
  },
  {
    id: 4,
    name: "PRODUCT NAME 5",
    image: "image/5.PNG",
    price: 420000,
  },
  {
    id: 5,
    name: "PRODUCT NAME 6",
    image: "image/6.PNG",
    price: 520000,
  },
];

let listCards = [];
function initApp() {
  for (let i = 0; i < products.length; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    let orgnizedNumbers = products[i].price.toLocaleString();
    newDiv.innerHTML +=
      ` 
        <img src='` +
      products[i].image +
      `'/>
        <div class='title'>` +
      products[i].name +
      `</div>
        <div class='price'> ` +
      orgnizedNumbers +
      `</div>
        <button class='button' onclick='addToCart(` +
      products[i].id +
      `)' id='` +
      products[i].id +
      `'>Add To Cart</button>
        `;
    list.appendChild(newDiv);
  }
}
initApp();

function addToCart(id) {
  let itemId = listCards.some(function (item) {
    return item.id == id;
  });

  if (itemId) {
    changeNumberOfUnits('plus', id);
  } else {
    let newObj = products.find(function (p) {
      return p.id == id;
    });
    newObj.numberOfUnits = 1;
    listCards.push(newObj);
  }

  // console.log(listCards)
  renderCardItems();
}

function renderCardItems() {
  cardList.innerHTML = '';
  for (let i = 0; i < listCards.length; i++) {
    let newLi = document.createElement('li');
    newLi.innerHTML += `
  <div><img src='`+ listCards[i].image + `' > </div>
  <div>`+ listCards[i].name + `</div>
  <div>` + listCards[i].price.toLocaleString() + `</div>
  <!-- <div>quantity</div>-->
  <div>
  <button onclick="changeNumberOfUnits('plus', ` + listCards[i].id + `)"><i class="fa-solid fa-plus"></i></button>
<div class='count'>`+ listCards[i].numberOfUnits + `</div>
  <button onclick="changeNumberOfUnits('minus', ` + listCards[i].id + `)"><i class="fa-solid fa-minus"></i></button>
  </div>
    `
    cardList.appendChild(newLi);
  }
}
function changeNumberOfUnits(action, id) {
  // console.log(action + ' - ' + id)
  let listCard = listCards.map(function (item) {
    let oldNumberOfUnits = item.numberOfUnits;
    if (item.id == id) {
      if (action == 'plus') {
        oldNumberOfUnits++;
      } else if (action == 'minus' && oldNumberOfUnits > 1) {
        oldNumberOfUnits--;
      }
    }
    item.numberOfUnits = oldNumberOfUnits;
    return item;
  });
  // console.log(listCard);
  renderCardItems();
}
