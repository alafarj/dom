let openShopping = document.querySelector('.shopping'); // Get the element with class 'shopping'
let closeShopping = document.querySelector('.closeShopping'); // Get the element with class 'closeShopping'
let list = document.querySelector('.list'); // Get the element with class 'list'
let listCard = document.querySelector('.listCard'); // Get the element with class 'listCard'
let body = document.querySelector('body'); // Get the 'body' element
let total = document.querySelector('.total'); // Get the element with class 'total'
let quantity = document.querySelector('.quantity'); // Get the element with class 'quantity'

// Event listener for opening the shopping cart
openShopping.addEventListener('click', () => {
    body.classList.add('active'); // Add 'active' class to the body
});

// Event listener for closing the shopping cart
closeShopping.addEventListener('click', () => {
    body.classList.remove('active'); // Remove 'active' class from the body
});


// Array of product objects
let products = [
    {
        id: 1,
        name: 'product name 1',
        image: 'image1.png',
        price: 25
    },
    // ... (more product objects)

    {
        id:2,
        name:'product name 2',
        image:'image2.png',
        price: 65
    },
    
    {
        id:3,
        name:'product name 3',
        image:'image3.png',
        price: 30
    },

    {
        id:4,
        name:'product name 4',
        image:'image4.png',
        price: 100
    },

    {
        id:5,
        name:'product name 5',
        image:'image5.png',
        price: 45
    },

    {
        id:6,
        name:'product name 6',
        image:'image6.png',
        price: 110
    },
];
let listCards = [];

// Function to initialize the application
function initApp() {
    // Loop through each product and create a display element for it
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="img/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    });
}

// Initialize the application
initApp();

// Function to add a product to the cart
function addToCard(key) {
    if (listCards[key] == null) {
        // Copy product from the list to the cart and set quantity to 1
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    // Update the cart display
    reloadCard();
}

// Function to reload the cart display
function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;

    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="img/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
            listCard.appendChild(newDiv);
        }
    });

    // Update the total price and quantity displayed
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

// Function to change the quantity of a product in the cart
function changeQuantity(key, quantity) {
    if (quantity == 0) {
        delete listCards[key]; // Remove the product from the cart if quantity becomes 0
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    // Update the cart display
    reloadCard();
}