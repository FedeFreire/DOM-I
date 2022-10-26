const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')


//------------------- NAV BAR //

const navBar = document.querySelectorAll('nav a');
navBar[0].textContent = "Services";
navBar[1].textContent = "Product";
navBar[2].textContent = "Vision";
navBar[3].textContent = "Features";
navBar[4].textContent = "About";
navBar[5].textContent = "Contact";

siteContent.nav["nav-item-1"] = navBar[0];
siteContent.nav["nav-item-2"] = navBar[1];
siteContent.nav["nav-item-3"] = navBar[2];
siteContent.nav["nav-item-4"] = navBar[3];
siteContent.nav["nav-item-5"] = navBar[4];
siteContent.nav["nav-item-6"] = navBar[5];

navBar[0].classList.add("italic")
navBar[1].classList.add("italic")
navBar[2].classList.add("italic")
navBar[3].classList.add("italic")
navBar[4].classList.add("italic")
navBar[5].classList.add("italic")

// IMGS

const logo = document.querySelector('#logo-img');
logo.setAttribute('src', "http://localhost:9000/img/logo.png")

// CTA

const cta = document.querySelector('#cta-img');
cta.setAttribute('src', "http://localhost:9000/img/cta.png")

let ctaTextH1 = document.querySelectorAll('.cta-text h1');
ctaTextH1[0].textContent = "DOM Is Awesome"
let ctaTextButton = document.querySelectorAll('.cta-text button');
ctaTextButton[0].textContent = "Get Started"

let mainContentH4 = document.querySelectorAll(".main-content h4");

mainContentH4[0].textContent = "Features";
mainContentH4[1].textContent = "About";
mainContentH4[2].textContent = "Services";
mainContentH4[3].textContent = "Product";
mainContentH4[4].textContent = "Vision";

let midImg = document.querySelector('#middle-img');
midImg.src = 'http://localhost:9000/img/accent.png'


let mainContentP = document.querySelectorAll(".main-content P");

mainContentP[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
mainContentP[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
mainContentP[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
mainContentP[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
mainContentP[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let contact = document.querySelector('.contact').children;
contact[0].textContent = 'Contact';
contact[1].textContent = '123 Way 456 Street Somewhere, USA';
contact[2].textContent = '1 (888) 888-8888';
contact[3].textContent = 'sales@greatidea.io';

let footer = document.querySelector('footer').children;

footer[0].classList.add('bold')
footer[0].textContent = 'Copyright Great Idea! 2021'


// const featuresH4 = document.querySelector('.text-content h4');
// featuresH4.textContent = "Features";
// const featuresP = document.querySelector('.text-content p');
// featuresP.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

// const featuresH4 = document.querySelector('.text-content h4');
// featuresH4.textContent = "Features";
// const featuresP = document.querySelector('.text-content p');
// featuresP.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

// const featuresH4 = document.querySelector('.text-content h4');
// featuresH4.textContent = "Features";
// const featuresP = document.querySelector('.text-content p');
// featuresP.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

// const featuresH4 = document.querySelector('.text-content h4');
// featuresH4.textContent = "Features";
// const featuresP = document.querySelector('.text-content p');
// featuresP.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

// const featuresH4 = document.querySelector('.text-content h4');
// featuresH4.textContent = "Features";
// const featuresP = document.querySelector('.text-content p');
// featuresP.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";


