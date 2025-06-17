 //array 

const myArr = [1,2,3,4,5,6] 
const myHeros = ["shaktiman","Nagraj"]

const myArr2 = new Array(1,2,3,4)


// console.log(myArr[3]);

//Array methods

// myArr.push(7)
// myArr.pop()


// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.indexOf(5));

//  const newArr = myArr.join()


// console.log(myArr);
// console.log(typeof newArr)

//Slice,Splice...

// console.log("A " ,myArr);

// const myn1 = myArr.slice(1,4)

// console.log(myn1)
// console.log("B" ,myArr);

// const myn2 = myArr.splice(1,4)
// console.log(myn2);
// console.log("c " ,myArr);

const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][0]);
//  const allheros =  marvel_heros.concat(dc_heros)
// console.log(allheros);
const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,8,[9,6,5,[3,4]],8]
// const real_another_array = another_array.flat(Infinity)
// console.log(another_array.flat(Infinity));

// console.log(Array.isArray("kashish"));
// console.log(Array.from("kashish"));
// console.log(Array.from({name:"kashish"}));//interesting
 let score1 = 100
 let score2 = 200
 let score3 = 300

 console.log(Array.of(score1,score2,score3));