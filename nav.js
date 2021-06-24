
var a;

function navbtn(nav, link, brhide){
    link = document.getElementById("links")
    nav = document.getElementById("navigationbar")
    brhide = document.getElementById("hidebr")
    if (a == 1){
        nav.style.display = "none"
        link.style.display = "none"
        brhide.style.display = "none"
        return a = 0
    } else{
        nav.style.display = "block"
        link.style.display = "block"
        brhide.style.display = "block"
        return a = 1
    }
}