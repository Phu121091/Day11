const h1 = document.querySelector(".main h1");
const changecolor = document.querySelector(".changecolor");
const changetext = document.querySelector(".changetext");

changecolor.onclick = () =>{
    if(h1.style.color == "red"){
        h1.style.color = "black";
    }
    else h1.style.color = "red";
    }
changetext.onclick = () =>{
    if(h1.innerHTML == "Mindx"){
    h1.innerHTML= "Technology School";}
    else h1.innerHTML = "Mindx";
}

