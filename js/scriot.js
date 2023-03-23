// burger
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');


menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

// прокрутка к галерее работ
const anchors = document.querySelectorAll('a[href*="#galery"]')
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const blockID = anchor.getAttribute('href').substr(1)
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}


//карусель1
let splideF = new Splide( '.splide.first', {
  type   : 'loop',
  perPage: 3,
  perMove: 1,
  snap: boolean = true,
  gap: '2vw',
  breakpoints: {1280: {perPage: 2}, 640: {perPage: 1},}
});
splideF.mount();
//карусель2
let splideS = new Splide( '.splide.second', {
  type   : 'loop',
  perPage: 1,
  perMove: 1,
  snap: boolean = true,
} );
splideS.mount();
//карусель3
let splideT = new Splide( '.splide.third', {
  type   : 'loop',
  perPage: 1,
  perMove: 1,
  snap: boolean = true,
} );
splideT.mount();



// лисенеры
document.querySelectorAll('.OurServicesButton').forEach( btn => {
  btn.addEventListener('click', setPoints)
})
document.querySelectorAll('.menu li').forEach( btn => {
  btn.addEventListener('click', setBurgerA)
})
// Функции
function setBurgerA() {
  let userBtn = event.target
  if (userBtn.innerHTML == 'Галерея работ') {
    document.querySelector('.menu').classList.remove('active')
}}

function setPoints() {
  let userBtn = event.target
  if (userBtn.innerHTML == 'Оклейка') {
    document.querySelector('.OurServicesButton.two').classList.remove('redBtn')
    document.querySelector('.OurServicesButton.one').classList.add('redBtn')
    document.querySelector('.pasting').classList.remove('none')
    document.querySelector('.detailing').classList.add('none')
    document.querySelector('.pasting').classList.add('flex')
    document.querySelector('.detailing').classList.remove('flex')
  } else if (userBtn.innerHTML == 'Детейлинг') {
    document.querySelector('.OurServicesButton.one').classList.remove('redBtn')
    document.querySelector('.OurServicesButton.two').classList.add('redBtn')
    document.querySelector('.pasting').classList.add('none')
    document.querySelector('.detailing').classList.remove('none')
    document.querySelector('.pasting').classList.remove('flex')
    document.querySelector('.detailing').classList.add('flex')
  }
}


