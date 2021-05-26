var folderAbout = document.querySelector(".folder-about")

folderAbout.addEventListener("click", () => {
    const aboutContent = new WinBox({
        title : "About Me",
        background : "#0567D4",
        url : "/pages/aboutFileManager.html",
        // x: "center",
        // y: "center",
        // width: "80%",
        // height: "50%"
        width: "90%",
        height: "80%",
        onfocus: function(){
            this.setBackground("#0567D4");
        },
        onblur: function(){
            this.setBackground("#00B4FB");
        },
    })
})


