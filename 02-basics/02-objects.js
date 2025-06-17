//there are two types of declaration of objects : literal ,constructor.....

//singleton(object.create): which means agr koi bhi constructor se hm
//  bnte h toh singleton ek object bnta h ye apne app me ek object h

// literal se agr kuch bnega toh singleton nhi bnega
//but;if constructor se bnega toh singleton hi bnega....

// NOTE:> in object keys are also define but in arrays keys are not define.....

//object literals...

const mySym = Symbol("key1")

const JsUser = {
    name : "kashish",
    "Full name": "kashish ka",
    [mySym]: "mykey1",
    age :17 ,
    location :  "hanumangarh",
    email : "kashish@gmail.com",
    isloggedin : false,
    Lastlogindays:["monday","saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["Full name"]);
// console.log(typeof JsUser[mySym]);

JsUser.email = "kashish@google.com"
// Object.freeze(JsUser)
JsUser.email = "kashish@chatgpt.com"
JsUser.name = "kataria"
// console.log(JsUser);


JsUser.greeting = function(){
    // console.log("hello js user");
} 
// console.log(JsUser.greeting());


JsUser.greetingtwo = function(){
    // console.log(`hello js user,${this.name},${this.age}`);
} 
// console.log(JsUser.greetingtwo()); 





//constructor(singleton)



// const TinderUser = new Object() //singleton object

const TinderUser = {} //not A singleton object
    TinderUser.id  = "123abc",
    TinderUser.name = "sammy",
    TinderUser.isloogedin = false

// console.log(TinderUser);
 const regularUser = {
    email: "some@gmail.com",
    fullname: {
        username: {
            firstname: "kashish",
            lastname: "kataria"
        }
    }
 }
//  console.log(regularUser.fullname.username.firstname);

const obj1 = {1:"a" , 2: "b" }
const obj2 = {3:"a" , 4: "b" }
const obj4 = {5:"a" , 6: "b" }

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 = {...obj1,...obj2}
// console.log(obj3);

const Users = [
{
        id : 1,
        email: "k@gmail.com",
    },
    {
        id : 1,
        email: "k@gmail.com",
    },
    {
        id : 1,
        email: "k@gmail.com",
    },
    {
        id : 1,
        email: "k@gmail.com",
    },
]
Users[1].email

// console.log(Object.keys(TinderUser));
// console.log(Object.values(TinderUser));
// console.log(Object.entries(TinderUser));

// console.log(TinderUser.hasOwnProperty('isloogedin'));
// console.log(TinderUser.hasOwnProperty('islooged'));



const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "kashish",
}
//course.courseInstructor

const{courseInstructor : teacher} = course


//console.log(courseInstructor);
console.log(teacher);

// {
//     "name": "kashish",
//     "price": "free",
//     "coursename": "js in hindi"
// }
[
    {},
        {},

            {},

]