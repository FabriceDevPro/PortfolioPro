document.addEventListener("DOMContentLoaded", function () {
  const bannerData1 = [
    {
      image: "slide1.png",
      tagLine: "Certificat <span>OpenClassroom</span>",
      link: "https://openclassrooms.com/fr/course-certificates/9310339984",
      //Certificat formation Créez votre site web avec HTML5 et CSS3
      //https://openclassrooms.com/fr/course-certificates/9310339984
    },
    {
      image: "slide2.png",
      tagLine: "Certificat <span>OpenClassroom</span>",
      link: "https://openclassrooms.com/fr/course-certificates/5836623145",
      //Certificat formation Créez votre site web avec HTML5 et CSS3
      //https://openclassrooms.com/fr/course-certificates/9310339984
    },
    {
      image: "slide3.png",
      tagLine: "Certificat <span>OpenClassroom</span>",
      link: "https://openclassrooms.com/fr/course-certificates/6770250279",
    },
    {
      image: "slide4.png",
      tagLine: "Certificat <span>OpenClassroom</span>",
      link: "https://openclassrooms.com/fr/course-certificates/3962581562",
    },
    {
      image: "slide5.png",
      tagLine: "Certificat <span>OpenClassroom</span>",
      link: "https://openclassrooms.com/fr/course-certificates/3962581562",
    },
    {
      image: "slide6.png",
      tagLine: "Certificat <span>OpenClassroom</span>",
      link: "https://openclassrooms.com/fr/course-certificates/3962581562",
    },
    {
      image: "slide7.png",
      tagLine: "Certificat <span>OpenClassroom</span>",
      link: "https://openclassrooms.com/fr/course-certificates/3962581562",
    },
    {
      image: "slide8.png",
      tagLine: "Certificat <span>OpenClassroom</span>",
      link: "https://openclassrooms.com/fr/course-certificates/3962581562",
    },
    {
      image: "slide9.png",
      tagLine: "Certificat <span>OpenClassroom</span>",
      link: "https://openclassrooms.com/fr/course-certificates/3962581562",
    },
    {
      image: "slide10.png",
      tagLine: "Certificat <span>OpenClassroom</span>",
      link: "https://openclassrooms.com/fr/course-certificates/3962581562",
    },
  ];

  const bannerData2 = [
    {
      image: "slide1.png",
      tagLine: "Projet Réalisé<span>en Formation</span>",
      link: "fabrice-perso.github.io/Riding_Cities/",
    },
    {
      image: "slide2.png",
      tagLine: "Projet Réalisé<span>en Formation</span>",
      link: "fabrice-perso.github.io/Booki/",
    },
    {
      image: "slide3.png",
      tagLine: "Projet Réalisé<span>en Formation</span>",
      link: "fabrice-perso.github.io/OhMyFood/",
    },
    {
      image: "slide4.png",
      tagLine: "Projet Réalisé<span>en Formation</span>",
      link: "fabrice-perso.github.io/Print-it-JS/",
    },
    // Ajoutez d'autres diapositives selon vos besoins
  ];

  const bannerData3 = [
    {
      image: "slide1.png",
      tagLine: "Projet Personnel<span>Gestion des Comptes Personnel</span>",
      link: "https://serveur2-maison.synology.me/Gestion_Comptes_Web/Connexion.php",
    },
    {
      image: "slide2.png",
      tagLine: "Projet Personnel<span>Gestion des Comptes Personnel</span>",
      link: "https://serveur2-maison.synology.me/Gestion_Comptes_Web/Connexion.php",
    },
    {
      image: "slide3.png",
      tagLine: "Projet Personnel<span>Gestion des Comptes Personnel</span>",
      link: "https://serveur2-maison.synology.me/Gestion_Comptes_Web/Connexion.php",
    },
    {
      image: "slide5.png",
      tagLine: "Projet Personnel<span>Gestion des Comptes Personnel</span>",
      link: "https://serveur2-maison.synology.me/Gestion_Comptes_Web/Connexion.php",
    },
  ];

  function initializeBanner(bannerId, slidesData) {
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

    function updateBanner() {
      const currentSlide = slidesData[currentIndex];
      const bannerId = banner.getAttribute("id"); // Obtenir l'ID de la bannière
      const slideshowNumber = bannerId.match(/\d+/); // Extraire le numéro de la bannière

      bannerImage.src = `./assets/img/slideshow${slideshowNumber}/${currentSlide.image}`;
      bannerText.innerHTML = currentSlide.tagLine;

      // Mettez à jour les dots uniquement dans ce conteneur spécifique
      const dots = dotsContainer.querySelectorAll(".dot");
      dots.forEach((dot, index) => {
        if (index === currentIndex) {
          dot.classList.add("dot_selected");
        } else {
          dot.classList.remove("dot_selected");
        }
      });

      bannerImage.addEventListener("click", () => {
        window.open(currentSlide.link, "_blank");
        // Créez un élément d'image pour afficher l'image
        const imageElement = document.createElement("img");
        imageElement.src = imageUrl;

        // Créez une boîte de dialogue légère (modal)
        const modal = document.createElement("div");
        modal.className = "modal";
        modal.appendChild(imageElement);

        // Ajoutez la boîte de dialogue légère à la page
        document.body.appendChild(modal);

        // Fermez la boîte de dialogue légère lorsque vous cliquez dessus
        modal.addEventListener("click", () => {
          modal.remove();
        });
      });
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

    updateBanner();
  }

  // Initialisation de chaque bannière
  initializeBanner("banner1", bannerData1);
  initializeBanner("banner2", bannerData2);
  initializeBanner("banner3", bannerData3);
});
