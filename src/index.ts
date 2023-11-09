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

// create new User
function createUser(name: string, age: number): User {
    // create new User object
    const newUser: User = {
        id:uuidv4(),
        name:name,
        age:age,
        cart: []
    };
    return newUser;
}

const newUser1: User = createUser("Alice", 30);
// console.log(newUser1);

// create new Item
function createItem(name:string, price:number, description:string): Item {
    const newItem: Item = {
        id:uuidv4(),
        name:name,
        price:price,
        description:description
    }
    return newItem;
}

const newItem1: Item = createItem("pen", 2.00, "black pilot G-2");
// console.log(newItem1);
const newItem2: Item = createItem("notebook", 8.00, "100 pages spiral");
// console.log(newItem2);
const newItem3: Item = createItem("Post-It", 7.00, "small mixed colors");
// console.log(newItem3)

// Add to Cart
function addToCart(user:User, item:Item):void {
    user.cart.push(item);
}


// Remove from Cart
function removeFromCart(user:User, itemToRemove:Item):void{
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

function removeFromCartQty(user:User, itemToRemove:Item, qty:number):void{
    for (let i=0; i<qty; i++){
        let idx = user.cart.findIndex(item => item.id === itemToRemove.id);
        user.cart.splice(idx, 1);
    }
};

// cart Total
function cartTotal(user:User){
    let total=0;
    for (let item of user.cart){
        total += item.price
    }
    return total
}

// print Cart
function printCart(user:User){
    console.log(`${user.name}'s Cart:`)
    for (let item of user.cart){
        console.log(`${item.name} : $${item.price}`)
    }
    console.log(`Total : $ ${cartTotal(user)}`)
}

addToCart(newUser1, newItem1);
// console.log(newUser1.cart);

addToCart(newUser1, newItem2);
addToCart(newUser1, newItem2);
addToCart(newUser1, newItem2);
// console.log(newUser1.cart)

cartTotal(newUser1)
printCart(newUser1)

addToCart(newUser1, newItem3);
addToCart(newUser1, newItem3);
addToCart(newUser1, newItem3);

cartTotal(newUser1)
printCart(newUser1)

removeFromCart(newUser1, newItem1)
printCart(newUser1)

removeFromCartQty(newUser1, newItem3, 2)
printCart(newUser1)

console.log(printCart(newUser1))