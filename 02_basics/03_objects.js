//singleton 
// object literals

const mySmb =Symbol("key1")
const jsUser ={
    name:"Gurubas",
    age: 21,
    location:"Degloor",
    [mySmb]: "mykey1",
    email:"guru@123",
    isLoggedIn:false,
    lastLoginDays:["monday" ,"saturday"]
}
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser[mySmb]);
// for symbol dont use double Quotes for accessing

jsUser.email="gurumaka@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email="gmy@24.com"

// console.log(jsUser);

jsUser.greeting=function (){
    console.log("helllo JS user");
}
console.log(jsUser.greeting());

jsUser.greetingTwo=function (){
    console.log(`helllo JS user ,${this.name}`);
}
console.log(jsUser.greetingTwo());





