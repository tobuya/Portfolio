const menuSection = document.querySelector('#header-section');
const menuAnchor = document.querySelector('.menu');
const navigation = document.querySelector('.toolbar');

const body = document.querySelector('body');
const modalContainer = document.createElement('div');
const popup = document.createElement('div');
const multiPostBtn = document.querySelector('.right-btn');
const cardBtn = document.querySelectorAll('.action');
const multiPostBtnDesktop = document.querySelector('.desktop-btn');
const cardBtnDesktop = document.querySelector('.desktop-project-btn');

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

//popup
const projects = [
  {
    projectName: 'Multi-Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    featuredImage: 'stories.svg',
    technologies: ['html', 'Bootstrap', 'Ruby on rails'],
    live: 'https://tobuya.github.io/Portfolio/',
    source: 'https://github.com/tobuya/Portfolio',
    seeLiveText: 'See Live',
    seeLiveImg: 'see-live.svg',
    seeSourceText: 'See Source',
    seeSourceImg: 'see-source.svg',
    closeIcon: 'icon-cross.svg'
  },
  {
    projectName: `Profesional Art <br> Printing Data`,
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
    featuredImage: 'cardwork.svg',
    technologies: ['html', 'bootstrap', 'Ruby'],
    live: 'https://tobuya.github.io/Portfolio/',
    source: 'https://github.com/tobuya/Portfolio'
  },
  {
    projectName: 'Keeping track of hundreds  of components website',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    featuredImage: ['desktop-snap.svg', 'bg-one.svg'],
    technologies: ['html', 'Bootstrap', 'Ruby on rails'],
    live: 'https://tobuya.github.io/Portfolio/',
    source: 'https://github.com/tobuya/Portfolio'
  }
];
