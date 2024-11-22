let slideIndex = 0;
const slides = document.querySelectorAll('.content');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slideIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
        slide.style.display = i === slideIndex ? 'flex' : 'none';
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === slideIndex);
    });
}

function nextSlide() {
    showSlide(slideIndex + 1);
}

function prevSlide() {
    showSlide(slideIndex - 1);
}

function setCurrentSlide(index) {
    showSlide(index);
}

// Auto slide every 20 seconds
setInterval(nextSlide, 20000);

// Initial display
showSlide(slideIndex);
// Funcionamiento del Boton
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
//Funcionamiento del los botones del Iphone
document.querySelectorAll('.color-circle').forEach(circle => {
    circle.addEventListener('click', function() {
        // Obtén la nueva imagen y el nuevo texto desde los atributos data-image y data-text
        const newImage = this.getAttribute('data-image');
        const newText = this.getAttribute('data-text');
        
        // Cambia la imagen mostrada
        const iphoneImage = document.getElementById('iphoneImage');
        iphoneImage.src = newImage;
        
        // Cambia el texto mostrado
        const iphoneText = document.getElementById('iphoneText');
        iphoneText.textContent = newText;

        // Actualiza el estilo para resaltar el círculo seleccionado
        document.querySelectorAll('.color-circle').forEach(c => c.classList.remove('selected'));
        this.classList.add('selected');
    });
});
document.querySelectorAll('.colors-circles').forEach(circle => {
    circle.addEventListener('click', function() {
        // Obtén la nueva imagen y el nuevo texto desde los atributos data-image y data-text
        const newImage = this.getAttribute('data-image');
        const newText = this.getAttribute('data-text');
        
        // Cambia la imagen mostrada
        const samsungImage = document.getElementById('samsungImage');
        samsungImage.src = newImage;
        
        // Cambia el texto mostrado
        const samsungText = document.getElementById('samsungText');
        samsungText.textContent = newText;

        // Actualiza el estilo para resaltar el círculo seleccionado
        document.querySelectorAll('.colors-circles').forEach(c => c.classList.remove('selected'));
        this.classList.add('selected');
    });
});
