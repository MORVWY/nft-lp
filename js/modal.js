export function modal() {
    const button = document.querySelectorAll('.open-modal'),
        modalWindow = document.querySelector('.modal');

    function openModal() {
        modalWindow.classList.remove('hidden');
        document.body.classList.add('overflowHidden');
    }

    function closeModal(e) {
        const target = e.target;
        if (target.classList.contains('modal') || target.classList.contains('item__close')) {
            modalWindow.classList.add('hidden');
            document.body.classList.remove('overflowHidden');
        }
    }

    button.forEach((item) => {
        item.addEventListener('click', openModal);
    });

    document.addEventListener('click', closeModal)
}