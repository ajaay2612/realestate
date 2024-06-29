<script>
    import { inView , animate, stagger ,timeline} from "motion"
    import { onMount } from "svelte";
    import { fade, scale, slide } from "svelte/transition"
    import lenisStore from '../stores/lenisStore.js'
    import { tweened } from 'svelte/motion';
    import { cubicOut, expoOut } from 'svelte/easing';

    
    let workText=[
        {
            title:"WeKaam",
            type:"Office",
            image:"/images/work/1.jpg",
            class:"workOneV2",
            // desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure praesentium quis libero aliquam commodi impedit consectetur, repellendus a perferendis, repellat, at alias quas facere porro.'
            desc:[
                'Lorem ipsum dolor sit amet consectetur ',
                'elit. Iure praesentium quis libero aliquam ',
                'consectetur, repellendus a perferendis, repellat',
            ]

        },
        {
            title:"SV",
            type:"Residencial",
            image:"/images/work/2.jpg",
            class:"workTwoV2",
            // desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure praesentium quis libero aliquam commodi impedit consectetur, repellendus a perferendis, repellat, at alias quas facere porro.'
            desc:[
                'Lorem ipsum dolor sit amet consectetur ', 
                'praesentium quis libero aliquam commodi ', 
                'consectetur, repellendus a perferendis, ',
            ]
        },
        {
            title:"Center 01",
            type:"Mixed Use",
            image:"/images/work/3.jpg",
            class:"workThreeV2",
            // desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure praesentium quis libero aliquam commodi impedit consectetur, repellendus a perferendis, repellat, at alias quas facere porro.'
            desc:[
                'Lorem ipsum dolor sit amet consectetur', 
                'praesentium quis libero aliquam commodi ', 
                'consectetur, repellendus a perferendis'
            ]
        }
    ]

    let customInOut = [1,0,.18,.99]
    let customInOutFast = [.79,-0.01,.34,1]
    let customOut = [.2,.88,.56,1]
    let customFastOut = [.21,.53,.34,1]

    onMount(()=>{

        inView(".workSectionV2", (info) => {
            if($lenisStore.onScroll){
                offsetX = $lenisStore.onScroll.animatedScroll
            }

            animate(".workHeadLineV2", {transform:'translateY(0)', opacity:1 }, {duration: 1.2, easing:customOut , delay:0.2})

            const sequence = [
                [".imageBlockMain-workV2 .animatedImages", { clipPath: ["inset(0% 0% 100% 0%)","inset(0% 0% 0% 0%)"]  }, {at:0, duration: 1, easing:customInOut , delay: stagger(0.1)}],  
                [".imageBlockMain-workV2 .animatedImages", { opacity:[0,1] }, {at:"-1", duration: 1, easing:customInOut , delay: stagger(0.1)}],  
                [".imageBlockMain-workV2", { scale:[0.8,1] }, { at:"-1.2" ,duration: 1.5, easing:customInOut , delay: stagger(0.1)}],  
                [".imageBlockMain-workV2 .animatedImages", { scale:[1.5,1] }, { at:"-1.9" , duration: 2, easing:customInOut , delay: stagger(0.1)}],  
                [".saleDivs", { opacity:[0,1] }, {at:"-0.7", duration: 1, easing:customOut , delay: stagger(0.1)}],  
            ]
            timeline(sequence,{ delay: 0 })

        },{amount : 0})

        inView(".workSectionV2", (info) => {
            isScrolling = true
            
            return (leaveInfo) => isScrolling = false
        })

    })


    let offsetX = 0

    let isScrolling = false
    let scrollDistance = 0

    $: if(isScrolling){ scrollDistance = $lenisStore.onScroll ?  $lenisStore.onScroll.animatedScroll - offsetX < 0 ? 0 : $lenisStore.onScroll.animatedScroll -offsetX || 0 : 0}

    // follow cusrsor 
    let mouseX
    let mouseY
    let pointers = [0,0]

    mouseX = tweened(0, { duration: 600, easing: cubicOut });
    mouseY = tweened(0, { duration: 600, easing: cubicOut });

    onMount(() => {

        setTimeout(() => {
            const initialCoordinates = {
                x: window.innerWidth / 2,
                y: window.innerHeight / 2,
            }
            
            mouseX.set(initialCoordinates.x);
            mouseY.set(initialCoordinates.y);
        }, 100)

    });


    $:{
        mouseX.set(pointers[0]);
        mouseY.set(pointers[1]);
    }

    // custom cursor

    let ShowCursor = false
    let ShowView = false

    const handleMouseEnter = (e,customClass) => {
        pointers =  [e.clientX, e.clientY]
        ShowView = false
        ShowCursor = true
        setTimeout(() => {
            ShowView = true
        }, 1200)

        // console.log(ShowCursor)

        animate(`.${customClass} .workLine`, { opacity:0 , transform:'translateY(-20%)'}, { duration: 0.5, easing:customFastOut})
        animate(`.${customClass} .workDescLines`, { transform:'translateY(0%)' }, { duration: 0.7, easing:customOut, delay: stagger(0.05 ,{start:0.2})})

    }

    const handleMouseLeave = (e,customClass) => {
        pointers =  [e.clientX, e.clientY]
        ShowCursor = false
        ShowView = false
        // console.log(ShowCursor)

        animate(`.${customClass} .workDescLines`, { transform:'translateY(100%)' }, { duration: 0.3, easing:customInOut, delay: stagger(0.05)})
        animate(`.${customClass} .workLine`, { opacity:1 ,  transform:'translateY(0%)'}, { duration: 0.8,delay:0.25, easing:customFastOut})
    }

