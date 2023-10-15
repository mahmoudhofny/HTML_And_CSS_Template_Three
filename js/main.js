let up = document.querySelector(".up");

window.onscroll = function(){
    if(window.scrollY >= 800){
        up.classList.add('show');
    }else{
        up.classList.remove('show');

    }
    console.log(scrollY);
}
up.onclick = function(){
    window.scrollTo({
        top:0,
        behavior: "smooth",
    });
}