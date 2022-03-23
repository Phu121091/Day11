const h1 = document.querySelector(".main h1");
const changecolor = document.querySelector(".changecolor");
const changetext = document.querySelector(".changetext");

const changex = (type) => {
  if (type == "color") {
    if (h1.style.color == "red") {
      h1.style.color = "black";
    } else h1.style.color = "red";
  }
  if (type == "text") {
    if (h1.innerHTML == "Mindx") {
      h1.innerHTML = "Technology School";
    } else h1.innerHTML = "Mindx";
  }
};
changecolor.onclick = () => {
  changex("color");
};
changetext.onclick = () => {
  changex("text");
};
