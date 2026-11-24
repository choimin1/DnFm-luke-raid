const menuToggle=document.getElementById('menuToggle');
const sidebar=document.getElementById('sidebar');
menuToggle?.addEventListener('click',()=>{const isOpen=sidebar.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(isOpen));menuToggle.firstChild.textContent=isOpen?'목차 닫기 ':'목차 보기 ';});
const navLinks=[...document.querySelectorAll('#toc a')];
navLinks.forEach(a=>a.addEventListener('click',()=>{sidebar.classList.remove('open');menuToggle?.setAttribute('aria-expanded','false');}));
if('IntersectionObserver' in window){const sectionObserver=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){const id=entry.target.id;navLinks.forEach(a=>{const active=a.getAttribute('href')==='#'+id;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});}}},{rootMargin:'-10% 0px -72% 0px',threshold:0});document.querySelectorAll('main section[id]').forEach(el=>sectionObserver.observe(el));}
