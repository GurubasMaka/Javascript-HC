// javascript strings are primitive and immutable: All string methods produce a new string
//  without altering the original string.
const name="guru"
const repoCount =50

//console.log(name+repoCount +"value"); //old way
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName =new String('gurubas-m')
console.log(gameName[0]);  //g
console.log(gameName.__proto__); //{}
console.log(gameName.toUpperCase()); //GURUBAS
console.log(gameName.charAt(2)); //r
console.log(gameName.indexOf('b')); //4
 console.log(gameName.length);  //The length property returns the length of a string:

const newString =gameName.substring(0,4) //guru
console.log(newString);

const anotherString = gameName.slice(-8,4) //uru
console.log(anotherString);

const newStringone= "   guru    "
console.log(newStringone);
console.log(newStringone.trim())  //mdn trim



// const url ="https://gurubas.com/gurubas%47maka"
// console.log(url.replace('%47','-'));

const gm="knights"
console.log(gm.charCodeAt(0)); //The charCodeAt() method returns the code of the character at a specified index in a string:
// The method returns a UTF-16 code (an integer between 0 and 65535).

let text = "Apple, Banana, Kiwi";
let part = text.slice(15, 20);
console.log(part); //slice() extracts a part of a string and returns the extracted part in a new string.
// The method takes 2 parameters: start position, and end position (end not included).
let km="jai swaminarayan \n"
console.log(km.repeat(5));

// ********************* <==> *************** //
// String length    
// String toUpperCase()
// String toLowerCase()
// String concat()
// String trim()
// String trimStart()
// String trimEnd()
// String padStart()
// String padEnd()
// String repeat()
// String replace()
// String replaceAll()
// String split()
// String charAt()
// String charCodeAt()
// String at()
// String [ ]
// String slice()
// String substring()
// String substr()
// String Search Methods
// String Templates