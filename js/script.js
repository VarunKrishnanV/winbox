var folderAbout = document.querySelector(".folder-about")

folderAbout.addEventListener("click", () => {
    const aboutContent = new WinBox({
        title : "About Me",
        background : "#1E2323",
        url : "/pages/aboutFileManager.html",
        top : 30,
        left :30,
    })
})

// var quickArrow = document.querySelector(".quick__arrow");
// var child = document.querySelector(".child")

// quickArrow.addEventListener("click", ()=>{
//     child.classList.toggle("show")
//     quickArrow.classList.toggle("rotateArrow")
// })
