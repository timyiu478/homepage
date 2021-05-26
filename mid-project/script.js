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
      var dark_bkgc = localStorage.getItem('dark-bkg-color');
      var dark_fontc = localStorage.getItem('dark-font-color');
      var bkgc = localStorage.getItem('bkg-color');
      var fontc = localStorage.getItem('font-color');
      var y;
      if(localStorage.getItem('theme')=="dark"){
          y = document.querySelector('body.dark-theme');
          y.style.setProperty('--bkg-color',dark_bkgc);
          y.style.setProperty('--text-color',dark_fontc);
      }
      else{
          y = document.querySelector('body');
          y.style.setProperty('--bkg-color',bkgc);
          y.style.setProperty('--text-color',fontc);
      }
}


window.onload = function get_theme_mode(){
    if(localStorage.getItem('theme')=="dark") {
        document.body.classList.toggle("dark-theme");
        localStorage.setItem("theme", 'dark');
    }

    var dark_bkgc = localStorage.getItem('dark-bkg-color');
    var dark_fontc = localStorage.getItem('dark-font-color');
    var bkgc = localStorage.getItem('bkg-color');
    var fontc = localStorage.getItem('font-color');
    var y;
    if(localStorage.getItem('theme')=="dark"){
        y = document.querySelector('body.dark-theme');
        y.style.setProperty('--bkg-color',dark_bkgc);
        y.style.setProperty('--text-color',dark_fontc);
    }
    else{
        y = document.querySelector('body');
        y.style.setProperty('--bkg-color',bkgc);
        y.style.setProperty('--text-color',fontc);
    }
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
}




function change_font_color(){
    var x = document.getElementById("font-color").value;
    if(localStorage.getItem('theme')=="dark"){
        y = document.querySelector('body.dark-theme');
        y.style.setProperty('--text-color',x);
        localStorage.setItem("dark-font-color",x);
    }
    else{
        y = document.querySelector('body');
        y.style.setProperty('--text-color',x);
        localStorage.setItem("font-color",x);
    }


}

function change_bg_color(){
    var x = document.getElementById("bg-color").value;
    if(localStorage.getItem('theme')=="dark"){
        y = document.querySelector('body.dark-theme');
        y.style.setProperty('--bkg-color',x);
        localStorage.setItem("dark-bkg-color",x);
    }
    else{
        y = document.querySelector('body');
        y.style.setProperty('--bkg-color',x);
        localStorage.setItem("bkg-color",x);
    }

}

document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector("#loading").style.visibility = "visible";
    } else {
        document.querySelector("#loading").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
    }
};




function topFunction(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
