// Déclaration des élèments à récupérér pour le carroussel
//// Flèche
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
//// Image
const bannerImage = document.querySelector(".banner-img");
//// Texte
const bannerText = document.querySelector("#banner p");
//// Bullet Point
const dots = document.querySelectorAll(".dot");
//// Déclaration d'un tableau pour gérer les différents images et le texte associé
const slides = [
  {
    image: "slide1.png",
    tagLine: "Projet 2 <span>Premiers pas sur le langage HTML</span>",
    link: "https://fabrice-perso.github.io/Riding_Cities/",
  },
  {
    image: "slide2.png",
    tagLine: "Projet 3 <span>pour vos bureaux et events</span>",
    link: "https://fabrice-perso.github.io/Booki/",
  },
  {
    image: "slide3.png",
    tagLine: "Projet 4 <span>Animation avec du CSS Modernes</span>",
    link: "https://fabrice-perso.github.io/OhMyFood/",
  },
  {
    image: "slide4.png",
    tagLine: "Projet 5 <span>Premiers pas en Javascript</span>",
    link: "https://fabrice-perso.github.io/Print-it-JS/",
  },
];

// Déclaration index initial pour suivre la diapositive actuelle
let currentIndex = 0;

// Fonction MAJ de l'image et le texte
function updateBanner() {
  //Déclaration du chemin de l'image et du texte associé avec une variable "currentIndex" pour effectuer le changement
  const currentSlide = slides[currentIndex];
  bannerImage.src = `./assets/img/slideshow/${slides[currentIndex].image}`;
  bannerText.innerHTML = slides[currentIndex].tagLine;

  // MAJ de la classe des bullet points
  dots.forEach((dot, index) => {
    // si la valeur de l'index=currentindex(numero du selectionné)
    if (index === currentIndex) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });

  // Ajoutez un gestionnaire de clic à l'image pour rediriger vers le lien associé
  bannerImage.addEventListener("click", () => {
    window.open(currentSlide.link, "_blank");
  });
}

// Gestionnaire d'événement pour les bullets points
dots.forEach((dot, index) => {
  //action lors d'un click sur un bullet point
  dot.addEventListener("click", () => {
    currentIndex = index;
    updateBanner();
  });
});

// Action sur la fleche gauche lors du click
arrowLeft.addEventListener("click", () => {
  // Décrémente l'index pour afficher la diapositive précédente
  currentIndex--;
  //si on passe en negatif on repart au numero le plus grand-1 car ca commence à 0
  if (currentIndex < 0) {
    currentIndex = slides.length - 1; // Revenir à la dernière diapositive si nécessaire
  }
  updateBanner();
});

// Action sur la fleche droite lors du click
arrowRight.addEventListener("click", () => {
  // Incrémentez l'index pour afficher la diapositive suivante
  currentIndex++;
  //si on passe depasse le nombre d'image, on repart à la premiere a la position 0
  if (currentIndex >= slides.length) {
    currentIndex = 0; // Revenir à la première diapositive si nécessaire
  }
  updateBanner();
});

// Appelez la fonction pour afficher la première diapositive
updateBanner();

/////////////////////////////////////////////////////
//// Flèche
const arrowLeft2 = document.querySelector("#banner2 .arrow_left");
const arrowRight2 = document.querySelector("#banner2 .arrow_right");
//// Image
const bannerImage2 = document.querySelector("#banner2 .banner-img");
//// Texte
const bannerText2 = document.querySelector("#banner2 p");
//// Bullet Point
const dots2 = document.querySelectorAll("#banner2 .dot");

const slides2 = [
  {
    image: "slide1.png",
    tagLine: "Projet Personnel 1",
    link: "https://serveur2-maison.synology.me/Gestion_Comptes_Web/Connexion.php",
  },
  {
    image: "slide2.png",
    tagLine: "Projet Personnel 2",
    link: "https://serveur2-maison.synology.me/Gestion_Comptes_Web/Connexion.php",
  },
  {
    image: "slide3.png",
    tagLine: "Projet Personnel 3",
    link: "https://serveur2-maison.synology.me/Gestion_Comptes_Web/Connexion.php",
  },
  // Ajoutez d'autres diapositives selon vos besoins
];

function updateBanner2() {
  // Déclaration du chemin de l'image et du texte associé avec la variable "currentIndex" pour effectuer le changement
  const currentSlide2 = slides2[currentIndex];
  bannerImage2.src = `./assets/img/slideshow2/${slides2[currentIndex].image}`;
  bannerText2.innerHTML = slides2[currentIndex].tagLine;

  // MAJ de la classe des bullet points
  dots2.forEach((dot, index) => {
    // Si la valeur de l'index est égale à currentIndex (numéro sélectionné)
    if (index === currentIndex) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });

  // Ajoutez un gestionnaire de clic à l'image pour rediriger vers le lien associé
  bannerImage2.addEventListener("click", () => {
    window.open(currentSlide2.link, "_blank");
  });
}

// Gestionnaire d'événement pour les bullet points de la deuxième bannière
dots2.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    updateBanner2();
  });
});

// Action sur la flèche gauche de la deuxième bannière lors du clic
arrowLeft2.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides2.length - 1;
  }
  updateBanner2();
});

// Action sur la flèche droite de la deuxième bannière lors du clic
arrowRight2.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= slides2.length) {
    currentIndex = 0;
  }
  updateBanner2();
});

// Appelez la fonction pour afficher la première diapositive de la deuxième bannière
updateBanner2();
