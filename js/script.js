// // =========================================
// // MENÚ RESPONSIVE
// // =========================================

// const menuToggle = document.getElementById("menuToggle");
// const navLinks = document.getElementById("navLinks");

// menuToggle.addEventListener("click", () => {
//     navLinks.classList.toggle("active");
// });


// // =========================================
// // CERRAR MENÚ AL SELECCIONAR UNA SECCIÓN
// // =========================================

// const links = document.querySelectorAll(".nav-links a");

// links.forEach((link) => {

//     link.addEventListener("click", () => {

//         navLinks.classList.remove("active");

//     });

// });


// // =========================================
// // AÑO AUTOMÁTICO DEL FOOTER
// // =========================================

// const year = document.getElementById("year");

// year.textContent = new Date().getFullYear();


// // =========================================
// // ANIMACIÓN DE APARICIÓN
// // =========================================

// const observerOptions = {
//     threshold: 0.15
// };

// const observer = new IntersectionObserver(
//     (entries) => {

//         entries.forEach((entry) => {

//             if (entry.isIntersecting) {

//                 entry.target.classList.add("visible");

//             }

//         });

//     },
//     observerOptions
// );


// const animatedElements = document.querySelectorAll(
//     ".tech-card, .interest-card, .project-card, .about-highlight"
// );

// animatedElements.forEach((element) => {

//     element.style.opacity = "0";
//     element.style.transform = "translateY(20px)";
//     element.style.transition =
//         "opacity 0.6s ease, transform 0.6s ease";

//     observer.observe(element);

// });


// // =========================================
// // CLASE VISIBLE
// // =========================================

// const style = document.createElement("style");

// style.textContent = `
//     .visible {
//         opacity: 1 !important;
//         transform: translateY(0) !important;
//     }
// `;

// document.head.appendChild(style);