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

