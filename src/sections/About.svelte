<script>
    import { inView , animate, stagger ,timeline} from "motion"
    import { onMount } from "svelte";
    import { scale } from "svelte/transition";


    let customInOut = [1,0,.18,.99]
    let customInOutFast = [.79,-0.01,.34,1]
    let customOut = [.2,.88,.56,1]
    let customFastOut = [.21,.53,.34,1]

    onMount(()=>{


        inView(".aboutSection", (info) => {
            animate(".ourStory", { y:['20%','0'], opacity: [0,1] }, {delay: stagger(0.1), duration: 1.2, easing:customOut })  
            animate(".ourStory .innerCont", { y:['100%','0%'] }, {delay: stagger(0.1), duration: 0.58, easing:customFastOut })  
        // },{amount : 0.3})

        // inView(".imageBlock", (info) => {
            const sequence = [
                // [".imageBlock", { y:['20%','0'], opacity: [0,1] }, { duration: 1, easing:customInOut , delay: stagger(0.1)}],  
                [".imageBlockMain-about .animatedImages", { clipPath: ["inset(0% 0% 100% 0%)","inset(0% 0% 0% 0%)"]  }, { duration: 1.5, easing:customInOut , delay: stagger(0.1)}],  
                [".imageBlockMain-about .animatedImages", { opacity:[0,1] }, {at:"-1.5", duration: 1.5, easing:customInOut , delay: stagger(0.1)}],  
                [".imageBlockMain-about", { scale:[0.8,1] }, { at:"-1.7" ,duration: 1.5, easing:customInOut , delay: stagger(0.1)}],  
                [".imageBlockMain-about .animatedImages", { scale:[1.5,1] }, { at:"-1.9" , duration: 2, easing:customInOut , delay: stagger(0.1)}],  
            ]
            timeline(sequence,{ delay: 0 })
        },{amount : 0.2})




    })


    let aboutText=[
        "After more than twenty years of success",
        "in the wood products industry, the Bertch",
        "family founded its capital the venture in",
        "2009 – investing in real estate in the",
        "western United States."
    ]




    const handleMouseEnter = (i) => {
        animate(`.aboutHoverImageMain`, { transform:'translateX(0%)' }, { duration: 0, easing:customInOutFast})

        animate(`.aboutHoverImageMain`, { transform:'translateX(5%)' }, { duration: 0.5, easing:customInOutFast})
        animate(`.aboutHoverImage${i}`, { transform:'translateX(0%)' }, { duration: 0.5, easing:customInOutFast})
        animate(`.animatedImages${i}`, { scale:1.15 }, { duration: 0.5, easing:customInOutFast})
        console.log("mouse enter")
    }
    
    const handleMouseLeave = (i) => {
        animate(`.aboutHoverImageMain`, { transform:'translateX(0%)' }, { duration: 0.5, easing:customInOutFast})
        animate(`.aboutHoverImage${i}`, { transform:'translateX(-101%)' }, { duration: 0.5, easing:customInOutFast})
        animate(`.animatedImages${i}`, { scale:1 }, { duration: 0.4, easing:customInOutFast})
        console.log("mouse leave")
    }


</script>



<!-- 
<section class="h-screen bg-red-200 w-full">

</section> -->



<section class="w-full py-4em">
    <div class="sectionMarginContainer aboutSection">

        <h2 class="ourStory relative text-[2.5em] w-fit pb-1hem capitalize
        md:text-[1.9em] lg:p-0">
            our Story
            <div class="w-[1.5em] h-[3px] bg-[#C2C2C2]"></div>
        </h2>


        <div class="md:flex md:flex-col">
            <div class=" imageBlock
            md:order-2 md:flex md:justify-end md:items-start md:gap-0hem
            lg:gap-1em">
                <div class="relative imageBlockMain imageBlockMain-about  md:w-[40%] lg:w-[35%]">
                    
                    <img class="aboutHoverImage aboutHoverImage2 absolute left-0 top-0 z-10" src="/images/about/2.jpg" alt="">
                    <img class="aboutHoverImage aboutHoverImage3 absolute left-0 top-0 z-10" src="/images/about/3.jpg" alt="">
                    
                    <img class="animatedImages aboutHoverImageMain" src="/images/about/1.jpg" alt="">
                </div>
                <div class=" flex flex-wrap gap-1em mt-1hem
                md:w-[35%] lg:w-[30%] md:gap-0hem md:mt-0
                lg:gap-1em">
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <div on:mouseenter={()=>handleMouseEnter(3)} on:mouseleave={()=>handleMouseLeave(3)} class="imageBlockMain imageBlockMain-about w-[25%]
                    md:w-[35%]
                    lg:flex-grow">
                        <img class="animatedImages animatedImages3" src="/images/about/3.jpg" alt="">
                    </div>
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <div on:mouseenter={()=>handleMouseEnter(2)} on:mouseleave={()=>handleMouseLeave(2)} class="imageBlockMain imageBlockMain-about  w-[25%]
                    md:w-[35%]
                    lg:flex-grow">
                        <img class="animatedImages animatedImages2" src="/images/about/2.jpg" alt="">
                    </div>
                </div>
            </div>

            <!-- phone -->
            <div class="md:hidden text-[2.2em] mt-2em leading-[1.2em]">
                {aboutText.join(" ")}
            </div>

            <!-- pc -->
            <div class="hidden md:block ourStory text-[2.2em] mt-2em leading-[1.2em]
            md:order-1 md:mt-0 md:mb-2em md:w-[18.2em] md:ml-auto md:text-[1.8em]
            lg:text-[2.4em]  lg:-mt-[1.4em]">
                {#each aboutText as text}
                <p class="outerCont"><span class="innerCont">{text}</span></p>
                {/each}
            </div>



        </div>



    </div>
</section>