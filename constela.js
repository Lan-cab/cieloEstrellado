const estrellasEspeciales = document.querySelectorAll('.estrella.especial');
const mensajeDiv = document.getElementById('mensaje');

estrellasEspeciales.forEach(estrella => {
    estrella.addEventListener('mouseenter', () => {
        const texto = estrella.getAttribute('data-mensaje');
        mensajeDiv.textContent = texto;
        mensajeDiv.style.opacity = 1;
    });

    estrella.addEventListener('mouseleave', () => {
        mensajeDiv.style.opacity = 0;
    });
});