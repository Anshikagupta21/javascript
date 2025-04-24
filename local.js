let sendData=()=>{
    let inpname=document.querySelector("#inp").value
    
    localStorage.setItem("Name",inpname)
    localStorage.setItem("Age","21")
    localStorage.setItem("Address","Bhopal")
    localStorage.setItem("roll-num","011Al221051")
}
let Show=document.querySelector("#show")
let  username=localStorage.getItem("Name")
let userage=localStorage.getItem("Age")
Show.innerHTML=`Welcome ${username} and Your Age is {userage}`

Show.innerHTML=localStorage.getItem("Name")


let remove=()=>{
    localStorage.removeItem("Name")
    location.reload()
}




