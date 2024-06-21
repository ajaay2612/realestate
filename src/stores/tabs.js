import { writable } from 'svelte/store';

const tabs = writable({
    all:[
        {
            name: 'home',
            link: '#home'
        },
        {
            name: 'properties',
            link: '#properties'
        },
        {
            name: 'about us',
            link: '#about-us'
        },
        {
            name: 'services',
            link: '#services'
        },
        {
            name: 'contact',
            link: '#contact'
        },
    ],
    active: 0
});

export default tabs;