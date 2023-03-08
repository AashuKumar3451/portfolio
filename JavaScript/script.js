// DOM Manipulation for "projectCatalog"
let projectCardDetails =
    [
        { image: 'Imgs/p1.png', alternate: 'Portfolio', topic: 'Portfolio', decription: 'Other Portfolio', hoverDeatils: 'Other Portfolio for showcasing my skills', link: 'https://aashuyourwebdeveloper.netlify.app/' },

        { image: 'Imgs/p2.png', alternate: 'MoviaK', topic: 'MoviaK', decription: 'Your free streaming plateform', hoverDeatils: 'Movies, Series and much more fun', link: 'https://moviakfree.netlify.app/' },

        { image: 'Imgs/p3.png', alternate: 'PostMaster', topic: 'PostMaster', decription: 'Post and get data from server easily', hoverDeatils: 'Getting and recieving data with a very simple process', link: 'https://postmaster4u.netlify.app/' },

        { image: 'Imgs/p4.png', alternate: 'AK Travel Agency', topic: 'AK Travel Agency', decription: 'Plan your holidays with our flights', hoverDeatils: 'Setting a proper form with all validations', link: 'https://aktravelagency.netlify.app/' },

        { image: 'Imgs/p5.png', alternate: 'Portfolio2', topic: 'Other Portfolio', decription: 'Other details about me', hoverDeatils: 'A neon dark website with other details of mine', link: 'https://aashuportfolio.netlify.app/' },

        { image: 'Imgs/p6.png', alternate: 'Magic Notes', topic: 'Magic Notes', decription: 'Write everything you want to remember', hoverDeatils: 'Your to-do-list and a personal diary', link: 'https://yourmagicnotes.netlify.app/' },

        { image: 'Imgs/p7.png', alternate: 'FAST Library', topic: 'FAST Library', decription: 'A library in your pocket', hoverDeatils: 'Everything a librarian need', link: 'https://fastlibrary.netlify.app/' },
    ];

let projectCatalog = document.getElementById('projectCatalog');
let str = '';
projectCardDetails.forEach((element) => {
    str += `  
    <div class="projectCard">
        <div class="projectImage">
            <img src="${element.image}" alt="${element.alternate}">
            <div class="imageDescription">
                <h1 class="complementry commonFont center">${element.topic}</h1>
                <p class="black otherFont center">${element.decription}</p>
            </div>
        </div>
        <div class="projectDescription">
            <p class="center commonFont neutral">${element.hoverDeatils}</p>
            <a href="${element.link}" class="visitSite otherFont" target="_blank">Visit Site</a>
        </div>
    </div>`;
});

projectCatalog.innerHTML = str;


// DOM Manipulation for "serviceCatalog"
let serviceCardDetails = [
    { image: "Imgs/design.png", alternate: "Designing", title: "Designing", description: "I will design you websites of your intrest." },
    { image: "Imgs/maintaining.png", alternate: "Maintaining", title: "Maintaining", description: "I will maintain you site for you with new libraries and stuff." },
    { image: "Imgs/brain.png", alternate: "Brain", title: "Brain", description: "I will give brain to your website thorugh javascript." },
    { image: "Imgs/backend.png", alternate: "Backend", title: "Backend", description: "I can also design website with backend to get information from server or to send it." },
];
let serviceCatalog = document.getElementById('serviceCatalog');
str = '';
serviceCardDetails.forEach((element) => {
    str += `
            <div class="serviceCard">
                    <div class="serviceImageAndHeading">
                        <div class="serviceImage">
                            <img src="${element.image}" alt="${element.alternate}">
                        </div>
                        <div class="serviceTitle">
                            <h1 class="center complementry commonFont">${element.title}</h1>
                        </div>
                    </div>
                    <div class="serviceDescription">
                        <p class="center otherFont black">${element.description}</p>
                    </div>
            </div>  
    `;
});
serviceCatalog.innerHTML = str;



