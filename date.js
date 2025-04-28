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

 let Days=["sunday","monday","tuesday","wednesday","thrusday","friday","saturday"];
 console.log(Days[MyDate.getDay()]);


//clock

// setInterval(()=>{
//     let CurDate=new Date()
// let showtime=document.querySelector("#showing")
// showtime.innerHTML= `${CurDate.getHours()}: ${CurDate.getMinutes()}: ${CurDate.getSeconds()}`
// } ,0)  

//alarm
let alarmInterval;
let setAlarm=()=>{
    let userTime=document.querySelector("#usertime").value
    let Show=document.querySelector("#show")
    let audioSound=document.querySelector("#audio")

    alarmInterval = setInterval(()=>{
        let Time=new Date()
        
        let Alarmtime=`${Time.getHours().toString().padStart(2,"0")}:${Time.getMinutes()}`
        if(Alarmtime==userTime){
            Show.innerHTML="alarm is ringing"
            audioSound.play()
            setTimeout(()=>{
                clearInterval(alarmInterval); //  Stop the interval after it rings
            },5000)

        }
        else{
            Show.innerHTML="alaram is set"
            
        }

    },1000)
}
    




// let date= document.querySelector("#date");
// let selectMenu= document.querySelectorAll("#select");
// let stopAlarm = document.querySelector("#stopalarm");
// let alarmList =document.querySelector("#alarmlist");

// let stop=()=>{
//     let userTime=document.querySelector("stopalarm").ariaValueMax
//     setInterval(() => {
//         let Time=new Date()
        
               
//     }, 1000);
// }




 

