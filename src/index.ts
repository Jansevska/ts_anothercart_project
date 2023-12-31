import { v4 as uuidv4 } from "uuid";

let uuid= uuidv4()
console.log(uuid)


type Items = {
    id: string,
    name: string,
    price: number,
    description: string
}

class Item {
    constructor(
        private _id: string = uuidv4(),
        private _name:string,
        private _price:number,
        private _description:string,
        ){}

    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
}

type User = {
    id:string,
    name:string,
    age:number,
    cart:Item[]
}

class User {

    constructor(
        private _id: string = uuidv4(),
        private _name:string,
        private _age:number,
        private _cart:Item[]
    ){}

    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }

    addToCart(user:User, item:Item):void {
        this.cart.push(item);
    }

    removeFromCart(user:User, itemToRemove:Item):void{
        this.cart = user.cart.filter(item => item.id != itemToRemove.id);
    }

    removeFromCartQty(user:User, itemToRemove:Item, qty:number):void{
        for (let i=0; i<qty; i++){
            let idx = user.cart.findIndex(item => item.id === itemToRemove.id);
            this.user.cart.splice(idx, 1);
        }
    }

    cartTotal(user:User){
        let total=0;
        for (let item of user.cart){
            total += item.price
        }
        return total;
    }

    printCart(user:User){
        console.log(`${user.name}'s Cart:`)
        for (let item of user.cart){
            console.log(`${item.name} : $${item.price}`)
        }
        return(`Total : $ ${cartTotal(user)}`)
    }
}

// class Shop {

//     constructor(
//         private _item1: string = 'pen',
//         private _item2: string = 'notebook',
//         private _item3: string = 'Post-it',
//     ){}

//     public get item3(): string {
//         return this._item3;
//     }
//     public set item3(value: string) {
//         this._item3 = value;
//     }
//     public get item2(): string {
//         return this._item2;
//     }
//     public set item2(value: string) {
//         this._item2 = value;
//     }
//     public get item1(): string {
//         return this._item1;
//     }
//     public set item1(value: string) {
//         this._item1 = value;
//     }
// }

class ShopI {

    constructor(
        private _items: Items[] = [],
    ){
        createItem(name:string, price:number, description:string): Item {
            const newItem: Item = {
                id:uuidv4(),
                name:name,
                price:price,
                description:description
            }
            Object.assign(newItem);
        }
    }

    public get items(): Items[] {
        return this._items;
    }
    public set items(value: Items[]) {
        this._items = value;
    }
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
    return(`Total : $ ${cartTotal(user)}`)
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