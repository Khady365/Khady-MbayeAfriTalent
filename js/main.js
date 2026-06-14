// Attendre que toute la page soit chargée avant d'exécuter le JavaScript
addEventListener("load", () => {
  // On récupère le bouton du mode sombre
  let sombre = document.querySelector("#sombre");
  // On récupère la barre de navigation
  let navbar = document.querySelector(".nav");
  // Cette fonction active le mode sombre du site
  function activerModeSombre() {
    // Applique le style du mode sombre à toute la page
    document.body.classList.add("bg");
    // Sélection des différents éléments de la page à modifier en mode sombre
    let titres = document.querySelectorAll(".h1");
    let liens = document.querySelectorAll(".nav a");
    let accordion = document.querySelectorAll(".accordion-item");
    let accordionbt = document.querySelectorAll(".accordion-button");
    let accordionbody = document.querySelectorAll(".accordion-body");
    let cartes = document.querySelectorAll(".carte");
    let cartePro = document.querySelector(".carte7");
    // Changer la couleur de fond générale de la page
    document.body.style.backgroundColor = "#111827";
    // Parcourir tous les liens de la navbar et les mettre en blanc
    titres.forEach(titre => {
      titre.style.color = "white";
    });

    if (navbar) {
      navbar.style.backgroundColor = "#1f2937";
    }

    liens.forEach(lien => {
      lien.style.color = "white";
    });
    // Modifier le style de chaque élément de l'accordéon
    accordion.forEach(item => {
      item.style.backgroundColor = "#1f2937";
      item.style.border = "1px solid #374151";
      item.style.color = "white";
    });
    // Modifier le style des boutons de l'accordéon
    accordionbt.forEach(button => {
      button.style.backgroundColor = "#1f2937";
      button.style.color = "white";
    });
    // Modifier le fond et la couleur du texte des contenus de l'accordéon
    accordionbody.forEach(body => {
      body.style.backgroundColor = "#111827";
      body.style.color = "white";
    });
    // Parcourir toutes les cartes et appliquer le style sombre
    cartes.forEach(carte => {
      carte.style.backgroundColor = "#1f2937";
      carte.style.color = "white";
      carte.style.border = "1px solid #374151";
    });
    // Modifier spécialement la carte principale
    if (cartePro) {
      cartePro.style.backgroundColor = "#2563eb";
      cartePro.style.color = "white";
      cartePro.style.border = "2px solid #60a5fa";
    }
    // Changer l'icône du bouton pour afficher la lune
    if (sombre) {
      sombre.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
  }
  // Fonction qui permet d'activer le mode clair
  function activerModeClair() {
    // Retirer la classe du mode sombre du body
    document.body.classList.remove("bg");
    // Sélectionner les éléments à modifier
    let titres = document.querySelectorAll(".h1");
    let liens = document.querySelectorAll(".nav a");
    let accordion = document.querySelectorAll(".accordion-item");
    let accordionbt = document.querySelectorAll(".accordion-button");
    let accordionbody = document.querySelectorAll(".accordion-body");
    let cartes = document.querySelectorAll(".carte");
    let cartePro = document.querySelector(".carte7");
    // Remettre le fond de la page en blanc
    document.body.style.backgroundColor = "white";
    // Parcourir tous les titres et les mettre en noir
    titres.forEach(titre => {
      titre.style.color = "black";
    });
    // Vérifier que la navbar existe puis remettre son fond en blanc
    if (navbar) {
      navbar.style.backgroundColor = "white";
    }
    // Mettre tous les liens de la navbar en noir
    liens.forEach(lien => {
      lien.style.color = "black";
    });
    // Modifier le style des éléments de l'accordéon
    accordion.forEach(item => {
      item.style.backgroundColor = "white";
      item.style.border = "1px solid #dee2e6";
      item.style.color = "black";
    });
    // Modifier le style des boutons de l'accordéon
    accordionbt.forEach(button => {
      button.style.backgroundColor = "white";
      button.style.color = "black";
    });
    // Modifier le contenu de l'accordéon
    accordionbody.forEach(body => {
      body.style.backgroundColor = "white";
      body.style.color = "black";
    });
    // Remettre toutes les cartes en mode clair
    cartes.forEach(carte => {
      carte.style.backgroundColor = "white";
      carte.style.color = "black";
      carte.style.border = "1px solid #dee2e6";
    });
    // Modifier le style de la carte principale 
    if (cartePro) {
      cartePro.style.backgroundColor = "white";
      cartePro.style.color = "black";
      cartePro.style.border = "2px solid #2563eb";
    }
    // Changer l'icône du bouton pour afficher le soleil
    if (sombre) {
      sombre.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
  }

  // Charger le thème sauvegardé
  let theme = localStorage.getItem("theme");
  // Vérifier le thème enregistré et l'appliquer au chargement de la page
  if (theme === "sombre") {
    activerModeSombre();
  } else {
    activerModeClair();
  }

  // Bouton mode sombre
  if (sombre) {
    // Ajouter un événement de clic sur le bouton
    sombre.addEventListener("click", () => {
      // Si le mode sombre est déjà activé
      if (document.body.classList.contains("bg")) {
        // Revenir au mode clair
        activerModeClair();
        // Sauvegarder le mode clair dans le navigateur
        localStorage.setItem("theme", "clair");
        // Activer le mode sombre
      } else {
        // Sauvegarder le mode sombre dans le navigateur
        activerModeSombre();
        localStorage.setItem("theme", "sombre");
      }
    });
  }

});

// navbar qui change au scroll
// Exécuter ce code lorsque l'utilisateur fait défiler la page
addEventListener('scroll', function () {
  // Sélectionner la barre de navigation
  let navbar = document.querySelector('.nav');
  // Si le défilement dépasse 50 pixels
  if (scrollY > 50) {
    // Ajouter une classe CSS à la navbar
    navbar.classList.add('scrolled');
  } else {
    // Retirer cette classe si on revient en haut
    navbar.classList.remove('scrolled');
  }
});
// Bouton retour en haut
// Sélectionner le bouton de retour en haut
let haut = document.getElementById('retour');

// 1. Afficher ou cacher le bouton selon le scroll
addEventListener('scroll', function () {
  // Si on descend de plus de 200 pixels
  if (scrollY > 200) {
    // Afficher le bouton
    haut.classList.add('show');
  } else {
    // Masquer le bouton
    haut.classList.remove('show');
  }
});

// 2. Action de retour en haut lors du clic
haut.addEventListener('click', function () {
  // Faire remonter la page tout en haut avec une animation fluide
  scrollTo({
    top: 0,
    behavior: 'smooth' /* Pour un défilement fluide vers le haut */
  });
});

// 1. CONFIGURATION DE L'ANIMATION DU COMPTEUR
// Fonction qui anime les chiffres des statistiques
let anim = (cpt) => {
  // Récupérer le nombre final à atteindre
  let target = +cpt.getAttribute('data-target'); // Récupère le nombre cible 
  let Vitesse = 80; // Vitesse de l'animation 
  // Fonction qui met à jour le compteur progressivement 
  let miseajour = () => {
    // Récupérer la valeur actuelle affichée
    let act = +cpt.innerText;
    let incrementation = Math.ceil(target / Vitesse); // Calcule le pas d'incrémentation
    // Vérifier si le compteur n'a pas encore atteint la valeur finale
    if (act < target) {
      // Ajouter l'incrément au compteur
      cpt.innerText = act + incrementation;
      setTimeout(miseajour, 25); // Fréquence de mise à jour 25ms
    } else {
      cpt.innerText = target; // Assure que le chiffre final est exact
    }
  };
  // Lancer l'animation
  miseajour();
};

// 2. CONFIGURATION DE L'INTERSECTION OBSERVER (Détection des compteur au scroll)
// Créer un observateur qui surveille l'apparition des compteurs
let sta = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    // Si la carte de statistique apparaît à l'écran
    if (entry.isIntersecting) {
      let cpt = entry.target;
      anim(cpt); // Lance l'animation de chiffres
      observer.unobserve(cpt); // Arrête d'observer pour ne le faire qu'une seule fois
    }
  });
}, { threshold: 0.2 }); // Se déclenche quand 20% de la carte est visible

