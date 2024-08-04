const marvel_hero=["thor" ,"spiderman" ,"ironman"]

const dc_heros=["superman" ,"flash" ,"batman" ]

// marvel_hero.push(dc_heros)

// console.log(marvel_hero);
// console.log(marvel_hero[3][1]);

//  const allHero =marvel_hero.concat(dc_heros)
// console.log(allHero);

const all_new_hero =[...marvel_hero,...dc_heros]
console.log(all_new_hero);

let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(score1,score2,score3));
// 1. push() method in array simply add the array as an new single entity in the existing array.
// 2. concat() method help us achieving a desisered output, like merging the two array, but the problems with concat are,
//  It complicated to concat more then one array simultaneously and also It takes extra space and do the merging operation.
// 3. Despite push and concat we should use spread operator.
// 4. Intresting methods, isArray(), from() and of()





