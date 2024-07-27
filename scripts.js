// Simple JavaScript example (optional)
// document.addEventListener('DOMContentLoaded', function() {
//     console.log('DOM fully loaded and parsed');
    
//     // You can add more functionality here, like event listeners for navigation or form handling
// });

// -------


document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // EmailJS configuration
        const serviceID = 'service_wcu590c';
        const templateID = 'template_5onhr7g';
        const userID = '4ZaBTwoqhW_T6bQFN';

        const templateParams = {
            from_name: document.getElementById('name').value,
            from_email: document.getElementById('email').value,
            message: document.getElementById('message').value,
        };

        emailjs.send(serviceID, templateID, templateParams, userID)
            .then((response) => {
                alert('Email sent successfully!');
                contactForm.reset();
            })
            .catch((error) => {
                alert('Failed to send email. Please try again later.');
                console.error('EmailJS error:', error);
            });
    });
});


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
