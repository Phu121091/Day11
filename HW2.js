const h1 = document.querySelector(".main h1");
const changecolor = document.querySelector(".changecolor");
const changetext = document.querySelector(".changetext");

changecolor.onclick = () =>{
    h1.style.color = "red";
}
changetext.onclick = () =>{
    h1.innerHTML= "Technology School";
}