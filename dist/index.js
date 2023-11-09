"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomUint32 = void 0;
const uuid_1 = require("uuid");
let uuid = (0, uuid_1.v4)();
console.log(uuid);
// function getuuid()
// {
// return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, fun =>
// (fun ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> fun / 4).toString(16)
// );
// }
// console.log('The UUID generated using the standard function is', getuuid());
// function uuidv4(): string {
//     return "10000000-1000-4000-8000-100000000000"
//         .replace(/[018]/g, (1) =>
//             (1 ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> 1 / 4).toString(16)
//         );
// }
// const customUUID: string = uuidv4();
// console.log("Your custom UUID is:", customUUID);
function getRandomUint32() {
    const data = new Uint32Array(1);
    crypto.getRandomValues(data);
    return `${data[0]}`;
}
exports.getRandomUint32 = getRandomUint32;
// create new User
function createUser(name, age) {
    // generate a uuid for the id
    const generatedId = getRandomUint32();
    // create new User object
    const newUser = {
        id: generatedId,
        name: name,
        age: age,
        cart: []
    };
    return newUser;
}
// import { createUser } from "./user-js-doc.js";
// create new Item
function createItem(name, price, description) {
    const itemId = getRandomUint32();
    const newItem = {
        id: itemId,
        name: name,
        price: price,
        description: description
    };
    return newItem;
}
// Add to Cart
function addToCart(user, item) {
    user.cart.push(item);
}
// // Remove from Cart
function removeFromCart(user, item) {
    user.cart.pop(item);
}
// Remove from Cart
function removeFromCartQty(user, item, qty) {
    let i = 0;
    while (i < qty) {
        user.cart.splice(user.cart.findIndex((i) => i.id == item.id), 1);
        i++;
    }
}
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
    for (let item of user.cart) {
        console.log(item.name);
    }
}
// const user1 = createUser('Bob', 68)
// console.log(user1);
const newUser1 = createUser("Alice", 30);
console.log(newUser1);
const newItem1 = createItem("pen", 2.00, "black pilot G-2");
console.log(newItem1);
const newItem2 = createItem("notebook", 8.00, "100 pages spiral");
console.log(newItem2);
const newItem3 = createItem("Post-It", 7.00, "small mixed colors");
console.log(newItem3);
// const userWithItem: User = createUser("Tim", 25);
// const itemToAdd: Item = createItem("pencils", 16.00, "36-colors pencils");
addToCart(newUser1, newItem1);
console.log(newUser1.cart);
cartTotal(newUser1);
printCart(newUser1);
addToCart(newUser1, newItem2);
addToCart(newUser1, newItem2);
addToCart(newUser1, newItem2);
console.log(newUser1.cart);
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
