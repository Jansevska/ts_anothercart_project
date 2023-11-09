import { v4 as uuidv4 } from "uuid";

let uuid= uuidv4()
console.log(uuid)


type Item = {
    id: string,
    name: string,
    price: number,
    description: string
}

type User = {
    id:string,
    name:string,
    age:number,
    cart:Item[]
}

function getuuid()
{
return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, fun =>
(fun ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> fun / 4).toString(16)
);
}
console.log('The UUID generated using the standard function is', getuuid());


// function createUser<T, V(name:string T, age:number V): T {
//     // logic goes here ..
//     }

// create new User
import function createUser(name: string, age: number): User {
    // generate a uuid for the id
    const generatedId: string = getuuid();
    // create new User object
    const newUser: User = {
        id:generatedId,
        name:name,
        age:age,
        cart: []
    };

    return newUser;
}

import { createUser } from "./user-js-doc.js";

const user1 = createUser('Bob', 68)
console.log(user1);

// create new Item
function createItem(name:string, price:number): Item {

    const generatedId:string = getuuid();

    const newItem: Item = {
        id:generatedId,
        name:name,
        price:price,
        description:description
    }

    return newItem;
}

const item1 = createItem({name:'pen', price:2.00, description:'black pen'});
const item2 = createItem({name:'pencil', price:1.00, description:'colorful pencil'});
const item3 = createItem({name:'notebook', price:8.00, description:'100 pages notebook'});


function removeQuantityFromCart(user:User, item:Item, qty:number){
    let i=0
    while (i<qty){
        user.cart.splice(user.cart.findIndex((i)=>i.id == item.id), 1)
        i++
    }
}

function cartTotal(user:User){
    let total=0;
    for (let item of user.cart){
        total+=item.price
    }
    return total
}

function printCart(user:User){
    for (let item of user.cart){
        console.log(item.name)
    }
}


