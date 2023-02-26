function createTeamMember() {
    class MemberCards {
        constructor(avatar, userName, job, parentSelector) {
            this.avatar = avatar;
            this.userName = userName;
            this.job = job;
            this.parent = document.querySelector(parentSelector);
        }

        render() {
            const element = document.createElement('div');
            element.classList.add('cards-item');
            element.classList.add('item');

            element.innerHTML = `
            <div class="item-avatar"><img class="item-avatar__image" src=${this.avatar}
            alt="avatar image"></div>
            <div class="item__name">${this.userName}</div>
            <div class="item__job">${this.job}</div>
    
            <div class="item-links">
                <a class="item-links__icon" href="https://twitter.com/"><img src='images/artists/social/twitter.svg'
                        alt="twitter icon"></a>
                <a class="item-links__icon" href="https://discord.com/"><img src='images/artists/social/discord.svg'
                        alt="discord icon"></a>
                <a class="item-links__icon" href="https://www.instagram.com/"><img src='images/artists/social/instagram.svg'
                        alt="instagram icon"></a>
            </div>`;

            this.parent.append(element);
        }
    }

    new MemberCards(
        'images/artists/01.png',
        'Steph Jobs',
        'Artist',
        '.artists .cards'
    ).render();

    new MemberCards(
        'images/artists/02.png',
        'Andry Moray',
        'Artist',
        '.artists .cards'
    ).render();

    new MemberCards(
        'images/artists/03.png',
        'Zaid Ed',
        'Artist',
        '.artists .cards'
    ).render();

    new MemberCards(
        'images/artists/04.png',
        'Laila Ed',
        'Artist',
        '.artists .cards'
    ).render();

    new MemberCards(
        'images/artists/05.png',
        'John Clark',
        'Artist',
        '.artists .cards'
    ).render();
}

export {
    createTeamMember
};