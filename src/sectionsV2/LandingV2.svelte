<script>
    import { onMount } from 'svelte';
    import DropDown from '../elements/DropDown.svelte'
    import filter  from '../stores/filter.js'
    import { timeline, stagger } from "motion"

    onMount(()=>{

        let customInOut = [1,0,.18,.99]
        let customOut = [.2,.88,.56,1]

        const sequence = [
            [".heroSection", { y:['100%','0%'] }, { duration: 1, easing:customInOut }],
            [".heroSectionBg", { clipPath: "inset(20% 40% 20% 40%)" }, {at:"-0.7", duration: 1, easing:customInOut }],
            [".heroSectionBg img", { scale:[0.7,1] }, {duration: 1, easing:customInOut }],
            [".heroSectionBg", { clipPath: "inset(0% 0% 0% 0%)" }, {at: "-0.9",  duration: 1, easing:customInOut }],
            [".spinPopAnimation", { y:["100%","0%"] }, {at: "-0.9", delay: stagger(0.007), duration: 1.4, easing:customInOut }],
            [".spinPopAnimation", {  rotate:["5deg","0deg"]}, { at:"-1", delay: stagger(0.007), duration: 1, easing:"ease" }],
            // [".mainSubline", { y: [5, 0] , opacity: [0, 100]}, {at: "-0.2", duration: 0.7 , easing:customOut }],
            // [".homeContent", {  y:["20%","0%"] }, { duration: 1 , easing:customOut  }],
            [".mainFilterChild", { y: [5, 0] , opacity: [0, 100]}, {at: "-1", duration: 2 , easing:customOut, delay: stagger(0.05)}],
            
            [".menuAnim", {opacity: [0, 100] }, {at: "-1.7", duration: 1 , easing:customOut  }],
            [".mainLogoParts", {opacity: [0, 100]}, {at: "-0.5", duration: 1, easing:customOut   }],
        ]


        let animation = timeline(sequence,{autoplay :false})
        animation.play()
    })

</script>


<section class="heroSection  translate-y-full bg-black relative h-screen w-full 
xl:text-[1.15em] flex flex-col justify-end">



    <div style="clip-path: inset(80% 40% 20% 40%);" class=" heroSectionBg overflow-hidden  absolute left-0 top-0 w-full h-full">
        <img class="w-full h-full object-cover" src="/images/home/pcbg.jpg" alt="">
    </div>

    <div class="relative px-2em pb-[9em] pt-[18em] md:px-4em md:pb-3em lg:pt-3em">
        <div class="blackBGMain absolute bg-black w-full h-full left-0 bottom-0"></div>


        <div class="text-white">
            <div class="homeContent">
                <!-- <h2 class="mainSubline opacity-0 text-[1.8em] mb-[0.4em]
                lg:text-[1.1em] ">
                    Explore a Wide Range <br class="lg:hidden"> of Properties
                </h2> -->

                <!-- tab -->
                <div class="hidden md:block">
                    <h1 class=" overflow-hidden text-[3.8em] leading-[1em] font-medium
                    md:text-[5em] lg:text-[6.3em] lg:-ml-[0.05em]">
                        {#each 'Elevate-Your'.split('') as letter,i}
                            <span style="opacity: {letter == '-'? 0:''};" class="spinPopAnimation inline-block translate-y-full rotate-45 origin-bottom-right">{letter}</span>
                        {/each}
                    </h1>
                    <h1 class="overflow-hidden relative text-[3.8em] leading-[1em] mb-[0.2em] font-medium
                    md:text-[5em] lg:text-[6.3em] lg:-ml-[0.05em]">
                        {#each 'Living-Experience'.split('')  as letter,i}
                            <span style="opacity: {letter == '-'? 0:''};" class="pb-[0.1em] spinPopAnimation inline-block translate-y-full rotate-45 origin-bottom-right">{letter}</span>
                        {/each}
                    </h1>
                </div>

                <!-- phone -->
                <div class="md:hidden text-[1.4em]">
                    <h1 class=" overflow-hidden text-[3.8em] leading-[1em] font-medium
                    md:text-[5em] lg:text-[6.3em] lg:-ml-[0.05em]">
                        {#each 'Elevate'.split('') as letter,i}
                            <span style="opacity: {letter == '-'? 0:''};" class="spinPopAnimation inline-block translate-y-full rotate-45 origin-bottom-right">{letter}</span>
                        {/each}
                    </h1>
                    <h1 class="overflow-hidden relative text-[3.8em] leading-[1em] font-medium
                    md:text-[5em] lg:text-[6.3em] lg:-ml-[0.05em]">
                        {#each 'Your-Living'.split('')  as letter,i}
                            <span style="opacity: {letter == '-'? 0:''};" class="spinPopAnimation inline-block translate-y-full rotate-45 origin-bottom-right">{letter}</span>
                        {/each}
                    </h1>
                    <h1 class="overflow-hidden relative text-[3.8em] leading-[1em] mb-[0.2em] font-medium
                    md:text-[5em] lg:text-[6.3em] lg:-ml-[0.05em]">
                        {#each 'Experience'.split('')  as letter,i}
                            <span style="opacity: {letter == '-'? 0:''};" class="pb-[0.1em] spinPopAnimation inline-block translate-y-full rotate-45 origin-bottom-right">{letter}</span>
                        {/each}
                    </h1>
                </div>

            </div>
            <div class=" mainFilterContainer w-full py-[1.4em] rounded-[0.8em]
             lg:py-[1em]">
        
                <div class="text-[1.5em] flex flex-wrap gap-0hem lg:text-[1.05em]">
                    {#each $filter as f,i}
                        <div class="mainFilterChild w-[calc(50%-0.25em)] text-[1.1em]
                        md:w-[7em] md:text-[0.95em]
                        lg:text-[1.2em]
                        capitalize ">
                            <p class="text-[0.7em]">{f.title}</p>
                            <p class="mt-0hem">{f.options.all[f.options.active].name}</p>
                        </div>
                    {/each}
                    <div class="mainFilterChild flex justify-center items-center
                    text-[0.75em] md:text-[1em] mt-1em lg:mt-0">
                        <div class="mx-auto lg:ml-3em text-[0.7em] w-[5em] bg-white p-1hem aspect-square rounded-full
                        md:text-[0.56em] ">
                            <svg viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="8.5" cy="8.5" r="7.5" stroke="black"/>
                                <path d="M19.75 19.75L16 16" stroke="black" stroke-linecap="round"/>
                            </svg>
                        </div>
                    </div>
                </div>




            </div>
        </div>
    </div>




</section>
