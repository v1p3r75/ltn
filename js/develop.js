// Animation à l'apparition des programmeurs !
console.clear()
var elmts = document.querySelectorAll(".int > div")
const ratio = 0.3;
const options = {
  root: null,
  rootMargin : "0px",
  threshold : ratio,
}
function animate(e,obs){
  e.forEach(function(entry){
    if (entry.intersectionRatio > ratio){
      entry.target.style.opacity = 1
    }else {
      entry.target.style.opacity = 0
    }

  })
}
const observer = new IntersectionObserver(animate, options)

elmts.forEach(function(r,i){
  observer.observe(r)
})

// The slide show
var slides = document.getElementsByClassName("slide");
var dots = document.getElementsByClassName("dot");
var index = 1;
slideShow(index)
function slidePrev(n){
  slideShow(index -= 1)
}
function slideNext(n){
  slideShow(index += 1)
}
function current(n){
  slideShow(index = n)
}
function slideShow(n){
  var count;
  if (n > slides.length) {index = 1}
  if (n < 1) {index = slides.length}
  for(count = 0; count < slides.length ; count ++){
    dots[count].className = dots[count].className.replace(" show", "")
  }
  for (count = 0; count < slides.length; count ++){
    slides[count].style.display = "none";
  }
  slides[index-1].style.display = "block";
  dots[index-1].className += " show";
}

var time = setInterval(slideNext,8000) // The timer

document.querySelector(".dot").addEventListener("click", function(e){
  console.log(e.clientX)
})
