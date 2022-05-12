console.log("Excercise - 02 Editable div");
let div =document.createElement("div");
let text1 = document.createTextNode("THIS CREATED DIV");
div.appendChild(text1)
div.id = "editable";
div.className = "divForEdit";

let list = document.createElement("li");
let text2 = document.createTextNode("This is list number 1");
list.appendChild(text2);
list.id = "list1";
list.className = "list";

div.appendChild(list);
console.log(div);


//---
let mainContainer = document.querySelector("#mainContainer");
mainContainer.appendChild(div);





// // FOR MAKING COLORFULL OF OUR DIV📌📌📌
div.style.background = "red";
    div.style.marginRight = "400px";
    div.style.border = "none";
    div.style.borderRadius = "4px";
    div.style.padding = "7px";
    div.style.fontSize = "1.2rem";

// // MAIN FUNCTION FOR MAKING EDITABLE📌📌📌
// let edit = document.querySelector("#editable");---> not nessecery
div.addEventListener("click", func);

function func(element){
    // console.log(div.isContentEditable);
    div.contentEditable = true;

   
        localStorage.setItem( element ,list.innerHTML);        
}
 //-------------------

// FOR UPDATE📌📌📌
// localStorage.clear();
console.log(localStorage);







////////NOT SOLVED...



