let page_sections = document.querySelectorAll('section');
window.onscroll = ()=>{
    page_sections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        const header = document.querySelector(".header")
        if (window.scrollY > 100) {
            header.classList.add("fixed");
          } else {
            header.classList.remove("fixed");
          }
        if(top+400>=offset-1 && top<=(offset+height)){
            sec.classList.add('show-animate');
        }
        else{
            sec.classList.remove('show-animate');
        }
    })
}



let mode_btn = document.getElementById("dark-light-toggle-btn");
let sun = document.querySelector("#dark-light-toggle-btn i")

mode_btn.onclick = function(){
    document.body.classList.toggle("dark-theme")
    sun.classList.toggle("fa-moon")
}

