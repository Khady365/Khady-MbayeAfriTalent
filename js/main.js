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

// 1. CONFIGURATION DE L'ANIMATION DU COMPTEUR
let anim   = (cpt) => {
let target = +cpt.getAttribute('data-target'); // Récupère le nombre cible 
let Vitesse = 80; // Vitesse de l'animation 
  
let miseajour = () => {
let act = +cpt.innerText;
let incrementation = Math.ceil(target / Vitesse); // Calcule le pas d'incrémentation

    if ( act < target) {
      cpt.innerText =  act + incrementation;
      setTimeout(miseajour, 25); // Fréquence de mise à jour 25ms
    } else {
      cpt.innerText = target; // Assure que le chiffre final est exact
    }
  };

  miseajour();
};

// 2. CONFIGURATION DE L'INTERSECTION OBSERVER (Détection au scroll)
let sta = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    // Si la carte de statistique apparaît à l'écran
    if (entry.isIntersecting) {
      let cpt = entry.target;
      anim (cpt); // Lance l'animation de chiffres
      observer.unobserve(cpt); // Arrête d'observer pour ne le faire qu'une seule fois
    }
  });
}, { threshold: 0.2 }); // Se déclenche quand 20% de la carte est visible

// 3. SELECTION ET RECHERCHE DES COMPTEURS DANS TON CODE
document.querySelectorAll('.cpt').forEach(cpt => {
  sta.observe(cpt);
});

// 1. On crée le vigile l'observateur
let  fond = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    // Si la section entre dans le viewport visible à au moins 10%
    if (entry.isIntersecting) {
      entry.target.classList.add('visible'); // On applique l'effet CSS
      observer.unobserve(entry.target); // On arrête d'observer pour garder la section visible
    }
  });
}, {
  threshold: 0.1 // Déclenche l'effet dès que 10% de la section est visible
});

// 2. On cible toutes nos sections et on les donne à surveiller au vigile
document.querySelectorAll('.fondu').forEach(section => {
  fond.observe(section);
});


// 1. Sélection des éléments
let filtreboutons = document.querySelectorAll('.filtre');
let  cartef = document.querySelectorAll('.cartefiltre');

// 2. Écoute du clic sur chaque bouton
filtreboutons.forEach(button => {
  button.addEventListener('click', () => {
    
    // A. Gérer le style actif sur les boutons
    filtreboutons.forEach(btn => {
      btn.classList.remove('btn-primary', 'active');
      btn.classList.add('btn-outline-primary');
    });
    button.classList.remove('btn-outline-primary');
    button.classList.add('btn-primary', 'active');

    // B. Logique de filtrage des cartes
    let selecFiltre = button.getAttribute('data-filter');

    cartef.forEach(card => {
      let categorie = card.getAttribute('data-category');

      // Si le filtre est "all" ou si la catégorie correspond, on affiche, sinon on cache
      if (selecFiltre === 'all' || selecFiltre === categorie) {
        card.classList.remove('is-hidden'); // Rend la carte visible
      } else {
        card.classList.add('is-hidden');    // Masque la carte
      }
    });
  });
});



// On stocke le formulaire dans une variable
let formulaireContact = document.getElementById('contactForm');

// Vérification s'il existe sur la page actuelle avant de lui ajouter l'écouteur
if (formulaireContact) {
  formulaireContact.addEventListener('submit', function (e) {
    // 1. Bloquer le rechargement de la page
    e.preventDefault();
    
    // 2. Sélection de tes éléments
    let prenom = document.getElementById('prenom');
    let nom = document.getElementById('nom');
    let email = document.getElementById('exampleFormControlInput1');
    let sujet = document.getElementById('sujet');
    let message = document.getElementById('exampleFormControlTextarea1');
    let success = document.getElementById('succes');

    let valideform = true;

    // --- VALIDATION PRÉNOM ---
    if (prenom.value.trim() === "") {
      prenom.classList.add('is-invalid');
      valideform = false;
    } else {
      prenom.classList.remove('is-invalid');
      prenom.classList.add('is-valid');
    }

    // --- VALIDATION NOM ---
    if (nom.value.trim() === "") {
      nom.classList.add('is-invalid');
      valideform = false;
    } else {
      nom.classList.remove('is-invalid');
      nom.classList.add('is-valid');
    }

    // --- VALIDATION EMAIL (REGEX) ---
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    let erreur = document.getElementById('emailerreur');

    if (email.value.trim() === "") {
      erreur.innerText = "L'adresse email est requise.";
      email.classList.add('is-invalid');
      valideform = false;
    } else if (!emailRegex.test(email.value.trim())) {
      erreur.innerText = "Le format de l'email n'est pas valide (ex: nom@exemple.com).";
      email.classList.add('is-invalid');
      valideform = false;
    } else {
      email.classList.remove('is-invalid');
      email.classList.add('is-valid');
    }

    // --- VALIDATION SUJET (<select>) ---
    if (sujet.value === "") {
      sujet.classList.add('is-invalid');
      valideform = false;
    } else {
      sujet.classList.remove('is-invalid');
      sujet.classList.add('is-valid');
    }

    // --- VALIDATION MESSAGE (MIN 20 CARACTÈRES) ---
    let messageTxt = message.value.trim();
    let messageErreur = document.getElementById('messageErreur');

    if (messageTxt === "") {
      messageErreur.innerText = "Le message ne peut pas être vide.";
      message.classList.add('is-invalid');
      valideform = false;
    } else if (messageTxt.length < 20) {
      messageErreur.innerText = `Le message est trop court (${messageTxt.length}/20 caractères minimum).`;
      message.classList.add('is-invalid');
      valideform = false;
    } else {
      message.classList.remove('is-invalid');
      message.classList.add('is-valid');
    }

    // --- TRAITEMENT FINAL ---
    if (valideform) {
      // Afficher l'alerte de succès
      success.classList.remove('d-none');
      
      // Réinitialiser tout le formulaire
      this.reset();
      
      // Retirer les contours verts de validation
      prenom.classList.remove('is-valid');
      nom.classList.remove('is-valid');
      email.classList.remove('is-valid');
      sujet.classList.remove('is-valid');
      message.classList.remove('is-valid');
    } else {
      // Masquer le succès si l'utilisateur re-soumet avec des erreurs
      success.classList.add('d-none');
    }
  });
}
// 1. L'année dynamique Toujours présente sur toutes les pages grâce au footer
let Annee = document.getElementById('annee');
if (Annee) {
    Annee.textContent = new Date().getFullYear();
}