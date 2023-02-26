function createRoadmaps() {
    class RoadmapCards {
        constructor(label, perc, title, content, adv1, adv2, adv3, parentSelector) {
            this.label = label;
            this.perc = perc;
            this.title = title;
            this.content = content;
            this.adv1 = adv1;
            this.adv2 = adv2;
            this.adv3 = adv3;
            this.parent = document.querySelector(parentSelector);
        }

        render() {
            const element = document.createElement('div');
            element.classList.add('cards-item');
            element.classList.add('item');

            element.innerHTML = `
            <div class="item-top">
                <div class="item-top__label">${this.label}</div>
                <div class="item-top__circle"><span>${this.perc}</span></div>
            </div>

            <h3 class="item__title">${this.title}</h3>
            <p class="item__description">${this.content}</p>

            <hr class="item__divider">

            <div class="item-advantages advantages">
                <div class="advantages-item">
                    <div class="advantages-item__icon"><img src="images/roadmap/done.svg" alt="done icon"></div>
                    <div class="advantages-item__text">${this.adv1}</div>
                </div>

                <div class="advantages-item">
                    <div class="advantages-item__icon"><img src="images/roadmap/done.svg" alt="done icon"></div>
                    <div class="advantages-item__text">${this.adv2}</div>
                </div>

                <div class="advantages-item">
                    <div class="advantages-item__icon"><img src="images/roadmap/done.svg" alt="done icon"></div>
                    <div class="advantages-item__text">${this.adv3}</div>
                </div>
            </div>`;

            this.parent.append(element);
        }
    }

    new RoadmapCards(
        'Phase 01',
        '0%',
        'Planning',
        'Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.',
        'Release website and logo',
        'Grow community',
        'Launch the project',
        '.roadmap .cards'
    ).render();

    new RoadmapCards(
        'Phase 02',
        '25%',
        'Production',
        'Starting the production on the procedurally generated planets and the smart contract for minting.',
        'Release website and logo',
        'Grow community',
        'Launch the project',
        '.roadmap .cards'
    ).render();

    new RoadmapCards(
        'Phase 03',
        '50%',
        'Launch',
        'Our most active community members will be able to join the whitelist so they can discover, collect and sell their NFT.',
        'Release website and logo',
        'Grow community',
        'Launch the project',
        '.roadmap .cards'
    ).render();

    new RoadmapCards(
        'Phase 04',
        '75%',
        'Minting',
        'Per-Sale Minting is opened forr our Whitelisted members. The price for whitelist minting will be 0.5 SOL.',
        'Release website and logo',
        'Grow community',
        'Launch the project',
        '.roadmap .cards'
    ).render();

    new RoadmapCards(
        'Phase 05',
        '99%',
        'New NFTs',
        'Typesetting industry when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        'Release website and logo',
        'Grow community',
        'Launch the project',
        '.roadmap .cards'
    ).render();
    
    new RoadmapCards(
        'Phase 06',
        '100%',
        'Metaverse',
        'A complete account of the system, and expound the actual teachings of the great explorer of the truth.',
        'Release website and logo',
        'Grow community',
        'Launch the project',
        '.roadmap .cards'
    ).render();
}

export {
    createRoadmaps
};