
// Simple JavaScript example (optional)
// document.addEventListener('DOMContentLoaded', function() {
//     console.log('DOM fully loaded and parsed');

//     // You can add more functionality here, like event listeners for navigation or form handling
// });

// -------

// Contact form
// document.addEventListener('DOMContentLoaded', function() {
//     const contactForm = document.getElementById('contact-form');

//     contactForm.addEventListener('submit', function(e) {
//         e.preventDefault();

//         // EmailJS configuration
//         const serviceID = 'service_wcu590c';
//         const templateID = 'template_5onhr7g';
//         const userID = '4ZaBTwoqhW_T6bQFN';

//         const templateParams = {
//             from_name: document.getElementById('name').value,
//             from_email: document.getElementById('email').value,
//             message: document.getElementById('message').value,
//         };

//         emailjs.send(serviceID, templateID, templateParams, userID)
//             .then((response) => {
//                 alert('Email sent successfully!');
//                 contactForm.reset();
//             })
//             .catch((error) => {
//                 alert('Failed to send email. Please try again later.');
//                 console.error('EmailJS error:', error);
//             });
//     });
// });

// Culture entrepreneuriale-Partie 1
// const body = document.getElementById("body");
// function cultureEntro(){
//     body.innerHTML = `
//     <header>
//         <h2>My Blog</h2>
//         <nav>
//             <ul>
//                 <li><a href="/index.html">Home</a></li>
//                 <li><a href="/index.html">Cours</a></li>
//                 <li><a href="/about.html">About</a></li>
//                 <li><a href="/contact.html">Contact</a></li>
//             </ul>

//         </nav>
//         <button>Login</button>
//     </header>

//     <section class="container">
//         <h2>Développement Digital</h2>
//         <a href="/devDigital.html">1ere Année: Développement Digital</a>
//         <ul>
//             <li><a href="" onclick="cultureEntro()">Culture entrepreneuriale-Partie 1</a></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//         </ul>

//     </section>

//     <footer>
//         <p>&copy; 2024 My Blog. All rights reserved.</p>
//     </footer>

//     `
// }

// document.getElementById('download-button').addEventListener('click', function() {
//     var link = document.createElement('a');
//     link.href = '/CE P1.pdf';
//     link.download = 'CEP1.pdf';
//     link.click();
// });

// Button chios
const radio1 = document.getElementById("radio1");
const radio2 = document.getElementById("radio2");
const preAnner = document.getElementById("preAnner");
const dexAnner = document.getElementById("dexAnner");
const troiAnner = document.getElementById("troiAnner");
const btnDivision = document.getElementById("btnDivision");
const btnAnner = document.getElementById("btnAnner");
const dAppMobile = document.getElementById("dAppMobile");
const dWebFullStuck = document.getElementById("dWebFullStuck");
const errorBtnClick = document.querySelector(".errorBtnClick");

// cours.html
// Chois divission
function btnCHoisDivision() {
  if (radio1.checked) {
    window.location.href = "chuois.html";
  } else if (radio2.checked) {
    window.location.href = "/Niveau-Technicien/option-niveau-technicien.html";
  } else {
    setTimeout(() => {
      errorBtnClick.classList.add("errorSolved");
    }, 200);
    setTimeout(() => {
      errorBtnClick.classList.remove("errorSolved");
    }, 4000);
  }
}

// Chois d'anner
function btnCHoisAnner() {
  if (preAnner.checked) {
    window.location.href = "/AnnerChios/premieranne.html";
  } else if (dexAnner.checked) {
    window.location.href = "/AnnerChios/dexiemeanne.html";
  } else if (troiAnner.checked) {
    window.location.href = "/AnnerChios/troisiemeAnner.html";
  } else {
    setTimeout(() => {
      errorBtnClick.classList.add("errorSolved");
    }, 200);
    setTimeout(() => {
      errorBtnClick.classList.remove("errorSolved");
    }, 4000);
  }
}

// Developpement digital chois 2eme anner
function btnCHoisdexiemeAnner() {
  if (dWebFullStuck.checked) {
    window.location.href = "developpement-digital-option-web-full-stack.html";
  } else if (dAppMobile.checked) {
    window.location.href =
      "developpement-digital-option-applications-mobiles.html";
  } else {
    setTimeout(() => {
      errorBtnClick.classList.add("errorSolved");
    }, 200);
    setTimeout(() => {
      errorBtnClick.classList.remove("errorSolved");
    }, 4000);
  }
}

