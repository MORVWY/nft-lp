function createArtworks() {
    class ArtworkCards {
        constructor(src, alt, title, author, parentSelector) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.author = author;
            this.parent = document.querySelector(parentSelector);
        }
    
        render() {
            const element = document.createElement('div');
            element.classList.add('cards-item');
    
            element.innerHTML = `
                <div class="cards-item__image"><img src=${this.src} alt=${this.alt}></div>
                <div class="cards-item__tag">${this.title}</div>
                <div class="cards-item__artist">${this.author}</div>`;
    
            this.parent.append(element);
        }
    }
    
    new ArtworkCards(
        'images/artworks/01.jpg',
        'artwork image',
        '#Metaverse',
        'By TheSalvare',
        '.works .cards'
    ).render();

    new ArtworkCards(
        'images/artworks/02.jpg',
        'artwork image',
        '#Polly Doll',
        'By TheSalvare',
        '.works .cards'
    ).render();

    new ArtworkCards(
        'images/artworks/06.jpg',
        'artwork image',
        '#Alec Art',
        'By Georgijevic',
        '.works .cards'
    ).render();

    new ArtworkCards(
        'images/artworks/07.jpg',
        'artwork image',
        '#Toxic Poeth',
        'By Yayoi',
        '.works .cards'
    ).render();

    new ArtworkCards(
        'images/artworks/11.jpg',
        'artwork image',
        '#Saphyre',
        'By CryptoX',
        '.works .cards'
    ).render();

    new ArtworkCards(
        'images/artworks/12.jpg',
        'artwork image',
        '#Charcuterie',
        'By Texira',
        '.works .cards'
    ).render();

    new ArtworkCards(
        'images/artworks/13.jpg',
        'artwork image',
        '#Paradise',
        'By CryptoX',
        '.works .cards'
    ).render();

    new ArtworkCards(
        'images/artworks/16.jpg',
        'artwork image',
        '#HighCity',
        'By TheSalvare',
        '.works .cards'
    ).render();
}

export {createArtworks};