//DOM(document object model)
//it is an tree like structure of an html where javascript can run and change the content of html  dinamically

// 1.  document.getElementById("text") // for id
// 2.  document.getElementsByClassName("text") //for class
// 3. a. document.querySelector("#text") for id
//    b. document.querySelector(".text") for class





function okk(){
    let show= document.querySelector("#text")
    show.innerHTML="anshika"  // for html in javascript
    show.style.color="red"  ///for css in javascript
    show.style.backgroundColor="blue"
}

//     // document.getElementById('text')
//     // document.getElementsByClassName('text')
//     // document.querySelector("#text")

//   function okk(){
    
//   let show=  document.querySelector("#text")

//   show.innerHTML="Siddharth"
//   show.style.color="red"

// //    document.querySelector("#text").innerHTML="Siddharth"


//   }



   // ===========  Normal function ================ 


  //  function name(){
  //     console.log("Normal Fun");
          
  //  }

  //  name();


  //  //  ========== Anonymus Function  ========


  // let okk= function(){

  //    console.log("Anonymus Function");
     
  //  }

  //  okk();


  //  // ========= IIFE==========

  //  (
  //   function(){
  //     console.log("IIFE");
      
  //   }
  //  )()


  //  // =============  Arrow Function ("=>")   ========


  //  let sid = ()=>{

  //   console.log("Arrow Function");    

  //  }

  //  sid()



// document.getElementById("name")
// document.getElementsByClassName("name")
// document.querySelector("#name")

 //let orange= ()=>{
  
     //let BOX1= document.querySelector("#box")
   
      //BOX1.src="./img2.jpeg"
     
     //BOX1.style.backgroundImage='url(./img2.jpeg)'     
   
//}
   
//       let Green=()=>{
   
//        let BOX1= document.querySelector("#box")
//         //BOX1.style.backgroundImage="none"    
//          BOX1.style.backgroundColor="green"
   
//      }


//by arrow function

     let Orange=()=> {
    let BOX1 = document.querySelector("#box")
         BOX1.style.backgroundColor="orange"
    
 
 }
  
   let Green=()=>{
   
    let BOX1= document.querySelector("#box")
     //BOX1.style.backgroundImage="none"    
      BOX1.style.backgroundColor="green"

  }


let white= ()=>{
    let BOX1= document.querySelector("#box")
            BOX1.style.backgroundColor="grey"


 }

 let box1= ()=>{
    let show= document.querySelector(".container")
        //  show.style.backgroundColor="yellow"
        show.style.backgroundImage="url(./Bugatti-Divo.webp)"
 }

 let box2= ()=>{
    let show= document.querySelector(".container")
           // show.style.backgroundColor="pink"
            show.style.backgroundImage="url(./Bugatti-Divo.webp)"


 }

 let box3= ()=>{
    let show= document.querySelector(".container")
            show.style.backgroundColor="aqua"


 }

let pixel1=()=>{
   let show= document.querySelector("#anshika")
   show.style.fontSize="30px"
}

let pixel2=()=>{
   let show= document.querySelector("#anshika")
   show.style.fontSize="50px"
}

let pixel3=()=>{
   let show= document.querySelector("#anshika")
   show.style.fontSize="70px"
}


let sss=()=>{
   let show= document.querySelector("#anshika")
   show.style.display="none"
}

let hhh=()=>{
   let show= document.querySelector("#anshika")
   show.style.display="block"
}


//short cut
//document.querySelector("#text").show.innerHTML="anshika"


