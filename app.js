let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard =document.querySelector('listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quality = document.querySelector('quantity');

openShopping.addEventListener ('click',()=>{
    body.classList.add('active');
})
closeShopping.addEventListener ('click',()=>{
    body.classList.remove('active');
})
let products = [
    {
        id:1,
        name:'product name 1',
        image:'1.PNG',
        price: 120000
    },

    {
        id:2,
        name:'product name 2',
        image:'2.PNG',
        price:130000
    },
    
    {
        id:3,
        name:'product name 3',
        image:'3.PNG',
        price:230000
    },

    {
        id:4,
        name:'product name 4',
        image:'4.PNG',
        price:345000
    },

    {
        id:5,
        name:'product name 5',
        image:'5.PNG',
        price:215000
    },

    {
        id:6,
        name:'product name 6',
        image:'6.PNG',
        price: 112000
    },
];
let listCards =[];
function initapp(){
    products.forEach((value,key)=>{
        let newDiv = document.createElement('div');
        newDiv.innerHTML =`
        <img src="image/${value.image}"/>
        <div class="title">${value.name}</div>
        <div class="price">${value.price.toLocaleString()}</div>
        <button onclick="addToCard(${key})">Add To Card</button>
        `
        ;
        list.appendChild(newDiv);
    })
}

