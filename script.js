const menuSection = document.querySelector('#header-section');
const menuAnchor = document.querySelector('.menu');
const navigation = document.querySelector('.toolbar');

const mobileMenu = document.createElement('div');
mobileMenu.classList.add('mobile-menu');

const cross = document.createElement('a');
cross.classList.add('cross-icon');
const crossImg = document.createElement('img');
crossImg.src = 'images/icon-cross.svg';
crossImg.alt = 'Close Icon';
cross.appendChild(crossImg);
mobileMenu.appendChild(cross);
