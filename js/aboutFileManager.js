var quickArrow = document.querySelector(".quick__arrow");
var child = document.querySelector(".child")

quickArrow.addEventListener("click", ()=>{
    child.classList.toggle("show")
    quickArrow.classList.toggle("rotateArrow")
})
