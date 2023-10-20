// Fonction pour faire défiler vers le haut de la page
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Pour un défilement fluide
  });
}

// Afficher ou masquer le bouton en fonction de la position de défilement
window.addEventListener("scroll", function () {
  var btnScrollToTop = document.getElementById("btnScrollToTop");

  if (document.documentElement.scrollTop > 50) {
    btnScrollToTop.style.display = "block";
  } else {
    btnScrollToTop.style.display = "none";
  }
});
