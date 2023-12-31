// scripts.js

function initializeImageClick() {
    var imagens = document.querySelectorAll('.img-sequence');
    var index = 0;

    for (var i = 0; i < imagens.length; i++) {
        imagens[i].addEventListener('click', function () {
            imagens[index].style.opacity = 0;
            index = (index + 1) % imagens.length;
            imagens[index].style.opacity = 1;
        });
    }
}

// Verifica quando o footer deve ser mostrado
window.addEventListener('scroll', () => {
    const footer = document.querySelector('.footer');
    const content = document.querySelector('.content');
    const contentHeight = content.clientHeight;
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;

    if (scrollY + windowHeight >= contentHeight) {
        footer.style.display = 'block';
    } else {
        footer.style.display = 'none';
    }
});

