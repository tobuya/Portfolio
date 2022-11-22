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

const ul = document.createElement('ul');
ul.id = 'ul';
mobileMenu.appendChild(ul);

const portfolio = document.createElement('li');
ul.appendChild(portfolio);
portfolio.classList.add('menu-container');
const portfolioLink = document.createElement('a');
portfolio.appendChild(portfolioLink);
portfolioLink.textContent = 'Portfolio';
portfolioLink.href = '#portfolio';
portfolioLink.classList.add('menu-text');
