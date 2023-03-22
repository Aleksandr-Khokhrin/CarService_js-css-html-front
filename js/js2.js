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
