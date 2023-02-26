function createFAQ() {
    class FaqCards {
        constructor(title, description, parentSelector) {
            this.title = title;
            this.description = description;
            this.parent = document.querySelector(parentSelector);
        }

        render () {
            const element = document.createElement('details');
            element.classList.add('list-item');

            element.innerHTML = `
            <summary class="list-item__header">${this.title}</summary>
            <div class="list-item__content">${this.description}</div>`;

            this.parent.append(element);
        }
    }

    new FaqCards(
        "What is Nerko's NFT Collection?",
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident. Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.',
        '.faq .list'
    ).render();

    new FaqCards(
        "How we can buy and invest NFT?",
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.',
        '.faq .list'
    ).render();

    new FaqCards(
        "Why we should choose Nerko's NFT?",
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.',
        '.faq .list'
    ).render();

    new FaqCards(
        "Where we can buy and sell NFts?",
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.',
        '.faq .list'
    ).render();

    new FaqCards(
        "How secure is this token?",
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.',
        '.faq .list'
    ).render();

    new FaqCards(
        "What is your contract address?",
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.',
        '.faq .list'
    ).render();
}

export {createFAQ};