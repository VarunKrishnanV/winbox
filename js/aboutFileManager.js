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
        background : "#0567D4",
        url : "/pages/about.html",
        // x: "top",
        // y: "right",
        width: "80%",
        height: "80%",
        onfocus: function(){
            this.setBackground("#0567D4");
        },
        onblur: function(){
            this.setBackground("#00B4FB");
        },
    })
})

