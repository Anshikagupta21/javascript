//new keyword  to write in objest format

// let MyDate = new Date()
// console.log(MyDate.getFullYear());
// console.log(MyDate.toLocaleString()); 
// console.log(MyDate.getMonth()+1); // starting from 0 index month/week 
// console.log(MyDate.getDay());
// console.log(MyDate.getHours());
// console.log(MyDate.getMinutes());
// console.log(MyDate.getSeconds());
// console.log(MyDate.getTime());
// console.log(MyDate.getMilliseconds());

// let Days=["sunday","monday","tuesday","wednesday","thrusday","friday","saturday"];
// console.log(Days[MyDate.getDay()]);


//clock
setInterval(()=>{
    let CurDate=new Date()
let showtime=document.querySelector("#showing")
showtime.innerHTML= `${CurDate.getHours()}: ${CurDate.getMinutes()}: ${CurDate.getSeconds()}`
} ,1000)  

//alarm
let setAlarm=()=>{
    let userTime=document.querySelector("#usertime").value
    let show=document.querySelector("#show")

    setInterval(()=>{
        let Time=new Date()
        
        let Alaramtime=`${Time.getHours()}:${Time.getMinutes()}`
        if(Alarmtime==userTime){
            show.innerHTML="alarm is ringing"
        }
        else{
            show.innerHTML="alaram is set"
        }

    },1000)
}
    






 

