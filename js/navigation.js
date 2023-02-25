function onScrollNav() {
    const nav = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        if (!nav.classList.contains('scroll-header-bg')) {
            nav.classList.add('scroll-header-bg');
        }
    });

    window.addEventListener('scroll', () => {
        if (window.pageYOffset == 0) {
            nav.classList.remove('scroll-header-bg');
        }
    });
}

export {
    onScrollNav
};