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
const multiPostSection = document.querySelector('.right-block');
const listProjects = document.querySelectorAll('.group');

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

window.addEventListener('load', () => {
  multiPostSection.innerHTML = `   
  <h2 class="block-h2">Multi-Post Stories</h2>
  <p class="block-p">A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.</p>
  <div class="block-nav">
      <ul>
          <li class="nav-list nav-language">css</li>
          <li class="nav-list nav-language">html</li>
          <li class="nav-list nav-language" id="bootstrap">bootstrap</li>
          <li class="nav-list nav-language">Ruby</li>
      </ul>
  </div>
  `;
  multiPostSection.append(multiPostBtn);
  multiPostSection.append(multiPostBtnDesktop);
});

window.addEventListener('load', () => {
  listProjects.forEach((group) => {
    group.innerHTML = `
    <h2 class="group-header hide">Profesional Art <br> Printing Data</h2>
    <p class="group-para hide">A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard</p>
    <div>
        <ul class="group-ul hide">
            <li class="group-li">html</li>
            <li class="bootstrap group-li">bootstrap</li>
            <li class="group-li">Ruby</li>
        </ul>
    </div>
    `;
  });
});

// popup
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
    closeIcon: 'icon-cross.svg',
  },
  {
    projectName: 'Profesional Art <br> Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
    featuredImage: 'cardwork.svg',
    technologies: ['html', 'bootstrap', 'Ruby'],
    live: 'https://tobuya.github.io/Portfolio/',
    source: 'https://github.com/tobuya/Portfolio',
  },
  {
    projectName: 'Keeping track of hundreds  of components website',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    featuredImage: ['desktop-snap.svg', 'bg-one.svg'],
    technologies: ['html', 'Bootstrap', 'Ruby on rails'],
    live: 'https://tobuya.github.io/Portfolio/',
    source: 'https://github.com/tobuya/Portfolio',
  },
];

function multiPostStories() {
  body.classList.add('body');
  modalContainer.classList.add('modal-container');
  popup.classList.add('popup');
  popup.innerHTML = `
  <a class='popup-close-link'>
    <img class='popup-close-icon' src='images/${projects[0].closeIcon}' alt='Close Icon'/>
  </a>
  <h3 class='popup-h3'>${projects[0].projectName}</h3>
  <ul class='popup-ul'>
    <li>${projects[0].technologies[0]}</li>
    <li>${projects[0].technologies[1]}</li>
    <li>${projects[0].technologies[2]}</li>
  </ul>
  <img class='popup-img' src='images/${projects[0].featuredImage}' alt='Multi Post Stories'>
  <p class='popup-description'>${projects[0].description}</p>
  <div class='popup-btn-container'>
      <button>
        <p class='see-text'>${projects[0].seeLiveText}</p>
        <a href='${projects[0].live}'>
          <img src='images/${projects[0].seeLiveImg}' alt='See Live Icon'>
        </a>
      </button>
      <button>
        <p class='see-text'>${projects[0].seeSourceText}</p>
        <a href='${projects[0].source}'>
          <img src='images/${projects[0].seeSourceImg}' alt='GitHub Icon'>
        </a>
      </button>
  </div>
  `;
  modalContainer.appendChild(popup);
  body.appendChild(modalContainer);

  const close = document.querySelector('.popup-close-link');
  close.addEventListener('click', () => {
    window.location.reload(true);
  });
}

function artPrintingData() {
  body.classList.add('body');
  modalContainer.classList.add('modal-container');
  popup.classList.add('popup', 'modal-container-art');
  popup.innerHTML = `
  <a class='popup-close-link'>
    <img class='popup-close-icon' src='images/${projects[0].closeIcon}' alt='Close Icon'>
  </a>
  <h3 class='popup-h3 art-h3'>${projects[1].projectName}</h3>
  <p class='popup-description art-description'>${projects[1].description}</p>
  <ul class='popup-ul art-ul'>
    <li>${projects[1].technologies[0]}</li>
    <li>${projects[1].technologies[1]}</li>
    <li>${projects[1].technologies[2]}</li>
  </ul>
  <div class='popup-btn-container'>
      <button>
        <p class='see-text'>${projects[0].seeLiveText}</p>
        <a href='${projects[1].live}'>
          <img src='images/${projects[0].seeLiveImg}' alt='See Live Icon'>
        </a>
      </button>
      <button>
        <p class='see-text'>${projects[0].seeSourceText}</p>
        <a href='${projects[1].source}'>
          <img src='images/${projects[0].seeSourceImg}' alt='GitHub Icon'>
        </a>
      </button>
  </div>
  `;
  modalContainer.appendChild(popup);
  body.appendChild(modalContainer);

  const close = document.querySelector('.popup-close-link');
  close.addEventListener('click', () => {
    window.location.reload(true);
  });
}

