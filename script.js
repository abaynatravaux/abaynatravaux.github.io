const menu=document.querySelector('.menu');
const nav=document.querySelector('.nav nav');
menu?.addEventListener('click',()=>{nav.classList.toggle('open')});
document.querySelectorAll('.nav nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const id=a.getAttribute('href');if(id.length>1){const el=document.querySelector(id);if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth'})}}}));

document.getElementById('contactForm').addEventListener('submit',e=>{
 e.preventDefault();
 const f=new FormData(e.currentTarget);
 const subject=encodeURIComponent('Demande de devis — ABAYNA TRAVAUX');
 const body=encodeURIComponent(`Nom: ${f.get('name')}\nEmail: ${f.get('email')}\nTéléphone: ${f.get('phone')}\nProjet: ${f.get('project')}\n\nMessage:\n${f.get('message')}`);
 window.location.href=`mailto:contact@abayna-travaux.ma?subject=${subject}&body=${body}`;
});
