import { writable } from 'svelte/store';

const filter = writable([
    {
        title:'category',
        options:{
            all:[
                {name:'rent/buy', value:'rent/buy'},
                {name:'buy', value:'buy'},
            ],
            active:0
        }            
    },
    {
        title:'location',
        options:{
            all:[
                {name:'new york', value:'new york'},
                {name:'old panvel', value:'old panvel'},
            ],
            active:0
        }            
    },
    {
        title:'type',
        options:{
            all:[
                {name:'house', value:'house'},
                {name:'flat', value:'flat'},
            ],
            active:0
        }            
    },
    {
        title:'price',
        options:{
            all:[
                {name:'IDR/month', value:'IDR/month'},
                {name:'flat', value:'flat'},
            ],
            active:0
        }            
    },
]
);

export default filter;