multiPostBtn.addEventListener('click', multiPostStories);

cardBtn.forEach((card) => {
  card.addEventListener('click', artPrintingData);
});

function desktopPopup() {
  body.classList.add('body');
  modalContainer.classList.add('modal-container');
  popup.classList.add('desktop-popup');
  popup.innerHTML = `
    <a class='popup-close-link'>
      <img class='popup-close-icon' src='images/${projects[0].closeIcon}' alt='Close Icon'/>
    </a>
    <h3 class='desktop-popup-h3'>${projects[2].projectName}</h3>
    <ul class='desktop-popup-ul'>
      <li>${projects[2].technologies[0]}</li>
      <li>${projects[2].technologies[1]}</li>
      <li>${projects[2].technologies[2]}</li>
    </ul>
    <img class='desktop-popup-img' src='images/${projects[2].featuredImage[0]}' alt='Multi Post Stories'>
    <p class='desktop-popup-description'>${projects[2].description}</p>
    <div class='popup-btn-container desktop-btn-div'>
    <button>
      <p class='see-text'>${projects[0].seeLiveText}</p>
      <a href='${projects[0].live}'>
        <img src='images/${projects[0].seeLiveImg}' alt='See Live Icon'>
      </a>
    </button>
    <button>
      <p class='see-text'>${projects[0].seeSourceText}</p>
      <a href='${projects[0].source}'>
        <img src='images/${projects[0].seeSourceImg}' alt='GitHub Icon'>
      </a>
    </button>
</div>
   `;
  modalContainer.appendChild(popup);
  body.appendChild(modalContainer);

  const close = document.querySelector('.popup-close-link');
  close.addEventListener('click', () => {
    window.location.reload(true);
  });
}

multiPostBtnDesktop.addEventListener('click', desktopPopup);

function desktopCardPopup() {
  body.classList.add('body');
  modalContainer.classList.add('modal-container');
  popup.classList.add('desktop-card-popup');
  popup.innerHTML = `
  <a class='popup-close-link'>
    <img class='popup-close-icon' src='images/${projects[0].closeIcon}' alt='Close Icon'/>
  </a>
  <img class='desktop-card-img' src='images/${projects[2].featuredImage[1]}' alt='Multi Post Stories'>
  <div class='popup-btn-container desktop-btn-div desktop-card-div'>
      <button>
        <p class='see-text'>${projects[0].seeLiveText}</p>
        <a href='${projects[0].live}'>
          <img src='images/${projects[0].seeLiveImg}' alt='See Live Icon'>
        </a>
      </button>
      <button>
        <p class='see-text'>${projects[0].seeSourceText}</p>
        <a href='${projects[0].source}'>
          <img src='images/${projects[0].seeSourceImg}' alt='GitHub Icon'>
        </a>
      </button>
  </div>
  `;
  modalContainer.appendChild(popup);
  body.appendChild(modalContainer);

  const close = document.querySelector('.popup-close-link');
  close.addEventListener('click', () => {
    window.location.reload(true);
  });
}
cardBtnDesktop.addEventListener('click', desktopCardPopup);

// Form validation
function validateEmail() {
  const emailAddress = document.getElementById('mail').value;
  const regularExp = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
  document.forms[0].onsubmit = (e) => {
    if (regularExp.test(emailAddress)) {
      document.getElementById('error-message').innerHTML = '';
    } else {
      document.getElementById('error-message').innerHTML = 'Please enter the email in lower case';
      document.getElementById('error-message').style.color = 'red';
      e.preventDefault();
    }
  };
}
document.getElementById('button').addEventListener('click', validateEmail);

  //Local Storage
  const form = document.querySelector('form');
  const userName = document.getElementById('fname');
  const userEmail = document.getElementById('mail');
  const userMessage = document.getElementById('textarea');
  form.addEventListener('input', () => {
    const userFormData = {
      username: userName.value,
      email: userEmail.value,
      message: userMessage.value
    }
});


  
