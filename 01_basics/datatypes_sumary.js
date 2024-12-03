 const id =Symbol('123');
 const anotherId= Symbol('123')
 console.log(id===anotherId)


 // Refrence (Non - primitive)
  
 //Array , Objects , functions

 const heros =["Shaktiman" , "krish"]
 let obj={
    name:"Shivam",
    age:22,

 }
 const myFunction=function(){
    console.log("hello");
 }
 console.log(typeof myFunction);