// infrastructure digital chois 2eme anner
const infraRS = document.getElementById("infraRS");
const infraIOT = document.getElementById("infraIOT");
const infraCS = document.getElementById("infraCS");
const infraCC = document.getElementById("infraCC");

function btnCHois2emeinfra() {
  if (infraRS.checked) {
    window.location.href = "reseaux-et-systemes.html";
  } else if (infraIOT.checked) {
    window.location.href = "infrastructure-digitale-option-iot.html";
  } else if (infraCS.checked) {
    window.location.href = "cyber-securite.html";
  } else if (infraCC.checked) {
    window.location.href = "cloud-computing.html";
  } else {
    setTimeout(() => {
      errorBtnClick.classList.add("errorSolved");
    }, 200);
    setTimeout(() => {
      errorBtnClick.classList.remove("errorSolved");
    }, 4000);
  }
}

// Gestion des entroprises chois 2eme anner
const gestionCM = document.getElementById("gestionCM");
const gestionCF = document.getElementById("gestionCF");
const gestionRH = document.getElementById("gestionRH");
const gestionOM = document.getElementById("gestionOM");

function btnCHois2emegestionE() {
  if (gestionCM.checked) {
    window.location.href =
      "gestion-des-entreprises-option-commerce-et-marketing-2eme-annee.html";
  } else if (gestionCF.checked) {
    window.location.href =
      "gestion-des-entreprises-option-comptabilite-et-finance-2eme-annee.html";
  } else if (gestionRH.checked) {
    window.location.href =
      "gestion-des-entreprises-option-ressources-humaines-2eme-annee.html";
  } else if (gestionOM.checked) {
    window.location.href =
      "gestion-des-entreprises-option-office-manager-2eme-annee.html";
  } else {
    setTimeout(() => {
      errorBtnClick.classList.add("errorSolved");
    }, 200);
    setTimeout(() => {
      errorBtnClick.classList.remove("errorSolved");
    }, 4000);
  }
}

// Gestion des entroprises chois 3eme anner
const gestionCM3eme = document.getElementById("gestionCM3eme");
const gestionCF3eme = document.getElementById("gestionCF3eme");
const gestionRH3eme = document.getElementById("gestionRH3eme");
const gestionOM3eme = document.getElementById("gestionOM3eme");

function btnCHois3emegestionE() {
  if (gestionCM3eme.checked) {
    window.location.href =
      "gestion-des-entreprises-option-commerce-et-marketing-3eme-annee.html";
  } else if (gestionCF3eme.checked) {
    window.location.href =
      "gestion-des-entreprises-option-comptabilite-et-finance-3eme-annee.html";
  } else if (gestionRH3eme.checked) {
    window.location.href =
      "gestion-des-entreprises-option-ressources-humaines-3eme-annee.html";
  } else if (gestionOM3eme.checked) {
    window.location.href =
      "gestion-des-entreprises-option-office-manager-3eme-annee.html";
  } else {
    setTimeout(() => {
      errorBtnClick.classList.add("errorSolved");
    }, 200);
    setTimeout(() => {
      errorBtnClick.classList.remove("errorSolved");
    }, 4000);
  }
}

// Burger menu
// document.querySelector('.burger').addEventListener('click', () => {
//     const navLinks = document.querySelector('.nav-links');
//     navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
// });

// Header onload
function headerPages() {
  const header = document.querySelector(".header");

  header.innerHTML = `
            <a href="/index.html" class="alien"><img src="/img/logoHeader2.png" alt="ofppt.online"></a>
            <ul class="nav-links">
                <li><a href="/index.html">Accueil</a></li>
                <li><a href="/cours.html">Cours</a></li>
                <li><a href="/EFM/EFM-premiere-anne.html">EFM</a></li>
                <li class="li-parent"><a href="/EFM/EFM-premiere-anne.html">EFF</a> <div class="new-child"><b>New</b></div> </li>
                <li><a href="/about.html">À propos</a></li>
                <li><a href="/contact.html">Contact</a></li>
            </ul>
            <div class="burger">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>
        `;
}

