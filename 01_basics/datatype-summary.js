//primitive 

// 7types:string number boolean null undefined symbol
//  const score= false;
//  const scoreValue =10.3

//  let userEmail;
//  console.log(typeof userEmail);
//referenece(non primitive)
//array objects functions 


// const heros=["shaktiman" ,"naagraj" ,"doga"];
// let myObj ={
//     name:"hitesh",
//     age:22,
// } 
// const myFunction =function(){
//     console.log("hello world");
// }

// console.log(typeof myFunction );
// There are mainly 2 types of datatypes :
// 1. Primitive ( call by value = copy version ):
// - string =>  string 
// - number => number
// - Boolean => boolean
// - null => object
// - undefined => undefined 
// - symbol => symbol
// - Bigint  => Bigint

// 2. Non-Primitive ( reference type ):
// - Array => object 
// - Object => object
// - Function => Object Function

// 3. JavaScript is "Dynamically typed language" 
// because all type checks are being performed during Runtime 

// +++++++++++++++++++++++++++++++++++++++++++////
//stack(primitive)
// heap (non-primitive)

let myname="gurubas"
 
let myNickname=myname
Nickname="gaurav"
console.log(myname);
console.log(Nickname);


let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}
let userTwo =userOne

userTwo.email ="gaurav@google.com"
console.log(userOne.email);
console.log(userOne.email);

// *** notes ***

//as heap gets same reference
// Primitive Types:
// 1. Stored in stack.
// 2. Passed or assigned by value (call by value).
// 3. Changes to copies don't affect the original.

// Reference Types:
// 1. Stored in heap; accessed via references (stored in stack).
// 2. Changing the value through another reference affects the original.