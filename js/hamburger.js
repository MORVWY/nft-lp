function onHamb() {
    const hamb = document.querySelector('.hamb'),
    nav = document.querySelector('.nav-menu');

    hamb.addEventListener('click', (e) => {

        hamb.classList.toggle('active');
        nav.classList.toggle('activeNav');

        if (document.body.classList.contains('overflowHidden')) {
            document.body.classList.remove('overflowHidden');
        } else {
            document.body.classList.add('overflowHidden');
        }
    });

    document.querySelectorAll('.nav-menu__item').forEach(item => {
        item.addEventListener('click', () => {
            hamb.classList.remove('active');
            nav.classList.remove('activeNav');
        });
    });
}

export {onHamb};