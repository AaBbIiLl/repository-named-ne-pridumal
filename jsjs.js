const textcall = document.querySelector('.textcall');
const Thanks = document.querySelector('.Thanks');
const close = document.querySelector('.close');

function showtextcall(){
Thanks.style.display='flex';
}
textcall.addEventListener('click', showtextcall);
