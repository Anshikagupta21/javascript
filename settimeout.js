
//acyncronous and sincyonou

//setTimeout example 1
//settimeout(function ,delay)  delay=> in miliseconds



//console.log("task given");

// setTimeout( ()=>{
//     console.log("in process");
    
// } ,2000)
//console.log("in process");
//console.log("completed");





//Example 2


// let button=()=>{
//     setTimeout( ()=>{
//         console.log("anshika");
 
//     } ,3000)
// }
    

//setInterval ex:1


// let show=()=>{
//     setInterval(() => {
          
//         console.log("anshika");
 
//     } ,2000)
// }

// ex:2

// let count=0
// let number;
//  let start=()=>{
//     number= setInterval( ()=>{
//         console.log(count);
//         count++
        
//     },2000)
// }
// let stop=()=>{
//     clearInterval(number)
// }

// clear interval (set-interval-name)




// example 3
let count = 0;
let number;
let click=()=>{
 number = setInterval(() => {
  console.log(count);
  
  if (count === 5) {
    clearInterval(number); // stop the interval
  }

  count++;
}, 3000); // runs every 1 second
}