
const body=document.body;
const booking=document.querySelector('.booking-overlay');
const success=document.querySelector('.success-overlay');
const openers=document.querySelectorAll('[data-book]');
const closeBtn=document.querySelector('.modal-close');
const menuBtn=document.querySelector('.menu-btn');
const mobileMenu=document.querySelector('.mobile-menu');
function openBooking(){booking.classList.add('show');booking.setAttribute('aria-hidden','false');body.classList.add('lock');}
function closeBooking(){booking.classList.remove('show');booking.setAttribute('aria-hidden','true');body.classList.remove('lock');}
openers.forEach(x=>x.addEventListener('click',()=>{closeMenu();openBooking()}));
closeBtn?.addEventListener('click',closeBooking);
booking?.addEventListener('click',e=>{if(e.target===booking)closeBooking()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeBooking();closeSuccess();closeMenu()}});
function closeSuccess(){success.classList.remove('show');success.setAttribute('aria-hidden','true');body.classList.remove('lock')}
document.querySelector('[data-close-success]')?.addEventListener('click',closeSuccess);
const form=document.getElementById('bookingForm');
form?.addEventListener('submit',e=>{e.preventDefault();closeBooking();success.classList.add('show');success.setAttribute('aria-hidden','false');body.classList.add('lock');form.reset()});
function closeMenu(){mobileMenu?.classList.remove('show');document.body.classList.remove('lock')}
menuBtn?.addEventListener('click',()=>{mobileMenu.classList.toggle('show');body.classList.toggle('lock')});
mobileMenu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
