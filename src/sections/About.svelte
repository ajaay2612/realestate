<script>
    import { inView , animate, stagger } from "motion"
    import { onMount } from "svelte";


    onMount(()=>{

        let customInOut = [1,0,.18,.99]
        let customOut = [.2,.88,.56,1]

        inView(".sectionMarginContainer", (info) => {
            animate(".ourStory", { y:['40%','0'], opacity: [0,100] }, {delay: stagger(0.1, { from:1 }), duration: 1, easing:customInOut })  
        },{amount : 0.3})

        inView(".imageBlock", (info) => {
            animate(".imageBlock", { y:['20%','0'], opacity: [0,100] }, {delay: stagger(0.1, { from:1 }), duration: 1, easing:customInOut })  
            animate(".imageBlockMain img", { clipPath: "inset(0% 0% 0% 0%)" }, { duration: 1, easing:customInOut })  
        },{amount : 0.3})




    })


</script>




<!-- <section class="h-screen bg-red-200 w-full">

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
                <div class="imageBlockMain md:w-[40%] lg:w-[35%]">
                    <img style="clip-Path: inset(0% 0% 100% 0%)" src="/images/about/1.jpg" alt="">
                </div>
                <div class="flex flex-wrap gap-1em mt-1hem
                md:w-[35%] lg:w-[30%] md:gap-0hem md:mt-0
                lg:gap-1em">
                    <img class="w-[25%]
                    md:w-[35%]
                    lg:flex-grow" src="/images/about/3.jpg" alt="">
                    <img class="w-[25%]
                    md:w-[35%]
                    lg:flex-grow" src="/images/about/2.jpg" alt="">
                </div>
            </div>
            <p class="ourStory text-[2.2em] mt-2em leading-[1.2em]
            md:order-1 md:mt-0 md:mb-2em md:w-[70%] md:ml-auto md:text-[1.8em]
            lg:text-[2.4em] lg:w-[60%] lg:-mt-[1.4em]">
                After more than twenty years of
                success in the wood products industry,
                the Bertch family founded its capital
                venture in 2009 – investing in real
                estate in the western United States.
            </p>
        </div>



    </div>
</section>