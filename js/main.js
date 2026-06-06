addEventListener("load", () => {
    let sombre = document.querySelector("#sombre");
    let navbar = document.querySelector(".nav");
    function activerModeSombre() {
        document.body.classList.add("bg");

        let titres = document.querySelectorAll(".h1");
        let liens = document.querySelectorAll(".nav a");
        let accordion = document.querySelectorAll(".accordion-item");
        let accordionbt = document.querySelectorAll(".accordion-button");
        let accordionbody = document.querySelectorAll(".accordion-body");
        let cartes = document.querySelectorAll(".carte");
        let cartePro = document.querySelector(".carte7");

        document.body.style.backgroundColor = "#111827";

        titres.forEach(titre => {
            titre.style.color = "white";
        });

        if (navbar) {
            navbar.style.backgroundColor = "#1f2937";
        }

        liens.forEach(lien => {
            lien.style.color = "white";
        });

        accordion.forEach(item => {
            item.style.backgroundColor = "#1f2937";
            item.style.border = "1px solid #374151";
            item.style.color = "white";
        });

        accordionbt.forEach(button => {
            button.style.backgroundColor = "#1f2937";
            button.style.color = "white";
        });

        accordionbody.forEach(body => {
            body.style.backgroundColor = "#111827";
            body.style.color = "white";
        });

        cartes.forEach(carte => {
            carte.style.backgroundColor = "#1f2937";
            carte.style.color = "white";
            carte.style.border = "1px solid #374151";
        });

        if (cartePro) {
            cartePro.style.backgroundColor = "#2563eb";
            cartePro.style.color = "white";
            cartePro.style.border = "2px solid #60a5fa";
        }

        if (sombre) {
            sombre.innerHTML = '<i class="fa-solid fa-moon"></i>';
        }
    }

    function activerModeClair() {
        document.body.classList.remove("bg");
        let titres = document.querySelectorAll(".h1");
        let liens = document.querySelectorAll(".nav a");
        let accordion = document.querySelectorAll(".accordion-item");
        let accordionbt = document.querySelectorAll(".accordion-button");
        let accordionbody = document.querySelectorAll(".accordion-body");
        let cartes = document.querySelectorAll(".carte");
        let cartePro = document.querySelector(".carte7");

        document.body.style.backgroundColor = "white";

        titres.forEach(titre => {
            titre.style.color = "black";
        });

        if (navbar) {
            navbar.style.backgroundColor = "white";
        }

        liens.forEach(lien => {
            lien.style.color = "black";
        });

        accordion.forEach(item => {
            item.style.backgroundColor = "white";
            item.style.border = "1px solid #dee2e6";
            item.style.color = "black";
        });

        accordionbt.forEach(button => {
            button.style.backgroundColor = "white";
            button.style.color = "black";
        });

        accordionbody.forEach(body => {
            body.style.backgroundColor = "white";
            body.style.color = "black";
        });

        cartes.forEach(carte => {
            carte.style.backgroundColor = "white";
            carte.style.color = "black";
            carte.style.border = "1px solid #dee2e6";
        });

        if (cartePro) {
            cartePro.style.backgroundColor = "white";
            cartePro.style.color = "black";
            cartePro.style.border = "2px solid #2563eb";
        }

        if (sombre) {
            sombre.innerHTML = '<i class="fa-solid fa-sun"></i>';
        }
    }

    // Charger le thème sauvegardé
    let theme = localStorage.getItem("theme");

    if (theme === "sombre") {
        activerModeSombre();
    } else {
        activerModeClair();
    }

    // Bouton mode sombre
    if (sombre) {
        sombre.addEventListener("click", () => {

            if (document.body.classList.contains("bg")) {

                activerModeClair();
                localStorage.setItem("theme", "clair");

            } else {

                activerModeSombre();
                localStorage.setItem("theme", "sombre");
            }
        });
    }

});

// navbar qui change au scroll
addEventListener('scroll', function() {
  let navbar = document.querySelector('.nav');
  
  if (scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
let haut = document.getElementById('retour');

// 1. Afficher ou cacher le bouton selon le scroll
addEventListener('scroll', function() {
  if (scrollY > 200) {
    haut.classList.add('show');
  } else {
    haut.classList.remove('show');
  }
});

// 2. Action de retour en haut lors du clic
haut.addEventListener('click', function() {
  scrollTo({
    top: 0,
    behavior: 'smooth' /* Pour un défilement fluide vers le haut */
  });
});
