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
            [".heroSectionBg img", { scale:[0.8,1] }, {duration: 1, easing:customInOut }],
            [".heroSectionBg", { clipPath: "inset(0% 0% 0% 0%)" }, {at: "-0.9",  duration: 1, easing:customInOut }],
            [".mainLogoParts", { y: [10, 0] , opacity: [0, 100]}, {at: "-0.1", duration: 1 }],
            [".menuAnim", {  opacity: [0, 100] }, {at: "-0.7", duration: 1 , easing:customOut  }],
            [".spinPopAnimation", { y:["100%","0%"] }, {at: "-0.7", delay: stagger(0.007), duration: 1.2, easing:customInOut }],
            [".spinPopAnimation", {  rotate:["5deg","0deg"]}, { at:"-0.9", delay: stagger(0.005), duration: 1, easing:"ease" }],
            [".mainSubline", { y: [5, 0] , opacity: [0, 100]}, {at: "-0.2", duration: 0.7 , easing:customOut }],
            // [".homeContent", {  y:["70%","0%"] }, {at: "-0.55", duration: 1 , easing:customInOut  }],
            [".mainFilterContainer", { clipPath: "inset(0% 0% 0% 0%)"}, {at: "-0.8", duration: 0.8 , easing:customInOut  }],
            
        ]


        let animation = timeline(sequence,{autoplay :false,duration:0})
        animation.play()
    })

</script>


<section class="heroSection  translate-y-full bg-black relative h-screen w-full 
xl:text-[1.15em]">



    <div style="clip-path: inset(80% 40% 20% 40%);" class=" heroSectionBg overflow-hidden opacity-[70%] absolute left-0 top-0 w-full h-full">
        <img class="w-full h-full object-cover" src="/images/home/background.webp" alt="">
    </div>

    <div class="w-[90%] left-1/2 -translate-x-1/2 absolute bottom-[12em] text-white
    md:bottom-[10%]">
        <div class="homeContent">
            <h2 class="mainSubline opacity-0 text-[1.8em] mb-0hem
            lg:text-[1em]">
                Explore a Wide Range <br class="lg:hidden"> of Properties
            </h2>
            <h1 class="overflow-hidden text-[3.8em] leading-[1em] font-medium
            md:text-[5em]">
                {#each 'Elevate Your'.split('') as letter,i}
                    <span class="spinPopAnimation inline-block translate-y-full rotate-45 origin-bottom-right">{letter}</span>
                {/each}
            </h1>
            <h1 class="overflow-hidden relative text-[3.8em] leading-[1em] mb-[0.5em] font-medium
            md:text-[5em]">
                {#each ' Living Experience'.split('') as letter,i}
                    <span class="spinPopAnimation inline-block translate-y-full rotate-45 origin-bottom-right">{letter}</span>
                {/each}
            </h1>
        </div>

        <div style="clip-Path: inset(100% 0% 0% 0%);" class="mainFilterContainer bg-[#F9F9F9] w-full px-[0.8em] py-[1.4em] rounded-[0.8em]
        lg:max-w-[52em] lg:px-[1.5em] lg:py-[1em]">
            
            <div class="flex flex-wrap gap-0hem">

                {#each $filter as f,i}
                    <div class="text-black mainFilterChild w-[calc(50%-0.25em)] text-[1.1em]
                    md:w-[19%] md:flex-grow md:text-[1.1em]
                    lg:pb-[0.8em]">
                        <DropDown {i} dropDowns={f.options} title={f.title}/>
                    </div>
                {/each}

                <div class="mainFilterChild w-full flex justify-center items-center
                md:w-[10%] md:flex-grow">
                    <div class="mx-auto mt-0hem text-[0.7em] w-[5em] bg-black p-1hem aspect-square rounded-full
                    md:text-[0.56em]">
                        <svg viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.75 19.75L16 16" stroke="white" stroke-linecap="round"/>
                            <circle cx="8.5" cy="8.5" r="7.5" stroke="white"/>
                        </svg>
                    </div>
                </div>


            </div>
        </div>

    </div>




</section>
