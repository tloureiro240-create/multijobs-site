const menu=document.getElementById('menu'),nav=document.getElementById('nav');
menu?.addEventListener('click',()=>nav.classList.toggle('open'));
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

document.querySelectorAll('.filter').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const f=btn.dataset.filter;
    document.querySelectorAll('.gallery figure').forEach(fig=>{
      fig.classList.toggle('hidden',!(f==='all'||fig.dataset.cat===f));
    });
  });
});

const lb=document.getElementById('lightbox'),lbImg=document.getElementById('lightboxImg');
document.querySelectorAll('.gallery figure img').forEach(img=>{
  img.addEventListener('click',()=>{
    lbImg.src=img.src; lb.classList.add('open'); lb.setAttribute('aria-hidden','false');
  });
});
document.getElementById('lightboxClose')?.addEventListener('click',()=>{lb.classList.remove('open');lb.setAttribute('aria-hidden','true')});
lb?.addEventListener('click',e=>{if(e.target===lb){lb.classList.remove('open');lb.setAttribute('aria-hidden','true')}});

document.querySelectorAll('.filter').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const f=btn.dataset.filter;
    document.querySelectorAll('.gallery figure').forEach(fig=>{
      fig.classList.toggle('hidden', !(f==='all'||fig.dataset.cat===f));
    });
  });
});

const lb=document.getElementById('lightbox');
const lbImg=document.getElementById('lightboxImg');
document.querySelectorAll('.gallery figure img').forEach(img=>{
  img.addEventListener('click',()=>{
    lbImg.src=img.src;
    lb.classList.add('open');
    lb.setAttribute('aria-hidden','false');
  });
});
document.getElementById('lightboxClose')?.addEventListener('click',()=>{
  lb.classList.remove('open');
  lb.setAttribute('aria-hidden','true');
});
lb?.addEventListener('click',e=>{
  if(e.target===lb){
    lb.classList.remove('open');
    lb.setAttribute('aria-hidden','true');
  }
});
