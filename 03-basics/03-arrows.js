const user = {
    username : "kashish",
    price : 999,

    welcomemessage : function(){
        console.log(`${this.username}, welcome to the Website.`);
        console.log(this);
    }
}

// user.welcomemessage()
// user.username = "sam"
// user.welcomemessage()

// console.log(this);


// function chai (){
//     let username = "kashish"
//     console.log(this.username);
// }
// chai()


// const chai = function(){
//      let username = "kashish"
//       console.log(this.username);
// }
// chai()



const chai = () => {
     let username = "kashish"
      console.log(this);
}

// chai()

//+++++++++++explicit return(jb return keywors use hua)+++++++++++++++

// const addtwo = (num1,num2) => {
//     return num1+num2

// }
// console.log(addtwo(3,28));



//+++++++++++implicit return(jo single line me hoje 0r jb return keyword use nhi kia)++++++++++++++++

// const addtwo = (num1,num2) => num1+num2

// const addtwo = (num1,num2) => num1+num2

 const addtwo = (num1,num2) => ({username : " kashish"}) // ye object return concept h..




console.log(addtwo(3,28));



// agr arrows function  me curly braces me rap kra toh return likhna pdega
//  agr simple choda ya paranthesis me wrap kia toh return nhi likhna.










// this is use for only current context or values or variables....

//whenever we only use this in console.log it gives empty set in node.js 
//  but if we use this in console.log in browser console it gives windows
// browser ek ander jo global object h vo h windows object...

// this.(dot) wala jo concept h vo jda tr object me hi 
// use hora h function me agr use krenge toh nhi hoga.... 
// but jo simple this h vo use hojaega....function me ..