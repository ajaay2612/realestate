import { writable } from 'svelte/store';


const lenisStore = writable({
    store:null,
    onScroll:null
});

export default lenisStore;