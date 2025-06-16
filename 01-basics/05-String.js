const name = "kashish"
const repocount = 50

// console.log(name + repocount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repocount}`); 

const gameName = new String("kashish-ka")

// console.log(gameName[0]);

// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(6));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-9,3)
console.log(anotherString);
const newwStringOne = "     kashish    "
console.log(newwStringOne);
console.log(newwStringOne.trim());

const url = "https://kashish.com/kashish%20kataria"
console.log(url.replace('%20','-'));
console.log(url.includes('kashish'));
console.log(url.includes('sundar'));

console.log(gameName.split('-'));