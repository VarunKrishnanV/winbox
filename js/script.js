var folderAbout = document.querySelector(".folder-about")

folderAbout.addEventListener("click", () => {
    const aboutContent = new WinBox({
        title : "About Me",
        background : "#4eb5fa",
        url : "/pages/aboutFileManager.html",
        x: "center",
        y: "center",
        width: "80%",
        height: "50%"
    })
})

// var quickArrow = document.querySelector(".quick__arrow");
// var child = document.querySelector(".child")

// quickArrow.addEventListener("click", ()=>{
//     child.classList.toggle("show")
//     quickArrow.classList.toggle("rotateArrow")
// })
