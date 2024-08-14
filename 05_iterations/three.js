//for of
// const arr =[1,2,3,4,5]

// for (const value of arr) {

//     console.log(value);
    
// }
// const greetings ='hello world'
// for (const greet of greetings) {
//     console.log(`each char is ${greet}`);
    
// }

//maps
// The Map object holds key-value pairs and remembers
// the original insertion order of the keys.
//  Any value (both objects and primitive values) 
// may be used as either a key or a value.
const map =new Map()
map.set('in','INDIA')
map.set('en','great britan')

console.log(map);
for (const [key,value] of map) {
    console.log(key);
    
}
