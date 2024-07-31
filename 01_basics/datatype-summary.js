//primitive 

// 7types:string number boolean null undefined symbol
 const score= false;
 const scoreValue =10.3

 let userEmail;
 console.log(typeof userEmail);
//referenece(non primitive)
//array objects functions 


const heros=["shaktiman" ,"naagraj" ,"doga"];
let myObj ={
    name:"hitesh",
    age:22,
} 
const myFunction =function(){
    console.log("hello world");
}

console.log(typeof myFunction );
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