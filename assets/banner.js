document.addEventListener("DOMContentLoaded", function () {
  const bannerData1 = [
    {
      image: "slide1.png",
      tagLine: "Certificats Obtenu avec<span>OpenClassroom</span>",
      link: "https://openclassrooms.com/fr/course-certificates/9310339984",
      //Certificat formation Créez votre site web avec HTML5 et CSS3
      //https://openclassrooms.com/fr/course-certificates/9310339984
    },
    {
      image: "slide2.png",
      tagLine: "Certificats Obtenu avec<span>OpenClassroom</span>",
      link: "https://openclassrooms.com/fr/course-certificates/5836623145",
      //Certificat formation Créez votre site web avec HTML5 et CSS3
      //https://openclassrooms.com/fr/course-certificates/9310339984
    },
    {
      image: "slide3.png",
      tagLine: "Certificats Obtenu avec<span>OpenClassroom</span>",
      link: "https://openclassrooms.com/fr/course-certificates/6770250279",
    },
    {
      image: "slide4.png",
      tagLine: "Certificats Obtenu avec<span>OpenClassroom</span>",
      link: "https://openclassrooms.com/fr/course-certificates/3962581562",
    },
    {
      image: "slide5.png",
      tagLine: "Certificats Obtenu avec<span>OpenClassroom</span>",
      link: "https://openclassrooms.com/fr/course-certificates/3962581562",
    },
    {
      image: "slide6.png",
      tagLine: "Certificats Obtenu avec<span>OpenClassroom</span>",
      link: "https://openclassrooms.com/fr/course-certificates/3962581562",
    },
    {
      image: "slide7.png",
      tagLine: "Certificats Obtenu avec<span>OpenClassroom</span>",
      link: "https://openclassrooms.com/fr/course-certificates/3962581562",
    },
    {
      image: "slide8.png",
      tagLine: "Certificats Obtenu avec<span>OpenClassroom</span>",
      link: "https://openclassrooms.com/fr/course-certificates/3962581562",
    },
    {
      image: "slide9.png",
      tagLine: "Certificats Obtenu avec<span>OpenClassroom</span>",
      link: "https://openclassrooms.com/fr/course-certificates/3962581562",
    },
    {
      image: "slide10.png",
      tagLine: "Certificats Obtenu avec<span>OpenClassroom</span>",
      link: "https://openclassrooms.com/fr/course-certificates/3962581562",
    },
  ];

  const bannerData2 = [
    {
      image: "slide1.png",
      tagLine: "Projet Réalisés<span>en Formation</span>",
      link: "pages/Formation/Projet_Formation2.html",
      //"https://fabrice-perso.github.io/Riding_Cities/",
    },
    {
      image: "slide2.png",
      tagLine: "Projet Réalisés<span>en Formation</span>",
      link: "pages/Formation/Projet_Formation3.html",
      //link: "fabrice-perso.github.io/Booki/",
    },
    {
      image: "slide3.png",
      tagLine: "Projet Réalisés<span>en Formation</span>",
      link: "pages/Formation/Projet_Formation4.html",
      //link: "fabrice-perso.github.io/OhMyFood/",
    },
    {
      image: "slide4.png",
      tagLine: "Projet Réalisés<span>en Formation</span>",
      link: "pages/Formation/Projet_Formation5.html",
      //link: "fabrice-perso.github.io/Print-it-JS/",
    },
    // Ajoutez d'autres diapositives selon vos besoins
  ];

  const bannerData3 = [
    {
      image: "slide1.png",
      tagLine: "Projet Personnel<span>Gestion des Comptes Personnel</span>",
      link: "pages/Personnel/Projet_Personnel1.html",
      //link: "https://serveur2-maison.synology.me/Gestion_Comptes_Web/Connexion.php",
    },
    {
      image: "slide2.png",
      tagLine: "Projet Personnel<span>Gestion des Comptes Personnel</span>",
      link: "pages/Personnel/Projet_Personnel1.html",
      //link: "https://serveur2-maison.synology.me/Gestion_Comptes_Web/Connexion.php",
    },
    {
      image: "slide3.png",
      tagLine: "Projet Personnel<span>Gestion des Comptes Personnel</span>",
      link: "pages/Personnel/Projet_Personnel1.html",
      //link: "https://serveur2-maison.synology.me/Gestion_Comptes_Web/Connexion.php",
    },
    {
      image: "slide5.png",
      tagLine: "Projet Personnel<span>Gestion des Comptes Personnel</span>",
      link: "pages/Personnel/Projet_Personnel1.html",
      //link: "https://serveur2-maison.synology.me/Gestion_Comptes_Web/Connexion.php",
    },
  ];

  function initializeBanner(bannerId, slidesData, startDelay = 0) {
    const banner = document.querySelector(`#${bannerId}`);
    if (!banner) return; // Vérifier si la bannière existe

    //// Flèche
    const arrowLeft = banner.querySelector(".arrow_left");
    const arrowRight = banner.querySelector(".arrow_right");
    //// Image
    const bannerImage = banner.querySelector(".banner-img");
    //// Texte
    const bannerText = banner.querySelector("p");
    //// Bullet Point
    const dotsContainer = banner.querySelector(".dots");

    let currentIndex = 0;
    let timer; // Timer pour le changement automatique
    let seconds = 10; // Temps en secondes pour le changement automatique

    // Fonction pour changer de diapositive
    function changeSlide() {
      currentIndex++;
      if (currentIndex >= slidesData.length) {
        currentIndex = 0;
      }
      updateBanner();
    }

    // Fonction pour réinitialiser le timer
    function resetTimer() {
      clearInterval(timer);
      timer = setInterval(() => {
        if (seconds === 0) {
          // console.log(`Bannière ${bannerId}: Nouvelle image`);
          changeSlide();
          // console.log(`Bannière ${bannerId}: ${currentIndex}`);
          seconds = 10;
        } else {
          // console.log(`Bannière ${bannerId}: ${seconds} secondes - Image ${currentIndex}`);
          seconds--;
        }
      }, 1000);
    }
    // Initialisation de la bannière
    function updateBanner() {
      const currentSlide = slidesData[currentIndex];
      const bannerId = banner.getAttribute("id");
      const slideshowNumber = bannerId.match(/\d+/);

      // Appliquer la classe de transition avant de mettre à jour l'image
      bannerImage.classList.add("slide-transition");

      bannerImage.style.transform = "scaleX(0)";
      setTimeout(() => {
        bannerImage.src = `./assets/img/slideshow${slideshowNumber}/${currentSlide.image}`;
        bannerImage.style.transform = "scaleX(1)";
      }, 500);

      bannerText.innerHTML = currentSlide.tagLine;

      // Mettez à jour le lien avec la valeur du lien de la diapositive actuelle
      const linkElement = banner.querySelector(".banner-link");
      linkElement.href = currentSlide.link;

      const dots = dotsContainer.querySelectorAll(".dot");
      dots.forEach((dot, index) => {
        if (index === currentIndex) {
          dot.classList.add("dot_selected");
        } else {
          dot.classList.remove("dot_selected");
        }
      });

      resetTimer(); // Réinitialiser le timer lors du changement de diapositive
    }

    // Générez automatiquement les points en fonction du nombre de diapositives
    slidesData.forEach((_, index) => {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      dot.addEventListener("click", () => {
        currentIndex = index;
        updateBanner();
      });
      dotsContainer.appendChild(dot);
    });

    if (arrowLeft) {
      arrowLeft.addEventListener("click", () => {
        currentIndex--;
        if (currentIndex < 0) {
          currentIndex = slidesData.length - 1;
        }
        updateBanner();
      });
    }

    if (arrowRight) {
      arrowRight.addEventListener("click", () => {
        currentIndex++;
        if (currentIndex >= slidesData.length) {
          currentIndex = 0;
        }
        updateBanner();
      });
    }

    // Initialisation de la première diapositive et du timer avec un délai
    setTimeout(() => {
      updateBanner();
      resetTimer();
    }, startDelay * 1000);
  }

  // Initialisation des bannières avec des délais différents
  initializeBanner("banner1", bannerData1, 0); // Pas de délai pour la première bannière
  initializeBanner("banner2", bannerData2, 1); // Démarre après 1 seconde
  initializeBanner("banner3", bannerData3, 2); // Démarre après 2 secondes
});
