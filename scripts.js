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
    id: 1,
    name: "PRODUCT NAME 1",
    image: "image/1.PNG",
    price: 120000,
  },
  {
    id: 2,
    name: "PRODUCT NAME 1",
    image: "image/2.PNG",
    price: 220000,
  },
  {
    id: 3,
    name: "PRODUCT NAME 1",
    image: "image/3.PNG",
    price: 320000,
  },
  {
    id: 4,
    name: "PRODUCT NAME 1",
    image: "image/4.PNG",
    price: 420000,
  },
  {
    id: 5,
    name: "PRODUCT NAME 1",
    image: "image/5.PNG",
    price: 520000,
  },
  {
    id: 6,
    name: "PRODUCT NAME 1",
    image: "image/6.PNG",
    price: 620000,
  },
];
 
let listCards = [];
function initApp(){
    for(let i = 0; i < products.length; i++){
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = ` 
        <img src='`+ products[i].image +`'/>
        <div class='title'>`+ products[i].name +`</div>
        <div class='price'> `+ products[i].price +`</div>
        <button id='` + products[i].id + `'>Add To Cart</button>
        `
        
        list.appendChild(newDiv)
    }
    
}
initApp();
