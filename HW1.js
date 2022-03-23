const thongbao = document.querySelector(".thongbao")
const invi = document.querySelector(".invi")
const change = document.querySelector(".change")
const max = document.querySelector(".max")
const round = document.querySelector(".round")

invi.onclick = () =>{
    thongbao.classList.toggle("iv");
}
change.onclick = () =>{
    thongbao.classList.toggle("cg");
}
max.onclick = () =>{
    thongbao.classList.toggle("mx");
}
round.onclick = () =>{
    thongbao.classList.toggle("ro");
}
