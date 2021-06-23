
var a;

function navbtn(nav, link){
    link = document.getElementById("links")
    nav = document.getElementById("navigationbar")
    if (a == 1){
        nav.style.display = "none"
        link.style.display = "none"
        return a = 0
    } else{
        nav.style.display = "block"
        link.style.display = "block"
        return a = 1
    }
}