</script>



<!-- 
<section class="h-[100vw] bg-red-200 w-full">

</section> -->


<!-- svelte-ignore a11y-no-static-element-interactions -->
<section class="w-full py-4em workSectionV2  relative overflow-hidden" 
on:mousemove={(e) => pointers =  [e.clientX, e.clientY ]}>

    <div
        style={`transform: translate(calc(${$mouseX}px), calc(${$mouseY}px));  opacity : ${ShowCursor ? 1 : 0}`}
        class="transition-opacity duration-500 pointer-events-none z-50 flex fixed left-0 top-0 bg-[#343434]">

        <div class="w-3em aspect-square flex justify-center items-center bg-[#343434]">
            <div class="w-[0.5em] aspect-square bg-white"></div>
        </div>

        {#if ShowView}
            <div transition:slide={{axis:'x', easing:expoOut, duration:500}} class="flex h-3em items-center pr-2em pl-0hem uppercase text-white">view</div>
        {/if}
    
    </div>
    

    <div class="sectionMarginContainer ">

        <h2 class="workHeadLineV2 translate-y-[20%] opacity-0 relative text-[2.5em] w-fit pb-1hem capitalize
        md:text-[1.9em] ">
            Selected Work
            <div class="w-[1.5em] h-[3px] bg-[#C2C2C2]"></div>
        </h2>


        <div class="relative flex flex-col gap-4em
        md:flex-row md:gap-3em md:flex-wrap">

            {#each workText as work}
                <div on:mouseenter={(e)=> handleMouseEnter(e,work.class)} on:mouseleave={(e)=> handleMouseLeave(e,work.class)} class=" {work.class} 
                     md:w-[calc(50%-1.5em)] lg:w-[calc((100%-6em)/3)]">
                    <div class="rounded-[1.8em] overflow-hidden relative imageBlockMain imageBlockMain-workV2 w-full">

                        <div class="saleDivs opacity-0 rounded-full bg-black px-2em py-[0.4em] text-white z-10 absolute top-1em right-1em text-[1.2em] md:text-[0.8em]">For Sale</div>

                        <img class="  animatedImages aspect-[9/10] object-cover"  style="scale:{scrollDistance * 0.00015 + 1}" src="{work.image}" alt="">
                    </div>

                    <div class="relative md:text-[0.85em] lg:text-[0.9em] xl:text-[1em]">
                        <h3 class="workLine text-[1.9em] md:text-[1.7em] leading-[1em] mt-1em">{work.title}</h3>
                        <p class="workLine text-[1.5em] md:text-[1.2em] font-light">{work.type}</p>
                        

                        <div class="hidden lg:flex absolute top-0 left-0 flex-col gap-0">
                            {#each work.desc as d}
                                <p class=" overflow-hidden leading-[1.2em]"><span class="inline-block workDescLines translate-y-[100%] ">{d}</span></p>
                            {/each}
                        </div>

                        <div class=" lg:hidden absolute top-0 left-0 flex-col gap-0">
                    
                            <p class="text-[1.2em] overflow-hidden leading-[1.2em]"><span class="inline-block workDescLines translate-y-[100%] ">{work.desc.join(" ")}</span></p>
                            
                        </div>

                             
                    </div>
                </div>
            {/each}

        </div>


    </div>
</section>



<!-- <section class="h-screen bg-red-200 w-full">

</section> -->

