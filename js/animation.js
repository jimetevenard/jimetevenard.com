/**
 * div de titre
 */
const blocTitre = document.querySelector('#bloc-titre');

/**
 * Gris le plus foncé (pour rgb 0 - 255)
 */
const GRAY_BASE_LEVEL = 230;

/**
 * Différenrence calculé entre le blanc et notre gris
 */
const GRAY_DIFF_TO_WHITE = 255 - GRAY_BASE_LEVEL;

/**
 * Ratio de scroll par rapport à la taille du ViewPort
 */
var srollRatio;

/**
 * Applique l'animation au scroll
 */
function applyLayout(){

    var newRatio = Math.min(window.scrollY / window.innerHeight, 1);

    if(newRatio !== srollRatio){
        srollRatio = newRatio;

        applyHeightBlocTitre();
        applyGrayBackground();
    }
}

/**
 * Applique la taille du bloc titre
 */
function applyHeightBlocTitre(){
    const halfSize = window.innerHeight / 2;
    const newSize = window.innerHeight - halfSize * srollRatio
    const newSizeCss = `${Math.floor(newSize)}px`;

    blocTitre.style.height = newSizeCss;
}

/**
 * Applique le gris
 */
function applyGrayBackground(){
    const newGray = GRAY_DIFF_TO_WHITE * srollRatio + GRAY_BASE_LEVEL;
    const newGrayCSS = `rgb(${newGray},${newGray},${newGray})`;

    document.body.style.backgroundColor = newGrayCSS;
}

// Au scroll
document.addEventListener('scroll', applyLayout);

// Au chargement de la page
applyLayout();