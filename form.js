let Val=()=>{
   let inputname= document.querySelector("#name").value
   let inputnumber= document.querySelector("#number").value
   let inputemail= document.querySelector("#email").value
   // let inputpass= document.querySelector("#pass").value
   // let inputcpass= document.querySelector("#cpass").value

   let inputpass=document.querySelector("#pass").value
   let inputcpass=document.querySelector("#cpass").value



   let errname=document.querySelector("#errname")
   let errnumber=document.querySelector("#errnumber")
   let erremail=document.querySelector("#erremail")
   let errpass=document.querySelector("#errpass")
   let errcpass=document.querySelector("#errcpass")
 
  
   if(inputname==""){
    errname.innerHTML="please enter your name"
    errname.style.color="red"
    document.querySelector("#name").style.border="1px solid red";
    return false

   }


    if(inputnumber==""){
    errnumber.innerHTML="please enter your number"
    errnumber.style.color="red"
    return false

   }

  
  
   
   if(inputemail==""){
    erremail.innerHTML="please enter your email"
    erremail.style.color="red";
    return false

   }


  
   
   if(inputpass==""){
    errpass.innerHTML="please enter your password"
    errpass.style.color="red";
    return false

   }


   
   
   if(inputcpass==""){
    errcpass.innerHTML="please enter your cpass"
    errcpass.style.color="red";
    return false

   }

   

 else if(isNaN(inputnumber))  //if ans  is number return false
   {   
      errnumber.innerHTML="please enter number only"
      return false
   }

   else if(inputnumber.length!=10){
      errnumber.innerHTML="please enter 10 digits only"
      return false
   }

   else if(!(inputemail.includes("@") && inputemail.includes(".com"))){
      
      erremail.innerHTML="please enter valid email!"
      return false
   }


   else if(inputcpass != inputpass){
      errcpass.innerHTML ="please enter same passwords!";
      document.querySelector("#cpass").value=""  //new thing
      document.querySelector("#cpass").focus()   //new thing
      return false;
     
   }
   else if( !(inputpass.match(/[1234567890]/))
      && !(inputpass.match(/[!@#$%^&*()_]/))
      && !(inputpass.match(/[A-Z]/))
      && !(inputpass.match(/[a-z]/))
){
   errpass.innerHTML="please enter strong password";

   return false;
}
}







