 // Immediately Invoked Function Expression (IIFE) 
 // two reason to use iife!!
  
// 1) jo bhi hm likhenge  chahe vo function ho ya kuch bhi vo immediately execute ho...
//2) and global se se koi polution na ho means global scope me  variables vgera hota h vo tng na kre....

(
function chai (){
    // named iife
    console.log(`db connected`)
})();


// ( function aurcode ()  {
// named iife
//     console.log(`db connected two`)
// })();


(  (name) => {
    //unnamed iife
    console.log(`db connected two ${name}`)
})("kashish");

 





//++++++++++remember++++++++++++++++
// {() ()}first paranthesis is for function defination and second paranthesis is for execution call.
