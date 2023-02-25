function modal() {
    const button = document.querySelectorAll('.open-modal'),
        modalWindow = document.querySelector('.modal'),
        nav = document.querySelector('.header'),
        form = document.querySelector('.form');

    function openModal() {
        modalWindow.classList.remove('hidden');
        nav.classList.add('hide-on-modal');
        document.body.classList.add('overflowHidden');
    }

    function closeModal(event) {
        const target = event.target;

        if (target.classList.contains('modal') || target.classList.contains('item__close')) {

            modalWindow.classList.add('hidden');
            nav.classList.remove('hide-on-modal');
            document.body.classList.remove('overflowHidden');
        }
    }

    button.forEach((item) => {
        item.addEventListener('click', openModal);
    });

    document.addEventListener('click', closeModal);
}

export {
    modal
};