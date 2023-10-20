// Récupérer l'élément HTML où vous voulez afficher le texte du copyright
const copyrightText = document.getElementById("copyrightText");

// Obtenir l'année actuelle
const anneeActuelle = new Date().getFullYear();

// Définir l'année de début
const anneeDebut = 2023; // Année de début souhaitée

// Créer le texte du copyright dynamique
let texteCopyright = "&copy; " + anneeDebut;
if (anneeActuelle > anneeDebut) {
  texteCopyright += " - " + anneeActuelle;
}
texteCopyright += " Fabrice Magnan de Bellevue | FabWebProjects.fr | Tous droits réservés";

// Insérer le texte dans l'élément HTML
copyrightText.innerHTML = texteCopyright;