// Sélectionner tous les compteurs et commencer leur observation
document.querySelectorAll('.cpt').forEach(cpt => {
  sta.observe(cpt);
});
// animation d'apparition des sections
// 1.Créer un observateur pour les sections à faire apparaître
let fond = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    // Si la section apparaît dans la fenêtre
    if (entry.isIntersecting) {
      entry.target.classList.add('visible'); //  Ajouter la classe visible pour lancer l'animation CSS
      observer.unobserve(entry.target); // On arrête d'observer pour garder la section visible
    }
  });
}, {
  // Déclencher l'effet lorsque 10 % de la section est visible
  threshold: 0.1 // Déclenche l'effet dès que 10% de la section est visible
});

// 2.  Observer toutes les sections ayant la classe "fondu"
document.querySelectorAll('.fondu').forEach(section => {
  fond.observe(section);
});

// Filtrage de cartes
// 1. Sélection des éléments
// Sélectionner les boutons de filtre
let filtreboutons = document.querySelectorAll('.filtre');
// Sélectionner les cartes à filtrer
let cartef = document.querySelectorAll('.cartefiltre');

// 2.  Ajouter un événement de clic sur chaque bouton
filtreboutons.forEach(button => {
  button.addEventListener('click', () => {

    // Remettre tous les boutons dans leur style normal
    filtreboutons.forEach(btn => {
      btn.classList.remove('btn-primary', 'active');
      btn.classList.add('btn-outline-primary');
    });
    // Mettre en évidence le bouton sélectionné
    button.classList.remove('btn-outline-primary');
    button.classList.add('btn-primary', 'active');

    // Récupérer le filtre choisi
    let selecFiltre = button.getAttribute('data-filter');
    // Parcourir toutes les cartes
    cartef.forEach(card => {
      // Récupérer la catégorie de la carte
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


// formulaire de contact
// On stocke le formulaire dans une variable
let formulaireContact = document.getElementById('contactForm');
// Vérification s'il existe sur la page actuelle avant de lui ajouter l'écouteur
if (formulaireContact) {
  // Exécuter ce code lorsque l'utilisateur envoie le formulaire
  formulaireContact.addEventListener('submit', function (e) {
    // 1. // Empêcher le rechargement automatique de la page
    e.preventDefault();

    // 2. Sélectionner les différents champs du formulaire
    let prenom = document.getElementById('prenom');
    let nom = document.getElementById('nom');
    let email = document.getElementById('exampleFormControlInput1');
    let sujet = document.getElementById('sujet');
    let message = document.getElementById('exampleFormControlTextarea1');
    let success = document.getElementById('succes');
    // Variable qui permet de savoir si le formulaire est valide
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
    // Expression régulière utilisée pour vérifier le format de l'email
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    // Sélectionner la zone d'affichage des erreurs
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
    // Récupérer le texte du message
    let messageTxt = message.value.trim();
    // Zone d'affichage des erreurs du message
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
      // Masquer le message de succès s'il y a des erreurs
      success.classList.add('d-none');
    }
  });
}
// 1. L'année dynamique Toujours présente sur toutes les pages grâce au footer
// Sélectionner l'élément qui affiche l'année
let Annee = document.getElementById('annee');
// afficher automatiquement l'année actuelle
if (Annee) {
  Annee.textContent = new Date().getFullYear();
}