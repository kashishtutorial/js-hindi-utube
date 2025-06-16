// primitive 

//    7 types: string,number,boolean,null,undefined,symbol,bigint

// in javascript language type(dynamic or static ) is never defined..
//  java is a dynamically type language

//forexample:
const score = 100 //datatype:number
const scorevalue = 100.3   //datatype:number

const isloogedin = false   //datatype:undefined
const outsidetemp = null    //datatype:object
let useremail;

// const bigNumber = 345678335676546456754n // datatype:undefined

//for symbol:
const id = Symbol("123") //datatype:symbol
const anotherid = Symbol("123")  //datatype: symbol


console.log(id === anotherid);   //false 

// reference (non primitive)

// array,object,functions

const heros = ["shaktiman","ngraj"," doga"];  
let myObj = {
     name:"kashish",
     age: 17,
}

const myfunction = function(){
    console.log("hello world");
}      //datatype: function

console.log(typeof myfunction);