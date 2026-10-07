const menuBtn=document.getElementById('menuBtn');
const navMenu=document.getElementById('navMenu');
menuBtn.addEventListener('click',()=>navMenu.classList.toggle('open'));
navMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navMenu.classList.remove('open')));
