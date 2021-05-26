function fact(){
    var x = document.getElementById("random-fact");
    var facts = ["I love cat.","I love mia.","I am a man.","I love dog.","I love basketball.","I am 20 years old.","I love reading.","I love hiking.","I live in Hong Kong.","I love thai cuisine.","I love japanese cuisine.","I don't like durian."]
    var i = facts.length;
    var rand_facts = [];
    var j;

    while(i--){
        j = Math.floor(Math.random() * (i+1));
        rand_facts.push(facts[j]);
        facts.splice(j,1);
    }
    x.innerHTML="";
    for(i=0;i<5;i++){
        x.innerHTML += i+1 + ".  "+rand_facts[i]+"<br>";
    }
}
fact();

function playsong(x){
    var song = document.getElementById("song");

    var song_name = document.getElementById("song-name");

    var lam_img = document.getElementById("lam-play");
    var eric_img = document.getElementById("eric-play");
    var jane_img = document.getElementById("jane-play");

    var mp3 = song.src.lastIndexOf(".mp3");
    console.log(mp3);

    var n=1;
    var substr = song.src.substr(mp3-1,1);
    console.log(song.src);
    console.log(substr);
    if (song.src!= ""){
        if(song.paused==false && substr!= x){ n = 2; }
    }
    console.log(n);
    for(var i = 0; i<n;i++){
        if(song.paused){
            if(x==1){
                song.src="1.mp3";
                lam_img.src ="pause.svg";
                song_name.innerHTML = "Playing Song: Terence Lam -- In a Funk";
            }else if(x==2){
                song.src="2.mp3";
                eric_img.src ="pause.svg";
                song_name.innerHTML = "Playing Song: Eric Chou -- I'm happy";
            }else if(x==3){
                song.src="3.mp3";
                jane_img.src ="pause.svg";
                song_name.innerHTML = "Playing Song: Dear Jane -- Galactic-Repairman";
            }
            song.play();
        }
        else{
            song.pause();
            song_name.innerHTML= "Playing Song:";
            lam_img.src ="play.svg";
            eric_img.src ="play.svg";
            jane_img.src ="play.svg";
        }
    }


}

window.onscroll = function(){

    var nav_home = document.getElementById("nav_home");
    var nav_education = document.getElementById("nav_education");
    var nav_interests = document.getElementById("nav_interests");

    var nav_height = document.getElementById("mynav").offsetHeight;
    var educate_height = document.getElementById("educate").offsetTop;
    var interest_id_height = document.getElementById("interest-id").offsetTop;

    var scroll = $(window).scrollTop();

    if (scroll+ 2*nav_height < educate_height ) {
        nav_home.style.textDecoration = "underline";
        nav_education.style.textDecoration = "none";
        nav_interests.style.textDecoration = "none";


    }
    else if(scroll+ 2*nav_height < interest_id_height){
        nav_education.style.textDecoration = "underline";
        nav_interests.style.textDecoration = "none";
        nav_home.style.textDecoration = "none";
    }
    else{
        nav_interests.style.textDecoration = "underline";
        nav_education.style.textDecoration = "none";
        nav_home.style.textDecoration = "none";
    }

    go_top_button = document.getElementsByClassName("go_top_button");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        go_top_button[0].style.display = "block";
      } else {
        go_top_button[0].style.display = "none";
      }


}