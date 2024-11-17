let currentExpandedCard = null;

function toggleInfo(selectedCard) {
    // Si ya hay una tarjeta expandida, colapsarla
    if (currentExpandedCard && currentExpandedCard !== selectedCard) {
        currentExpandedCard.classList.remove('expanded');
    }
    
    // Alternar la clase 'expanded' en la tarjeta seleccionada
    selectedCard.classList.toggle('expanded');
    
    // Si la tarjeta seleccionada está expandida, actualiza currentExpandedCard
    currentExpandedCard = selectedCard.classList.contains('expanded') ? selectedCard : null;
}
// Funcionamiento del Boton
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}