// Footer onload
function footerPages() {
  const footer = document.querySelector(".footer");

  footer.innerHTML = `
<section class="footers">
      <div class="footer-row">
        <div class="footer-col">
          <ul class="links">
            <a href="/index.html"><img src="/img/logoFooter2.png" alt="ofppt.online"></a>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Explore</h4>
          <ul class="links">
            <li><a href="/index.html">Accueil</a></li>
            <li><a href="/cours.html">Cours</a></li>
            <li><a href="/EFM/EFM-premiere-anne.html">EFM</a></li>
            <li><a href="/about.html">à propos</a></li>
            <li><a href="/contact.html">Contact</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Legal</h4>
          <ul class="links">
            <li><a href="/Terms&Conditions.html">Terms & Conditions</a></li>
            <li><a href="/PrivacyPolicy.html">Privacy policy</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Newsletter</h4>
          <p>
            Subscribe to our newsletter for a weekly dose
            of news, updates, helpful tips, and
            exclusive offers.
          </p>
          <form action="https://formspree.io/f/myzyobob" method="post">
            <input type="email" name="email" placeholder="Your email" required>
            <button type="submit">Send</button>
          </form>
          <div class="icons">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-github"></i>
          </div>
        </div>
      </div>
    </section>
    <div class="footer-buttom">
        <p>Copyright © 2024 <span><a href="/index.html">ofppt.online</a></span> All Rights Reserved</p>
    </div>
        `;
}

function headerFog() {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");

    // Correcting the condition to use `window.scrollY` instead of `window.scroll`
    if (window.scrollY > 0) {
      header.classList.add("fog-effect");
    } else {
      header.classList.remove("fog-effect");
    }
  });
}

// Call the function to activate the fog effect
headerFog();

// Niveaux-Technisien -> chois-anner-assistant-administratif.html

function btnCHoisAssistantAdministratif() {
  const AA1ere = document.getElementById("assistant-administratif-1ere");
  const AA2eme = document.getElementById("assistant-administratif-2eme");
  const AA3eme = document.getElementById("assistant-administratif-3eme");

  if (AA1ere.checked) {
    window.location.href = "technicien-assistant-administratif-1ere.html";
  } else if (AA2eme.checked) {
    window.location.href = "assistant-administratif-option-2eme.html";
  } else if (AA3eme.checked) {
    window.location.href = "assistant-administratif-option-3eme.html";
  } else {
    setTimeout(() => {
      errorBtnClick.classList.add("errorSolved");
    }, 200);
    setTimeout(() => {
      errorBtnClick.classList.remove("errorSolved");
    }, 4000);
  }
}

// assistant administratif option 2eme anner
function btnCHoisAAoption2eme() {
  const AA2emeOC = document.getElementById("AA2emeOC");
  const AA2emeOG = document.getElementById("AA2emeOG");
  const AA2emeOCOM = document.getElementById("AA2emeOCOM");

  if (AA2emeOC.checked) {
    window.location.href =
      "assistant-administratif-option-commerce-2eme-annee.html";
  } else if (AA2emeOG.checked) {
    window.location.href =
      "assistant-administratif-option-gestion-2eme-annee.html";
  } else if (AA2emeOCOM.checked) {
    window.location.href =
      "assistant-administratif-option-comptabilite-2eme-annee.html";
  } else {
    setTimeout(() => {
      errorBtnClick.classList.add("errorSolved");
    }, 200);
    setTimeout(() => {
      errorBtnClick.classList.remove("errorSolved");
    }, 4000);
  }
}

// assistant administratif option 3eme anner
function btnCHoisAAoption3eme() {
  const AA3emeOC = document.getElementById("AA3emeOC");
  const AA3emeOG = document.getElementById("AA3emeOG");
  const AA3emeOCOM = document.getElementById("AA3emeOCOM");

  if (AA3emeOC.checked) {
    window.location.href =
      "assistant-administratif-option-commerce-3eme-annee.html";
  } else if (AA3emeOG.checked) {
    window.location.href =
      "assistant-administratif-option-gestion-3eme-annee.html";
  } else if (AA3emeOCOM.checked) {
    window.location.href =
      "assistant-administratif-option-comptabilite-3eme-annee.html";
  } else {
    setTimeout(() => {
      errorBtnClick.classList.add("errorSolved");
    }, 200);
    setTimeout(() => {
      errorBtnClick.classList.remove("errorSolved");
    }, 4000);
  }
}

