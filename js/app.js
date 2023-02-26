import {
    modal
} from './modal.js';

import {
    onScrollNav
} from './navigation.js';

import {
    onHamb
} from './hamburger.js';

import {
    createArtworks
} from './data/artworks.js';

import {
    createRoadmaps
} from './data/roadmap.js';

import {
    createTeamMember
} from './data/team.js';

import {
    createFAQ
} from './data/faq.js';


window.addEventListener('DOMContentLoaded', () => {
    modal();
    createArtworks();
    createRoadmaps();
    createTeamMember();
    createFAQ();
    onScrollNav();
    onHamb();
});