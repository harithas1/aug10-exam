const button = document.getElementById("toggle-theme")
button.addEventListener("click", toggleTheme)

function toggleTheme(){
    if(document.documentElement.classList.contains("toggle-theme")){
        document.documentElement.classList.remove("toggle-theme")
        document.getElementById("toggle-theme").innerHTML="Switch To Dark Mode"
    }else{
        document.getElementById("toggle-theme").innerHTML="Switch To Light Mode"
        document.documentElement.classList.toggle("toggle-theme")
    }
}