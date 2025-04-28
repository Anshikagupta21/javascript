// let sendData=()=>{
//     let inpname=document.querySelector("#inp").value
    
//     localStorage.setItem("Name",inpname)
//     localStorage.setItem("Age","21")
//     localStorage.setItem("Address","Bhopal")
//     localStorage.setItem("roll-num","011Al221051")
// }
// let Show=document.querySelector("#show")
// let  username=localStorage.getItem("Name")
// let userage=localStorage.getItem("Age")

// Show.innerHTML=`Welcome ${username} and Your Age is {userage}`

// Show.innerHTML=localStorage.getItem("Name")


// let remove=()=>{
//     localStorage.removeItem("Name")
//     location.reload()
// }

saveData=()=>{
    let inpname=document.querySelector("#name").value
    let inpage=document.querySelector("#age").value
    let inpemail=document.querySelector("#email").value
    let inpnum=document.querySelector("#number").value
    let inppass=document.querySelector("#pass").value


    localStorage.setItem("Name",inpname);
    localStorage.setItem("Age",inpage);
    localStorage.setItem("Email",inpemail);
    localStorage.setItem("Number",inpnum);
    localStorage.setItem("Password",inppass);
    
    alert("Data saved to local storage successfully")
    return false;
    

}


