var folderAbout = document.querySelector(".folder-about")

folderAbout.addEventListener("click", () => {
    const aboutContent = new WinBox({
        title : "About Me",
        background : "#4eb5fa",
        url : "/pages/aboutFileManager.html",
        // x: "center",
        // y: "center",
        // width: "80%",
        // height: "50%"
        width: "90%",
        height: "80%"
    })
})


