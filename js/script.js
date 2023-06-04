
// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// scroll sections active Link

/* original code
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });
};

*/

// chat GPT 수정코드
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  let currentSectionId = null;
  let scrollPosition = window.scrollY;

  document.querySelectorAll('section').forEach(sec => {
    let sectionOffset = sec.offsetTop - 150;
    let sectionHeight = sec.offsetHeight;

    if (scrollPosition >= sectionOffset && scrollPosition < sectionOffset + sectionHeight) {
      currentSectionId = sec.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    if (link.getAttribute('href').includes(currentSectionId)) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // sticky navbar
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);  

  // remove toggle icon and navbar when click navbar link (scroll)
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};


