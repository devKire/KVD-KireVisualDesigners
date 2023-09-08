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