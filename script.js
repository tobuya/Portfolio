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

const about = document.createElement('li');
ul.appendChild(about);
about.classList.add('menu-container');
const aboutLink = document.createElement('a');
about.appendChild(aboutLink);
aboutLink.textContent = 'About';
aboutLink.href = '#information';
aboutLink.classList.add('menu-text');

const contact = document.createElement('li');
ul.appendChild(contact);
contact.classList.add('menu-container');
const contactLink = document.createElement('a');
contact.appendChild(contactLink);
contactLink.textContent = 'Contact';
contactLink.href = '#contact-me';
contactLink.classList.add('menu-text');

function displayMobileMenu() {
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');
  main.classList.add('index');
  footer.classList.add('index');
  menuSection.innerHTML = '';
  menuSection.appendChild(mobileMenu);
}

function removeMobileMenu() {
  menuSection.replaceChild(navigation, mobileMenu);
}

function displayPortfolioSection() {
  mobileMenu.classList.remove('mobile-menu');
  removeMobileMenu();
  window.location.reload(true);
}

menuAnchor.addEventListener('click', displayMobileMenu);
portfolioLink.addEventListener('click', displayPortfolioSection);
aboutLink.addEventListener('click', displayPortfolioSection);
contactLink.addEventListener('click', displayPortfolioSection);
cross.addEventListener('click', displayPortfolioSection);