let button = document.getElementById("enter");
let inp=document.getElementById("userinput");
let ul = document.querySelector("ul");
let userPrompt= prompt("enter Username");
let userinput = [{userPrompt},inputvalue()];

function inputlength (){
    return inp.value.length;
}
function inputvalue (){
    return inp.value
}
const storeUserInputInArray = () => {
    userinput.push(inputvalue()); 
    console.log("userinput", userinput);
    return userinput;
 }
function createListElement (){ 
   let li = document.createElement("li");
   let delbutton = document.createElement("input");
   delbutton.type = "checkbox";
   delbutton.id = "checkBox";
   delbutton.onclick = crossFinishItem.bind(delbutton);
   li.appendChild(document.createTextNode(inp.value));
   li.appendChild(delbutton);
   ul.appendChild(li);
   storeUserInputInArray();
}

function addListAfterClick () {
    if (inputlength () > 0){
        createListElement()
    } 
    inp.value = "";
}

function listenToKeyboard (event){
    if (inputlength () > 0 && event.which===13){
       createListElement();
        inp.value="";
    };  
}

function crossFinishItem(){
    if(this.checked){
        this.parentNode.style.textDecoration = "line-through";
        this.parentNode.style.color = "black";
    } else 
    {
        this.parentNode.style.textDecoration = "none";
        this.parentNode.style.color= "black";
    }
}

//checkTime
const checkTimeThenDisplayMessage = () => {
    let d = new Date();
    let hours =d.getHours();
    let minutes=d.getMinutes();
    let seconds = d.getSeconds();
    let days = d.getDate();
    let months = d.getMonth();
    let time = `${hours}:${minutes}:${seconds}`;

     if(minutes < 10 ){
         time =`${hours}:0${minutes}:${seconds}`;
        }
        if (hours < 12){
            document.getElementById("h1").textContent
            = `Good Morning-${userPrompt}.`;
        }
        else if (hours >= 12 && hours <=14){
            document.getElementById("h1").textContent
            = `Good Afternoon-${userPrompt}.`;
        }
        else if (hours >=15 && hours <= 20){
            document.getElementById("h1").textContent
            = `Good Evening-${userPrompt}.`;
        }
        else if (hours >= 21){
            document.getElementById("h1").textContent
            = `Good night-${userPrompt}.`;
        }
        document.getElementById("theTime").textContent
        = `${time}`;
    }
    checkTimeThenDisplayMessage();

     //event listening
button.addEventListener("click", addListAfterClick ());
inp.addEventListener("keypress", listenToKeyboard);
   
