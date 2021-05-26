window.onscroll = function(){
    go_top_button = document.getElementsByClassName("go_top_button");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        go_top_button[0].style.display = "block";
      } else {
        go_top_button[0].style.display = "none";
      }
}

  