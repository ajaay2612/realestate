<script>
    import { inView , animate, stagger ,timeline} from "motion"
    import { onMount } from "svelte";
    import { fade, scale, slide } from "svelte/transition"
    import lenisStore from '../stores/lenisStore.js'
    import { tweened } from 'svelte/motion';
    import { cubicOut, expoOut } from 'svelte/easing';

    import AccordionServices from '../components/AccordionServices.svelte'
    

    let customInOut = [1,0,.18,.99]
    let customInOutFast = [.79,-0.01,.34,1]
    let customOut = [.2,.88,.56,1]
    let customFastOut = [.21,.53,.34,1]

    onMount(()=>{

        inView(".servicesSection", (info) => {


            const sequence = [
                [".servicesSubLine", { y:['20%','0'], opacity: [0,1] }, { duration: 1, easing:customOut , delay: stagger(0.15)}],  
                [".accordionItem", { y:['20%','0'], opacity: [0,1], scale:[1.2,1] }, {at:'-0.6', duration: 1, easing:customOut , delay: stagger(0.15)}],  
            ]
            timeline(sequence,{ delay: 0 })

        },{amount:0.2})
    })




</script>




<!-- <section class="h-[100vw] bg-red-200 w-full">

</section> -->


<!-- svelte-ignore a11y-no-static-element-interactions -->
<section class="w-full py-4em servicesSection relative overflow-hidden">

    <div class="sectionMarginContainer ">

        <h2 class="servicesSubLine translate-y-[20%] opacity-0   relative text-[2.5em] w-fit pb-1hem capitalize
            md:text-[1.9em] ">
            Services
            <div class="w-[1.5em] h-[3px] bg-[#C2C2C2]"></div>
        </h2>

        <div class="text-[2.2em]">
            <h4 class="servicesSubLine translate-y-[20%] opacity-0 text-[0.42em] text-center">TECHNOLOGY & PARTNERS</h4>
            <h3 class="servicesSubLine translate-y-[20%] opacity-0 font-semibold text-center">Top Quality solutions</h3>
        </div>

        <AccordionServices/>

    </div>

</section>


<!-- 
<section class="h-screen bg-red-200 w-full">

</section>
 -->
