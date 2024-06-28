<script>
    import { inView , animate, stagger ,timeline} from "motion"
    import { onMount } from "svelte";
    import { scale } from "svelte/transition";


    let customInOut = [1,0,.18,.99]
    let customInOutFast = [.79,-0.01,.34,1]
    let customOut = [.2,.88,.56,1]
    let customFastOut = [.21,.53,.34,1]

    onMount(()=>{


        inView(".aboutV2Section", (info) => {
            const sequence = [

                [".aboutV2Phone ", { y:[5,0] , opacity:[0,1]}, {at:0.4, delay: stagger(0.08), duration: 1, easing:customOut }],


                [".aboutV2Image img", {  y:["120%","0%"], rotate:["10deg","0deg"]}, {at:0, delay: stagger(0.007), duration: 1.2, easing:customOut }],
                [".aboutV2Image", { scale:[1.5,1] }, {at:'-1', duration: 1.2, easing:"ease" }],
                [".spinPopAnimationAboutV2", { y:["110%","0%"]}, {at:"-2", delay: stagger(0.009), duration: .8, easing:customInOut }],
                [".spinPopAnimationAboutV2", {  rotate:["20deg","0deg"]}, { at:"-1", delay: stagger(0.009), duration: 0.85, easing:customOut }],
                [".aboutV2subline ", { y:[5,0] , opacity:[0,1]}, { at:"-0.9", delay: stagger(0.01), duration: 0.9, easing:customOut }],
            ]

            
            timeline(sequence)
    
        },{amount : 0.2})




    })




</script>




<!-- <section class="h-screen bg-red-200 w-full">

</section> -->



<section class="w-full xl:text-[1.25em]">
    <div class="sectionMarginContainer aboutV2Section h-[90vh] flex justify-center flex-col items-center md:gap-5em lg:gap-4em">

        <!-- phone -->
        <h1 class="md:hidden max-w-[12em] aboutV2Phone opacity-0 w-full font-medium text-[3.5em] leading-[1.08em] text-center mb-2em">
            Where Your Unique Vision Guides Our 

            <span class="flex justify-center items-center gap-0hem"><img class="w-[2.5em]" src="/images/about/4.png" alt=""> Skilled </span>

            Craftmanship
        </h1>

        <p class="md:hidden aboutV2Phone opacity-0 text-[1.1em] max-w-[24em] lg:text-[0.8em] lg:max-w-[42em] text-[#6E6E6E] leading-[1.3em] text-center">Welcome to ResideCo, your trusted real estate partner. We specialize in making buying, selling, and renting homes easy and stress-free. Our dedicated team ensures personalized service and expert guidance. Discover your dream property with ResideCo.</p>


        <!-- tab -->
        <div class="md:text-[3.77em] lg:text-[4em] hidden md:block max-w-[13em]  w-full font-medium text-[3.5em] leading-[1em] text-center ">
            <!-- Where Your Unique Vision   -->
            <span class="overflow-hidden block">
                {#each 'Where-Your-Unique-Vision'.split('') as letter,i}
                    <span style="opacity: {letter == '-'? 0:''};" class="spinPopAnimationAboutV2 inline-block translate-y-full rotate-45 origin-bottom-right">{letter}</span>
                {/each}
            </span>

            <span class="flex justify-center items-end  gap-[0.25em]"> 
                  
                <span class="overflow-hidden block">
                    {#each 'Guides'.split('') as letter,i}
                        <span style="opacity: {letter == '-'? 0:''};" class="spinPopAnimationAboutV2 inline-block translate-y-full rotate-45 origin-bottom-right">{letter}</span>
                    {/each}
                </span>
                <div class="aboutV2Image overflow-hidden scale-[1.5]"><img class=" w-[2.2em] pb-[.18em]" src="/images/about/4.png" alt=""></div>
                 
                <span class="overflow-hidden block">
                    {#each 'Our Skilled'.split('') as letter,i}
                        <span style="opacity: {letter == '-'? 0:''};" class="spinPopAnimationAboutV2 inline-block translate-y-full rotate-45 origin-bottom-right">{letter}</span>
                    {/each}
                </span>
            </span>

            <span class="overflow-hidden block">
                {#each 'Craftmanship'.split('') as letter,i}
                    <span style="opacity: {letter == '-'? 0:''};" class="spinPopAnimationAboutV2 inline-block translate-y-full rotate-45 origin-bottom-right">{letter}</span>
                {/each}
            </span>
            
        </div>

        <p class=" hidden md:block opacity-0 aboutV2subline text-[1.1em] max-w-[24em] lg:text-[0.8em] lg:max-w-[42em] text-[#6E6E6E] leading-[1.3em] text-center">Welcome to ResideCo, your trusted real estate partner. We specialize in making buying, selling, and renting homes easy and stress-free. Our dedicated team ensures personalized service and expert guidance. Discover your dream property with ResideCo.</p>


    </div>
</section>