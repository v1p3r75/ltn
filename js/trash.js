var slide = document.querySelectorAll(".slide > div");
var tab = new Array()
var i = 0;
var verify = false;
var next = document.querySelector(".next")


slide.forEach(function(e,i){
  tab.push(e)
  })
function anime(){
  
  if(i == tab.length - 1){
    slide.forEach(function(e){
      e.style.transform = "transleteX(100%)"
      e.style.transform = 'translateX(0)';
      i = 0
    })
  }else{
    
    tab[i].style.transform = 'translateX(-100%)';
    i ++;
  }
}
next.addEventListener("click", function(e){
  verify = true;
})

var time = setInterval(anime,5000);
.slide_img1 {z-index: 4;} .slide_img2 {z-index: 3} .slide_img3 {z-index: 2} .slide_img4 {z-index: 1}
document.querySelector(".slides").addEventListener("mouseover", function(e){
  clearInterval(time)
})