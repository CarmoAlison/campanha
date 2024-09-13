function openGallery() {
    const modal = document.getElementById('galleryModal');
    modal.style.display = 'flex';

    // Adiciona um listener de clique fora do modal
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeGallery();
        }
    });

    // Adiciona um listener de tecla Esc
    window.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeGallery();
        }
    });
}

function closeGallery() {
    const modal = document.getElementById('galleryModal');
    modal.style.display = 'none';
}
