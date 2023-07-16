
  console.clear()
  const alldiv = document.querySelectorAll('.lycee div')
  const next = document.querySelector('.next-b')
  const prev = document.querySelector('.prev-b')
  var index = 0 ;
  var width = -100;
 /*
next.addEventListener("click",function(e){
    width -= 100
    if (width <= alldiv.length-1){
        alldiv.forEach(function(i){
            console.log("tiré")
            i.style.transform = "translateX("+String(width)+"px)";
        })
        index += 1
        
    }else{
        alldiv.forEach((item) => {
            item.style.transform = 'translateX(0)'
          });index=0;
        index = 1
        width = 0
    }
})
prev.addEventListener("click", function(e){
    width += 100
    if (index <= alldiv.length - 1){
        alldiv.forEach(function(i){
            console.log("tiré")
            i.style.transform = "translateX("+String(width)+"%)";
        })
        
        index += 1
    }else{
        index = 1
        width = 0
    }
})
// Systel d'onglet //
var tech = document.querySelector(".tech");
var agricole = document.querySelector(".agricole");

function onglet(id){
  if (id == 1){
    tech.style.background = "rgba(0,0,0,0.7)"
    tech.style.borderBottom = "3px solid silver"
    agricole.style.backgroundColor = "var(--midnightblue)"
    agricole.style.borderBottom = ""
  }
  else if (id == 2){
    agricole.style.background = "rgba(0,0,0,0.7)"
    agricole.style.borderBottom = "3px solid silver"
    tech.style.backgroundColor = "var(--midnightblue)"
    tech.style.borderBottom = ""
  }
}



























 
  const progress = document.querySelector('progress')
  const divtab = []
  var index = 1
  alldiv.forEach((div, i) => {
    divtab.push(div);
  });
  var i = 0
  function slide(events) {
    i+= 100
    if (index<=divtab.length-1 ) {
      divtab.forEach((item) => {
        item.style.transform = 'translateX'+'('+(-String(i))+'%)'
        item.classList.add('anim')
      });index+=1
    } else {
      divtab.forEach((item) => {
        item.style.transform = 'translateX(0)'
      });index=0;i=0
    }
    progress.value = index
  }
  function prevbut() {
    i-= 100
    if (index>1 ) {
      divtab.forEach((item) => {
        item.style.transform = 'translateX'+'('+(-String(i))+'%)'
        item.classList.add('anim')
      });index-=1;
    } else{
      divtab.forEach((item) => {
        item.style.transform = 'translateX(0)'
      });index=0;i=0
    }
    progress.value = index
  }
  /*
  const trouver = document.querySelector('.buttonn')
  trouver.addEventListener('click',function(){
    var zone = document.querySelector('.rstat')
    zone.classList.remove('dis')
    zone.classList.add('anim')
  })
  const allSelect = document.querySelector('#allselect')
  allSelect.addEventListener('click',function(){
    if(allSelect.checked==true){
      document.querySelectorAll(".under-rstat input[type='checkbox']").forEach((elmt) => elmt.checked=true)
    } else { document.querySelectorAll(".under-rstat input[type='checkbox']").forEach((elmt) => elmt.checked = false)}
   })
  const download = document.querySelector('.download')
  download.addEventListener('click',function(){
    var select = document.querySelectorAll('.under-rstat input')
    select.forEach((elmt)=>{
      if(elmt.checked==true)
        elmt.parentNode.children[1].click()
    })
    // selected.forEach((elmts)=>{elmts.click()})
  })
  const download_all = document.querySelector('.download_all')
  download_all.addEventListener('click',function() {
    document.querySelectorAll('.under-rstat a').forEach((href)=>{href.click()})

  })
  document.querySelector('.selectfiliere').addEventListener('change',function(e) {
    select = this.selectedIndex
    let ssti = document.querySelector('.ssti')
    let sstag = document.querySelector('.sstag')
    let ssthrt = document.querySelector('.ssthrt')
    ssti.style.display = 'none';
    switch (select) {
      case 0:
      ssti.classList.remove('block')
      sstag.classList.remove('block')
      ssthrt.classList.remove('block')
        break;
      case 1:
        ssti.classList.add('block')
        sstag.classList.remove('block')
        ssthrt.classList.remove('block')
        break;
      case 2:
        ssti.classList.remove('block')
        sstag.classList.add('block')
        ssthrt.classList.remove('block')
        break;
      case 3:
        ssti.classList.remove('block')
        sstag.classList.remove('block')
        ssthrt.classList.add('block')
        break;
      default:
        ssti.style.display = 'none';
    }
  })

  function forslide() {
    var welcome = document.querySelector('.welcome'); var formulare = document.getElementById('formulaire'); if (formulare.classList == 'formulare') { welcome.classList.add('hidden'); formulare.classList.add('showed'); formulare.classList.remove('formulare'); } else { welcome.classList.remove('hidden'); formulare.classList.remove('showed'); formulare.classList.add('formulare'); } }

  next.addEventListener('click',slide)
  // setInterval(slide,5000)
  prev.addEventListener('click',prevbut)
  divtab.forEach((lycee) => {
    lycee.addEventListener('click',forslide)
  })

divtab.forEach((lycee) => {
  lycee.addEventListener('drag', newFunction)
})

function newFunction(events) {

  divtab.forEach((lt)=>{
    let sy = lt.screenX
    console.log(events);
    lt.style.transform = `translateX(${sy}px)`
    lt.classList.add('anim')

    })
}
// var tab = document.querySelectorAll('.tab1,.tab2')
// tab.forEach((elmt)=>{
//   elmt.addEventListener('click',function(ev) {
//     elmt.classList.add('blue')
//     if (elmt.classList.contains('tab1')) {
      
//     } else {
      
//     }
  
//   })
// })
/*let tab1 = document.querySelector('.tab1')
let tab2 = document.querySelector('.tab2')
let lt_list1 = document.querySelector('.lt_list1')
let lt_list2 = document.querySelector('.lt_list2')
tab1.addEventListener('click',function () {
  tab1.classList.add('blue')
  tab2.classList.remove('blue')
  lt_list1.classList.remove('dnone')
  lt_list2.classList.add('dnone')
})
tab2.addEventListener('click', function () {
  tab2.classList.add('blue')
  tab1.classList.remove('blue')
  lt_list1.classList.add('dnone')
  lt_list2.classList.add('block')
})*/