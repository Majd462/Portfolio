
    document.addEventListener('DOMContentLoaded', (event) => {
    var content = document.getElementById('Element1')
    showContent(content.id)
    Element1.classList.add('highlight')

    var contentwidth = content.offsetWidth;
    var content1 = document.getElementById('widhtelement1');
    var content1width = content1.offsetWidth;
    var content2 = document.getElementById('competence-colonne');
    content2.style.width = content1width+"px";
});


    function showContent(elementId) {
    // Cacher tous les contenus
    var allContents = document.querySelectorAll('.content');
    var triangleContents = document.querySelectorAll('.triangle');
    triangleContents.forEach(function(content) {
    content.style.visibility = 'hidden';
});

    allContents.forEach(function(content) {
    content.style.visibility = 'hidden';
});

    // Afficher le contenu associé à l'élément cliqué
    var contentId = elementId.replace('Element', 'Content');
    var contentTriangleId = elementId.replace('Element', 'Triangle');

    var contentToShow = document.getElementById(contentId);

    if (contentToShow) {
    contentToShow.style.visibility = 'visible';
}



    var contentTriangleToShow = document.getElementById(contentTriangleId);
    if (contentTriangleToShow) {
    contentTriangleToShow.style.visibility = 'visible';
    contentTriangleToShow, document.getElementById(contentId)
}
}

    // Ajouter des écouteurs d'événements à tous les éléments
    var allElements = document.querySelectorAll('.row');
    allElements.forEach(function(element) {


    element.addEventListener('click', function(event) {
        // Empêcher le comportement par défaut du lien
        event.preventDefault();

        // Appliquer la classe 'highlight' à l'élément cliqué
        var currentHighlight = document.querySelector('.highlight');
        if (currentHighlight) {
            currentHighlight.classList.remove('highlight');
        }
        element.classList.add('highlight');

        // Afficher le contenu associé
        showContent(element.id);
        scrollToMiddle(element);
    });
});

    function isElementInMiddle(el) {
    var rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
}

    function handleScroll() {
    var allElements = document.querySelectorAll('.row');
    allElements.forEach(function(element) {
    if (isElementInMiddle(element)) {
    // Appliquer la classe 'highlight' à l'élément au milieu de l'écran
    var currentHighlight = document.querySelector('.highlight');
    if (currentHighlight) {
    currentHighlight.classList.remove('highlight');
}
    element.classList.add('highlight');

    // Afficher le contenu associé
    showContent(element.id);
}
});
}


    window.addEventListener('scroll', handleScroll);

    function scrollToMiddle(element) {
    var elementRect = element.getBoundingClientRect();
    window.scrollTo({
    top: elementRect.top + window.scrollY - (window.innerHeight / 2 - elementRect.height / 2),
    behavior: 'smooth'
});
}
