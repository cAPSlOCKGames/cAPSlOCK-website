function navbtn(input, nav){
    nav = document.getElementById("navigation")
    if (input == "show"){
        nav.style.visibility = "visible"
    } else if (input == "hide"){
        nav.style.visibility = "hidden"
    }
}