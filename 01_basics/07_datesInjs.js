let myDate =new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);  //object

let mycreatedDate =new Date("08-03-2024")
console.log(mycreatedDate.toDateString());
console.log(myDate.toLocaleString());

let myTimestamp = Date.now()

console.log(myTimestamp);
console.log(mycreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));


let newDate =new Date()
console.log(newDate);

newDate.toLocaleString('default',{
    weekday:"long",
    
})



