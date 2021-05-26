var quickArrow = document.querySelector(".quick__arrow");
var child = document.querySelector(".child")
var aboutDoc = document.querySelector(".about__doc")

quickArrow.addEventListener("click", ()=>{
    child.classList.toggle("show")
    quickArrow.classList.toggle("rotateArrow")
})

aboutDoc.addEventListener("click", () => {
    const aboutContent = new WinBox({
        title : "about.txt",
        background : "#4eb5fa",
        url : "/pages/about.html",
        // x: "top",
        // y: "right",
        width: "80%",
        height: "80%"
    })
})

