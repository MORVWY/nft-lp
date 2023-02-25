import {
    modal
} from './modal.js';

import {
    onScrollNav
} from './navigation.js';

import {
    increaseNumbers
} from './counter.js';

window.addEventListener('DOMContentLoaded', () => {
    modal();
    onScrollNav();
    increaseNumbers();
});