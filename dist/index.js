"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
let uuid = (0, uuid_1.v4)();
console.log(uuid);
function getuuid() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, fun => (fun ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> fun / 4).toString(16));
}
console.log('The UUID generated using the standard function is', getuuid());
// function createUser<T, V(name:string T, age:number V): T {
//     // logic goes here ..
//     }
require();
const user_js_doc_js_1 = require("./user-js-doc.js");
let newUser1 = (0, user_js_doc_js_1.createUser)("Bob", 30);
console.log(newUser1);
