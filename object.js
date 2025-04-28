//********day1*********** */


// let text ="this is string"  //string


//  let fruits= ["anshika", 20, "bhopal"]  //array


// let obj ={    //object

//    // key:Value,
//    Name: "anshika", 
//    Age:20,
//    City:"bhopal"
// }
// console.log(obj);  //to print an object
// console.log(obj.Age);  //to access an object values




//*********day2********** */
// console.log(obj);
//         console.log(obj.Age);

//         obj.College='BCE';//to insert an object => object_name.new_key=value
//         console.log(obj);

//         obj.Age=21//update existing key
//         console.log(obj);

//         delete obj.city; // delete key from an object
//         console.log(obj);

     

//Destructuring of an object  
        let student = {name:"anshika", age:20, city:"bhopal"};
        let {name,age}= student;

        console.log(name);
        console.log(age);
        
   //Spread operator
   
//    let student1 ={name:"anshika", age:20};
//    let student2 ={grade:"A", city:"bhopal"};

//    let combinedStudent ={...student1,...student2};

//    console.log(combinedStudent);
   
   //*********day3************ */


   



   //Map and filter (imp topic)
   // e=event it itrate the element {we can write anything at place of e}
  // map method is only used in array
 // what is high order function and call back function
 // call back function=jo kisi ke para meter me pass kiya gya ho
// higher order function= jo apne parameter me kisi function  ko leta ho(.map is higher order function)
  // let num=[2,3,6,4,8,9]

//   let newarr= num.map( (e)=>{
//       return e*2
//   }  )
//   console.log(newarr);
   
//if  it is arrow funtion we can remove ' {} 'and 'return' if our code is of one line it is adventage id arrow function


//filter
// let newarr=num.filter( (e)=>{
//       return e%2==0
// })
// console.log(newarr);



// let newarr=num.filter( (e)=>{
//       return e>6
// })
// console.log(newarr);


//foreach
// let newarr= num.forEach( (e)=>{
//       console.log(e*2==0);
      
// })
// console.log(newarr);
