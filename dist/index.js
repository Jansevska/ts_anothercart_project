"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
let uuid = (0, uuid_1.v4)();
console.log(uuid);
// create new User
function createUser(name, age) {
    // create new User object
    const newUser = {
        id: (0, uuid_1.v4)(),
        name: name,
        age: age,
        cart: []
    };
    return newUser;
}
const newUser1 = createUser("Alice", 30);
// console.log(newUser1);
// create new Item
function createItem(name, price, description) {
    const newItem = {
        id: (0, uuid_1.v4)(),
        name: name,
        price: price,
        description: description
    };
    return newItem;
}
const newItem1 = createItem("pen", 2.00, "black pilot G-2");
// console.log(newItem1);
const newItem2 = createItem("notebook", 8.00, "100 pages spiral");
// console.log(newItem2);
const newItem3 = createItem("Post-It", 7.00, "small mixed colors");
// console.log(newItem3)
// Add to Cart
function addToCart(user, item) {
    user.cart.push(item);
}
// Remove from Cart
function removeFromCart(user, itemToRemove) {
    user.cart = user.cart.filter(item => item.id != itemToRemove.id);
}
// Remove from Cart
// function removeFromCartQty(user:User, item:Item, qty:number){
//     let i=0
//     while (i<qty){
//         user.cart.splice(user.cart.findIndex((i)=>i.id == item.id), 1)
//         i++
//     }
// }
function removeFromCartQty(user, itemToRemove, qty) {
    for (let i = 0; i < qty; i++) {
        let idx = user.cart.findIndex(item => item.id === itemToRemove.id);
        user.cart.splice(idx, 1);
    }
}
;
// cart Total
function cartTotal(user) {
    let total = 0;
    for (let item of user.cart) {
        total += item.price;
    }
    return total;
}
// print Cart
function printCart(user) {
    console.log(`${user.name}'s Cart:`);
    for (let item of user.cart) {
        console.log(`${item.name} : $${item.price}`);
    }
    return (`Total : $ ${cartTotal(user)}`);
}
addToCart(newUser1, newItem1);
// console.log(newUser1.cart);
addToCart(newUser1, newItem2);
addToCart(newUser1, newItem2);
addToCart(newUser1, newItem2);
// console.log(newUser1.cart)
cartTotal(newUser1);
printCart(newUser1);
addToCart(newUser1, newItem3);
addToCart(newUser1, newItem3);
addToCart(newUser1, newItem3);
cartTotal(newUser1);
printCart(newUser1);
removeFromCart(newUser1, newItem1);
printCart(newUser1);
removeFromCartQty(newUser1, newItem3, 2);
printCart(newUser1);
console.log(printCart(newUser1));
