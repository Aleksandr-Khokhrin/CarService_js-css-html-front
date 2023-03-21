let splideS = new Splide( '.splide.second', {
    type   : 'loop',
    perPage: 1,
    perMove: 1,
    snap: boolean = true,
  } );
  splideS.mount();

  
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})



