console.clear()
//const lts = document.querySelectorAll('.lycee div')
const lts = document.querySelectorAll('.lycee > div')
const next = document.querySelector('.next-b')
const prev = document.querySelector('.prev-b')
var i = 1 ;
let lg = 100

next.addEventListener('click',function(e){
    e.preventDefault()
    if (i+4 <= lts.length-1  ) {
        lts.forEach((elmts)=>{
			elmts.style.transform = 'translateX'+'('+(-String(lg))+'%)'
        });i +=1;
    } else {
        lts.forEach((elmts)=>{
            elmts.style.transform = 'translateX(0)'
        });i =1;lg = 100;
    }
    lg +=100
})
prev.addEventListener('click',function(e) {
  e.preventDefault()
    console.log(i);
    lg-= 100
    if (i>1 ) {
      lts.forEach((item) => {
        item.style.transform = 'translateX'+'('+(-String(lg))+'%)'
        item.classList.add('anim')
      });i-=1;
    } else{
      lts.forEach((item) => {
        item.style.transform = 'translateX(0)'
      });i=1;lg=0
    }
    
})
// Systel d'onglet //
var tech = document.querySelector(".tech");
var agricole = document.querySelector(".agricole");
var technique = document.querySelectorAll(".technique")
var agri = document.querySelectorAll(".agri")

function onglet(id){
  if (id == 1){
    tech.classList.add("opacity-d")
    tech.classList.add("bb")
    agricole.classList.remove("opacity-d")
    agricole.classList.remove("bb")
    agri.forEach(function(e){
      e.style.display = "none";
    })
  }
  else if (id == 2){
    agricole.classList.add("opacity-d")
    agricole.classList.add("bb")
    tech.classList.remove("opacity-d")
    tech.classList.remove("bb")
    technique.forEach(function(e){
      e.style.display = "block";
    })
  }
}
/**
lts.forEach((lycee) => {
    lycee.addEventListener('click',function() {
        var welcome = document.querySelector('.welcome');
        var formulare = document.getElementById('formulaire');
         if (formulare.classList == 'formulare') { welcome.classList.add('hidden');
          formulare.classList.add('showed'); formulare.classList.remove('formulare');
          } else { welcome.classList.remove('hidden'); formulare.classList.remove('showed'); formulare.classList.add('formulare'); } 
    })
  })
**/

/** ============================ Mes amis mon code commence ici ======================================== 
 * Dans tous les cas le formulaire restera affiché à chaque clique.
 * Vous devrez peut-être le recharger à chaque clique
 * avec les informations qui caractérisent le lycée sélectionné.
 * Par exemple vous pouvez changer la valeur d'un input de type hidden
 **/
var ci = null;
$('.lycee > div').each(function(i, elt) {
	$(this).on('click', function(e) {
		
		$('.welcome').slideDown(400)               // Afficher welcome
		$('#formulaire').slideUp(400);             // Cacher le formulaire
		
		$(ci = ci || this).removeClass('active');  
		$(ci = this).addClass('active');           
		
		$('.welcome').slideUp(400)                 
		$('#formulaire').slideDown(400);
	});
});
/** ============================ Mon code s'arrête ici ================================================= **/


//
var submit = document.querySelectorAll(".submit");
var output = document.querySelector(".files");
submit.forEach(function(e,i){
    e.addEventListener("click", function(e){
        output.style.opacity = 1;
    })
})
// Downloads
var file = document.querySelectorAll("#file");
var taba = [];
var filedown = document.querySelectorAll(".down > input");
function select(){
  file.forEach(function(e){
    e.checked = true;
  })
}
function uselect(){
  file.forEach(function(e){
    e.checked = false;
  })
}
function down(){
  filedown.forEach(function(e){
    if(e.checked == true){
      taba.push(e.parentNode)
    }
  })
  for(i in taba){taba[i].click()}
}