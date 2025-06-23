const contactToggle = document.getElementById('contactToggle');
const contactDropdown = document.getElementById('contactDropdown');
const contactToggleMobile = document.getElementById('contactToggleMobile');
const contactDropdownMobile = document.getElementById('contactDropdownMobile');
const burgerOpen = document.getElementById('burgerOpen');
const burgerClose = document.getElementById('burgerClose');
const mobileMenu = document.getElementById('mobileMenu');
const menuBackdrop = document.getElementById('menuBackdrop');


burgerOpen?.addEventListener('click', (e) => {
  e.stopPropagation();
  mobileMenu.classList.add('open');
  menuBackdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
});


function closeMobileMenu() {
  mobileMenu.classList.remove('open');
  menuBackdrop.classList.remove('active');
  document.body.style.overflow = '';
}
burgerClose?.addEventListener('click', closeMobileMenu);
menuBackdrop?.addEventListener('click', closeMobileMenu);




contactToggle?.addEventListener('click', (e) => {
  e.stopPropagation();
  contactDropdown.classList.toggle('open');
  contactToggle.querySelector('.contact-btn-arrow').style.transform =
    contactDropdown.classList.contains('open') ? 'rotate(180deg)' : '';
});


contactToggleMobile?.addEventListener('click', (e) => {
  e.stopPropagation();
  contactDropdownMobile.classList.toggle('open');
  contactToggleMobile.querySelector('.contact-btn-arrow').style.transform =
    contactDropdownMobile.classList.contains('open') ? 'rotate(180deg)' : '';
});


window.addEventListener('click', (e) => {
  
  if (window.innerWidth > 600) {
    if (
      contactDropdown &&
      contactDropdown.classList.contains('open') &&
      !e.target.closest('#contactToggle') &&
      !e.target.closest('#contactDropdown')
    ) {
      contactDropdown.classList.remove('open');
      contactToggle.querySelector('.contact-btn-arrow').style.transform = '';
    }
  } else {
    
    if (
      contactDropdownMobile &&
      contactDropdownMobile.classList.contains('open') &&
      !e.target.closest('#contactToggleMobile') &&
      !e.target.closest('#contactDropdownMobile')
    ) {
      contactDropdownMobile.classList.remove('open');
      contactToggleMobile.querySelector('.contact-btn-arrow').style.transform = '';
    }
    
    if (
      mobileMenu &&
      mobileMenu.classList.contains('open') &&
      !e.target.closest('#mobileMenu') &&
      !e.target.closest('#burgerOpen')
    ) {
      closeMobileMenu();
    }
  }
});