// DOM Manipulation for "pricingCatalog"
let pricingCatalogDetails = [
    { image: "IMGs/basic.png", alternate: "Basic", title: "Basic", responsiveDesign: "&#10004;", sourceFile: "&#10004;", convertion: "&#10006;", noOfPages: "1", revisions: "1", delievery: "2 Days", amount: "$100/Month", subscribeId: "subscribeBasic" },
    { image: "IMGs/standard.png", alternate: "Standard", title: "Standard", responsiveDesign: "&#10004;", sourceFile: "&#10004;", convertion: "&#10004;", noOfPages: "5", revisions: "2", delievery: "3 Days", amount: "$200/Month", subscribeId: "subscribeStandard" },
    { image: "IMGs/premium.png", alternate: "Premium", title: "Premium", responsiveDesign: "&#10004;", sourceFile: "&#10004;", convertion: "&#10004;", noOfPages: "10", revisions: "2", delievery: "4 Days", amount: "$400/Month", subscribeId: "subscribePremium" },
];
let pricingCatalog = document.getElementById('pricingCatalog');
str = '';
pricingCatalogDetails.forEach((element) => {
    str += `
    <div class="pricingCard">
        <div class="pricingImage">
            <img src="${element.image}" alt="${element.alternate}">
        </div>
        <div class="pricingTitle">
            <h1 class="center commonFont complementry">${element.title}</h1>
        </div>
        <div class="pricingDetails gray">
            <h2 class="otherFont center">Responsive Design : <span>${element.responsiveDesign}</span></h2>
            <h2 class="otherFont center">Source File : <span>${element.sourceFile}</span></h2>
            <h2 class="otherFont center">Convert to HTML/CSS : <span>${element.convertion}</span></h2>
            <h2 class="otherFont center">Number of pages or screens: <span>${element.noOfPages}</span></h2>
            <h2 class="otherFont center">Revisions: <span>${element.revisions}</span></h2>
            <h2 class="otherFont center">Delievery Time: <span>${element.delievery}</span></h2>
        </div>
        <div class="pricingAmount">
            <h1 class="center commonFont black light">${element.amount}</h1>
        </div>
        <div class="subscribeBtnClass">
            <a href="#" class="subscribeBtn center otherFont" id="${element.subscribeId}" target="_blank">Subscribe</a>
        </div>
    </div> 
    `;
});
pricingCatalog.innerHTML = str;

// DOM Manipulation for testimonials
let testimonialsCardDetails = [
    { image: "https://source.unsplash.com/100x100?person", alternate: "Emily Reb", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque doloribus autem aperiam earum nostrum omnis blanditiis corporis perspiciatis adipisci nihil. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi vel in ullam totam doloribus dolores atque nisi commodi animi, blanditiis explicabo voluptate.", clientName: "-Emily Reb" },
    { image: "https://source.unsplash.com/100x100?person", alternate: "Emily Reb", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque doloribus autem aperiam earum nostrum omnis blanditiis corporis perspiciatis adipisci nihil. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi vel in ullam totam doloribus dolores atque nisi commodi animi, blanditiis explicabo voluptate.", clientName: "-Emily Reb" },
];
let testimoialCatalog = document.getElementById('testimoialCatalog');
str = '';
testimonialsCardDetails.forEach((element) => {
    str += `
    <div class="testimonialCard">
        <div class="testimonialImage">
            <img src="${element.image}" alt="${element.alternate}">
        </div>
        <div class="testimonialDescription">
            <h4 class="black left otherFont">${element.description}</h4>
            <p class="complementry left commonFont">${element.clientName}</p>
        </div>
    </div>
    `;
});
testimoialCatalog.innerHTML = str;


let fbIcon = document.getElementById('fbIcon');
let instaIcon = document.getElementById('instaIcon');
let mailIcon = document.getElementById('mailIcon');
fbIcon.addEventListener('click', () => {
    window.location.href = "https://www.facebook.com/";
});
instaIcon.addEventListener('click', () => {
    window.location.href = "https://www.instagram.com/";
});


//Scroll Behaviour For Navbar
window.addEventListener('scroll', () => {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 200);
});

//Menu button changed when clicked
let navServices = document.querySelector('#navServices');
let menuBtn = document.getElementById('menuBtn');
menuBtn.addEventListener('click', () => {
    if (menuBtn.innerHTML == `<img src="IMGs/menuLine.png" alt="menu">`) {
        menuBtn.innerHTML = `<img src="IMGs/menuDot.png" alt="menu">`;
        navServices.style.left = '0';
    }
    else {
        menuBtn.innerHTML = `<img src="IMGs/menuLine.png" alt="menu">`;
        navServices.style.left = '100%';
    }
});

//See my Work button
let seeMyWork = document.getElementById('seeMyWork');
