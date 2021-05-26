const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
function switch_theme_mode(){
    if (prefersDarkScheme.matches) {
        document.body.classList.toggle("light-theme");
        var theme = document.body.classList.contains("light-theme")
          ? "light"
          : "dark";
      } else {
        document.body.classList.toggle("dark-theme");
        var theme = document.body.classList.contains("dark-theme")
          ? "dark"
          : "light";
      }
      localStorage.setItem("theme", theme);
}

function menu(){
    var x = document.getElementById("mynav");
    if (x.className === "nav") {
        x.className += " responsive";
      } else {
        x.className = "nav";
    }

    var y = document.getElementById("mymenu");
    var img = y.innerHTML;

    if (img === '<i class="fa fa-bars fa-lg" aria-hidden="true"></i>'){
        y.innerHTML = '<i class="fa fa-times fa-lg" aria-hidden="true"></i>';
    }
    else{
        y.innerHTML = '<i class="fa fa-bars fa-lg" aria-hidden="true"></i>'; 
    }

    console.log(img);

}
