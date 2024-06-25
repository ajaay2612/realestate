<script>
    import { inView , animate, stagger ,timeline} from "motion"
    import { onMount } from "svelte";
    import { fade, scale, slide } from "svelte/transition"
    import lenisStore from '../stores/lenisStore.js'
    import { tweened } from 'svelte/motion';
    import { cubicOut, expoOut } from 'svelte/easing';

    import AccordionFaq from '../components/AccordionFaq.svelte'
    

    let customInOut = [1,0,.18,.99]
    let customInOutFast = [.79,-0.01,.34,1]
    let customOut = [.2,.88,.56,1]
    let customFastOut = [.21,.53,.34,1]

    onMount(()=>{

        
    })




</script>




<!-- <section class="h-[100vw] bg-red-200 w-full">

</section> -->


<!-- svelte-ignore a11y-no-static-element-interactions -->
<section class="w-full py-4em servicesSection relative overflow-hidden">

    <div class="sectionMarginContainer ">

        <h2 class="faqHeadLine relative text-[2.5em] w-fit pb-1hem capitalize
            md:text-[1.9em] ">
            FAQ
            <div class="w-[1.5em] h-[3px] bg-[#C2C2C2]"></div>
        </h2>

        <div class="text-[2.2em] lg:text-[2.3em]">
            <h3 class="font-semibold text-center md:text-[1.4em] lg:text-[1.47em]">Explore Common Questions</h3>
            <h4 class="w-[85%] max-w-[40em] mt-0hem mx-auto text-[0.42em] text-center text-[#6E6E6E]">Discover answers to frequently asked questions about Evodwell and our approach to crafting bespoke homes. If you have any further inquiries, feel free to reach out to our team for assistance.</h4>
        </div>

        <AccordionFaq/>

    </div>
    <div class="pt-[0.3em]">
        <img src="/images/faq/1.jpg" alt="">
    </div>

</section>



<section class="h-screen bg-red-200 w-full">

</section>

