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
    show.style.backgroundcolor="blue"
}
//short cut
//document.querySelector("#text").show.innerHTML="anshika"


