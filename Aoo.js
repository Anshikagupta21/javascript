// let Arr=["Apple",2,"banana"]  //array
// console.log(Arr[0]);

let fruits ={
    name:"anshika", //object
    age:20,
    city:"bhopal"

}
console.log(fruits);

//array of object
let UserData=[
    {
        name:"khushi",
        age:21,
        city:"indore"
    

    },{
        name:"sanskriti",
        age:22,
        city:"delhi"
    
    },{
        name:"aish",
        age:23,
        city:"up"
    
    }
]
console.log(UserData[0].city);

let datashow = document.querySelector("#datashow")
UserData.map( (e)=>{
    datashow.innerHTML+= `
    <tr>
    <td> ${e.name}</td>
     <td> ${e.city}</td>
      <td> ${e.age}</td>
      </tr>
      `
} )