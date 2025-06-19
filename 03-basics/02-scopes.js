// var c = 300   we doesnt talk about var bcos it gives value outside the scope but it doesnt aloow...
 

let a = 300

if(true){
    let a  = 10
    const b = 20
     //  c = 30
    //  console.log("inner:",a);
}
//    console.log(a); 
// console.log(b);
// console.log(c);


function one(){
    const username = "kashish"

    function two(){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);
    two()
}
one()


if (true){
     const username =  "kashish"
    if(username === "kashish") {
           const  website = " youtube"
            //  console.log(username+website)
    }
    // console.log(website)
}
// console.log(username);


//++++++++++++interesting+++++++++++++++++++++

// console.log(addone(18))    //access
// function addone(num){
//     return num+1
// }
//  addone(18)     //access

addtwo(18)    //cant access
const addtwo = function(num){
    return num+2
}

addtwo(18)     //aceess





// **************remember*********************************

// the things we written in if is known as block scope 
// and outside the if is known as global scope 


// {}this ; is same in object and scope  but object {} gave object execution or declaration
// // and {}(this)if we use in if or function then it is known as scope for that particular program.. 

// {}( curly braces is known as scope in almost all program)


// the things (anything) we writtewn in global scope is available in block scope
// but the thing we wriiten in block scope they doesnt go outside ....


// window or browser me jb hm console krte h toh vha ka global scope diff h 
// and jb hm code environment me node ke through example ko run krte h toh global scope alg h.. 

