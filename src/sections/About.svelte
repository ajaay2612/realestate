<script>
    import { inView , animate, stagger ,timeline} from "motion"
    import { onMount } from "svelte";
    import { scale } from "svelte/transition";


    onMount(()=>{

        let customInOut = [1,0,.18,.99]
        let customOut = [.2,.88,.56,1]
        let customFastOut = [.21,.53,.34,1]

        inView(".sectionMarginContainer", (info) => {
            animate(".ourStory", { y:['20%','0'], opacity: [0,1] }, {delay: stagger(0.1), duration: 1.2, easing:customOut })  
            animate(".ourStory .innerCont", { y:['100%','0%'] }, {delay: stagger(0.1), duration: 0.58, easing:customFastOut })  
        // },{amount : 0.3})

        // inView(".imageBlock", (info) => {
            const sequence = [
                // [".imageBlock", { y:['20%','0'], opacity: [0,1] }, { duration: 1, easing:customInOut , delay: stagger(0.1)}],  
                [".imageBlockMain img", { clipPath: ["inset(0% 0% 100% 0%)","inset(0% 0% 0% 0%)"]  }, { duration: 1.5, easing:customInOut , delay: stagger(0.1)}],  
                [".imageBlockMain img", { opacity:[0,1] }, {at:"-1.5", duration: 1.5, easing:customInOut , delay: stagger(0.1)}],  
                [".imageBlockMain", { scale:[0.8,1] }, { at:"-1.7" ,duration: 1.5, easing:customInOut , delay: stagger(0.1)}],  
                [".imageBlockMain img", { scale:[1.5,1] }, { at:"-1.9" , duration: 2, easing:customInOut , delay: stagger(0.1)}],  
            ]
            timeline(sequence,{ delay: 0 })
        },{amount : 0.2})




    })


</script>



<!-- 
<section class="h-screen bg-red-200 w-full">

</section> -->



<section class="w-full py-4em">
    <div class="sectionMarginContainer">

        <h2 class="ourStory relative text-[2.5em] w-fit pb-1hem capitalize
        md:text-[1.9em] lg:p-0">
            our Story
            <div class="w-[37%] h-[3px] bg-[#C2C2C2]"></div>
        </h2>


        <div class="md:flex md:flex-col">
            <div class=" imageBlock
            md:order-2 md:flex md:justify-end md:items-start md:gap-0hem
            lg:gap-1em">
                <div class="imageBlockMain  md:w-[40%] lg:w-[35%]">
                    <img  src="/images/about/1.jpg" alt="">
                </div>
                <div class=" flex flex-wrap gap-1em mt-1hem
                md:w-[35%] lg:w-[30%] md:gap-0hem md:mt-0
                lg:gap-1em">
                    <div class="imageBlockMain w-[25%]
                    md:w-[35%]
                    lg:flex-grow">
                        <img  src="/images/about/3.jpg" alt="">
                    </div>
                    <div class="imageBlockMain  w-[25%]
                    md:w-[35%]
                    lg:flex-grow">
                        <img  src="/images/about/2.jpg" alt="">
                    </div>
                </div>
            </div>
            <div class="ourStory text-[2.2em] mt-2em leading-[1.2em]
            md:order-1 md:mt-0 md:mb-2em md:w-[70%] md:ml-auto md:text-[1.8em]
            lg:text-[2.4em] lg:w-[60%] lg:-mt-[1.4em]">
                <p class="outerCont"><span class="innerCont">After more than twenty years of success</span></p>
                <p class="outerCont"><span class="innerCont">in the wood products industry,the Bertch</span></p> 
                <p class="outerCont"><span class="innerCont">family founded its capital the venture in</span></p>
                <p class="outerCont"><span class="innerCont">2009 – investing in real estate in the</span></p> 
                <p class="outerCont"><span class="innerCont">western United States.</span></p> 
            </div>
        </div>



    </div>
</section>