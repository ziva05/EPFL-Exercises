// The fFirst try:
// const paragraph = document.getElementById("paragraph");
// const button = document.getElementById("myButton");

// function changeParagraph() {
//     title.innerHTML = text.value;
// }

// button.addEventListener("click", changeParagraph); 

// The second try: 
const para = document.getElementById("para");
const myButton = document.getElementById("myButton");
const myText = document.getElementById("myText");

function writePara() {
    para.innerText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
}


myButton.addEventListener("click", writePara);


// console.log(para);
// console.log(myButton)