function btnCHoisEFMinfra() {
  const efmInfraRS = document.getElementById("efmInfraRS");
  const efmInfra1ere = document.getElementById("efmInfra1ere");

  if (efmInfra1ere.checked) {
    window.location.href = "EFM-infrastructure-digitale-1ere.html";
  } else if (efmInfraRS.checked) {
    window.location.href =
      "EFM-Infrastructure-digitale-option-Réseaux-systèmes/options-Réseaux-systèmes.html";
  } else {
    setTimeout(() => {
      errorBtnClick.classList.add("errorSolved");
    }, 200);
    setTimeout(() => {
      errorBtnClick.classList.remove("errorSolved");
    }, 4000);
  }
}

// When you click in lien href (in pages EFM) the page open file in the same page
document.addEventListener("DOMContentLoaded", function () {
  // Sélectionner tous les liens de navigation
  const links = document.querySelectorAll(".nav-link");
  const contentDiv = document.getElementById("content");
  const fileNotFound = document.querySelector(".not-find");

  // Ajouter un événement click à chaque lien
  let previousElement = null;
  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Empêcher le comportement par défaut du lien

      // Change backgroundColor for any link you click in it
      if (previousElement) {
        previousElement.parentElement.parentElement.classList.remove("backCol");
      }
      link.parentElement.parentElement.classList.add("backCol");
      previousElement = link;

      const href = this.getAttribute("href");

      // Charger le fichier ou la page cible en utilisant fetch
      fetch(`/mnt/data/${href}`)
        .then((response) => response.text())
        .then((data) => {
          contentDiv.src = `${href}`; // Afficher l'image ou le contenu

          // else{
          //     link.parentElement.parentElement.classList.remove("backCol");
          // }
          fileNotFound.classList.add("hide-not-found");
          window.scrollBy({
            top: 400,
            behavior: "smooth",
          });
        })
        .catch((error) => {
          contentDiv.innerHTML = "<p>Échec du chargement du contenu.</p>";
          console.error("Erreur:", error);
        });
    });
  });
});



// Search 
const searchList = document.querySelector(".search-list");
const inpSearch = document.getElementById("inp-search");
const searchContent = [];

// Fetch data and populate searchContent with posts
document.addEventListener("DOMContentLoaded", () => {
  fetch("/Data/data.json")
    .then((response) => response.json())
    .then((data) => {
      if (data.sections && Array.isArray(data.sections)) {
        // Flatten sections and store all posts in searchContent
        data.sections.forEach((section) => {
          if (section.posts && Array.isArray(section.posts)) {
            searchContent.push(...section.posts); // Add all posts to searchContent
          }
        });
      }
    });
});

// Function to handle search input and display results
function SearchList() {
  inpSearch.addEventListener("input", () => {
    const query = inpSearch.value.toLowerCase();

    // Filter posts based on title, author, or badge
    const filteredContent = searchContent.filter((post) =>
      post.title.toLowerCase().includes(query) || 
      post.author.toLowerCase().includes(query) || 
      post.badge.toLowerCase().includes(query)
    );

    // Update the search-list div with the filtered results
    if (filteredContent.length > 0 && query) {
      searchList.classList.add("show-list")
      searchList.innerHTML = filteredContent
        .map((post) => {
          return `
            <div class="search-item">
              <img src="${post.image}" alt="${post.title}" />
              <div class="details">
                <p class="title">${post.title}</p>
                <p class="author">${post.author}</p>
                ${post.badge ? `<div class="badge-homepage">${post.badge}</div>` : ""}
                ${post.stats ? `<p class="stats">${post.stats}</p>` : ""}
                <a href="${post.pdf}" target="blanck"><button class="telecharger-homepage">Télécharger maintenant</button></a>
              </div>
            </div>
            
          `;
        })
        .join(""); // Create a list of result items
    } else {

      searchList.classList.remove("show-list");
    }
  });
}

// Initialize search functionality
document.addEventListener("DOMContentLoaded", () => {
  SearchList();
});


// Email
// const btn = document.getElementById('button');

// document.getElementById('form')
//  .addEventListener('submit', function(event) {
//    event.preventDefault();

//    btn.value = 'Sending...';

//    const serviceID = 'service_s7k0y21';
//    const templateID = 'template_5onhr7g';

//    emailjs.sendForm(serviceID, templateID, this)
//     .then(() => {
//       btn.value = 'Send Email';
//       alert('Mesajınız Gönderildi, Teşekkürler!');
//     }, (err) => {
//       btn.value = 'Send Email';
//       alert(JSON.stringify(err));
//     });
// });



