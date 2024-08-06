// const user = {
//     username:"hitesh",
//     price:999,

//     welcomeMessage: function(){
//         console.log(`${this.username} welcome to website`);  
//         console.log(this);
        
//     }
// }
// this current context ki bate karta hai

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()
//console.log(this); //{}

// function chai(){
//     let username="gurubas"
//     console.log(this.username);
    
// }
// chai()  ===>>> undefined

// const chai =function(){
//     let username="hitesh"
//     console.log(this.username);
    
// }
// chai()

// const chai =() => {
//     let username="hitesh"
//     console.log(this);
    
// }
// chai()
const addTwo=(num1 , num2) =>{
    return num1+num2
}

// const addTwo=(num1 , num2) => num1+num2
console.log(addTwo(3,4));



