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

// слайдер
let splideS = new Splide( '.splide.second', {
    type   : 'loop',
    perPage: 1,
    perMove: 1,
    snap: boolean = true,
  } );
  splideS.mount();

//Бургер
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

// лисенеры
document.querySelectorAll('.menu li').forEach( btn => {
  btn.addEventListener('click', setBurgerA)
})
// Функции
function setBurgerA() {
  let userBtn = event.target
  if (userBtn.innerHTML == 'Галерея работ') {
    document.querySelector('.menu').classList.remove('active')
}}
