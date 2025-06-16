//Date

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());

// console.log(typeof myDate) //object

// let mycreatedDate = new Date(2025,11,25,10,3);
// let mycreatedDate = new Date("2025-12-25");
let mycreatedDate = new Date("12-25-2025");
// console.log(mycreatedDate.toLocaleString());

let myTimeStamp = Date.now()
//  console.log(myTimeStamp);
//  console.log(mycreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);

console.log(newDate.getDay());

//complex date etc print krne ke lie string interpletion
// means`${newDate.getDay()} and the time is--------..

newDate.toLocaleString('default',{
    weekday:"long"
})