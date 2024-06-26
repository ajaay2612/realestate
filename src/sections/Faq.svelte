<script>
    import { inView , animate, stagger ,timeline} from "motion"
    import { onMount } from "svelte";

    import AccordionFaq from '../components/AccordionFaq.svelte'
    

    let customInOut = [1,0,.18,.99]
    let customInOutFast = [.79,-0.01,.34,1]
    let customOut = [.2,.88,.56,1]
    let customFastOut = [.21,.53,.34,1]

    onMount(()=>{
        inView(".faqSection", (info) => {


            const sequence = [
                [".faqHeadLine", { y:['20%','0'], opacity: [0,1] }, { duration: 1, easing:customOut , delay: stagger(0.15)}],  
                [".accordionItemFaq", { y:['20%','0'], opacity: [0,1], scale:[1.2,1] }, {at:'-0.6', duration: 1, easing:customOut , delay: stagger(0.15)}],  
                [".faqImage", {opacity: [0,1], scale:[1.1,1] }, {at:'-0.5', duration: 1, easing:customOut , delay: stagger(0.15)}],  
            ]
            timeline(sequence,{ delay: 0 })

        },{amount:0.2})
    })



</script>




<!-- <section class="h-[100vw] bg-red-200 w-full">

</section> -->


<!-- svelte-ignore a11y-no-static-element-interactions -->
<section class="w-full py-4em faqSection relative overflow-hidden">

    <div class="sectionMarginContainer ">

        <h2 class="faqHeadLine translate-y-[20%] opacity-0 relative text-[2.5em] w-fit pb-1hem capitalize
            md:text-[1.9em] ">
            FAQ
            <div class="w-[1.5em] h-[3px] bg-[#C2C2C2]"></div>
        </h2>

        <div class="text-[2.2em] lg:text-[2.3em]">
            <h3 class="faqHeadLine translate-y-[20%] opacity-0 font-semibold text-center md:text-[1.4em] lg:text-[1.47em]">Explore Common Questions</h3>
            <h4 class="faqHeadLine translate-y-[20%] opacity-0 w-[85%] max-w-[40em] mt-0hem mx-auto text-[0.42em] text-center text-[#6E6E6E]">Discover answers to frequently asked questions about Evodwell and our approach to crafting bespoke homes. If you have any further inquiries, feel free to reach out to our team for assistance.</h4>
        </div>

        <AccordionFaq/>

    </div>
    <div class="faqImage opacity-0 pt-[0.3em]">
        <img src="/images/faq/1.jpg" alt="">
    </div>

</section>


<!-- 
<section class="h-screen bg-red-200 w-full">

</section> -->

