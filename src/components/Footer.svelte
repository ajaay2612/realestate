<script>
    import { spring } from 'svelte/motion';
    import { onMount } from "svelte";
    import { inView , animate, stagger ,timeline} from "motion"
    import lenisStore from '../stores/lenisStore.js'



    let social = [
        {
            name: "facebook",
            link: "",
            image: "/images/social/meta.svg",
        },
        {
            name: "twitter",
            link: "",
            image: "/images/social/twitter.svg",
        },
        {
            name: "instagram",
            link: "",
            image: "/images/social/instagram.svg",
        },
    ]
    let customInOut = [1,0,.18,.99]
    let customInOutFast = [.79,-0.01,.34,1]
    let customOut = [.2,.88,.56,1]
    let customFastOut = [.21,.53,.34,1]

    // cursorAnimation

    let cursorPosition = spring(
        { x: 0, y: 0 },
        {
			stiffness: 0.04,
			damping: 0.32
		}
    );

    const handleMouseMove = (event) => {
        const rect = document.querySelector('.footerAnimContainer').getBoundingClientRect();
     
        cursorPosition.set({
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        });
    };


    // intro animation
    onMount(()=>{
        inView(".footerAnimContainer", (info) => {
            isScrolling = true
            
            return (leaveInfo) => isScrolling = false
        })


        inView(".footerAnimContainer", (info) => {
            if($lenisStore.onScroll){
                offsetX = $lenisStore.onScroll.animatedScroll
            }
            // animate(".ourStory", { y:['20%','0'], opacity: [0,1] }, {delay: stagger(0.1), duration: 1.2, easing:customOut })  
            // animate(".ourStory .innerCont", { y:['100%','0%'] }, {delay: stagger(0.1), duration: 0.58, easing:customFastOut })  

            const sequence = [
                [".footerMain", { y:['20%','0'], opacity: [0,1] }, { duration: 1, easing:customOut , delay: stagger(0.1)}],  
                [".footerLinks", { y:['20%','0'], opacity: [0,1] }, {at:'-0.8',  duration: 1, easing:customOut , delay: stagger(0.05)}],  
                [".footerSocials", { y:['20%','0'], opacity: [0,1] }, {at:'-1', duration: 1, easing:customOut , delay: stagger(0.05, {from:'last'})}],  
                [".footerBranding", {transform: 'rotateX(0)', opacity: 1, backgroundSize:'120%'}, {at:'-0.7',  duration: 1.5, easing:customOut}],  
                // [".imageBlockMain-about .animatedImages", { clipPath: ["inset(0% 0% 100% 0%)","inset(0% 0% 0% 0%)"]  }, { duration: 1.5, easing:customInOut , delay: stagger(0.1)}],  
                // [".imageBlockMain-about .animatedImages", { opacity:[0,1] }, {at:"-1.5", duration: 1.5, easing:customInOut , delay: stagger(0.1)}],  
                // [".imageBlockMain-about", { scale:[0.8,1] }, { at:"-1.7" ,duration: 1.5, easing:customInOut , delay: stagger(0.1)}],  
                // [".imageBlockMain-about .animatedImages", { scale:[1.5,1] }, { at:"-1.9" , duration: 2, easing:customInOut , delay: stagger(0.1)}],  
            ]
            timeline(sequence,{ delay: 0 })
        },{amount : 0.2})

    })

    let offsetX = 0

    let isScrolling = false
    let scrollDistance = 0

    $: if(isScrolling){ scrollDistance = $lenisStore.onScroll ?  $lenisStore.onScroll.animatedScroll - offsetX < 0 ? 0 : $lenisStore.onScroll.animatedScroll -offsetX || 0 : 0}


</script>
   



<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="footerAnimContainer mt-5em" on:mousemove={handleMouseMove}>


    <h2 class="footerMain opacity-0 text-[2.4em] font-medium w-[90%] mx-auto text-center leading-[1.1em] max-w-[15em]
    lg:text-[2.6em]">Looking for Someone who can Transform Your Ideas</h2>

    
    <button class="footerMain opacity-0 mx-auto block mt-[1.6em] bg-black text-white px-[2.8em] py-[0.38em] rounded-full text-[1.1em] active:scale-[0.98]">
        Let’s Talk
    </button>


    <div class="w-[90%] mx-auto flex justify-between items-end mt-[30vh] 
    lg:mt-[7em] lg:items-center">

        <nav class=" [&>li]:list-none flex flex-col gap-[0.2em] text-[1.7em]
        lg:flex-row lg:gap-[2.5em] lg:text-[1.2em]">
            <li class="footerLinks opacity-0">Home</li>
            <li class="footerLinks opacity-0">Properties</li>
            <li class="footerLinks opacity-0">About us</li>
            <li class="footerLinks opacity-0">Services</li>
            <li class="footerLinks opacity-0">Contact</li>
        </nav>


        <div class="flex flex-col gap-[0.6em] text-[1.5em]
        lg:flex-row lg:gap-3hem lg:text-[1.2em]">
           {#each social as soc}
                <div class="footerSocials opacity-0 h-[1.5em] aspect-square">
                    <img src={soc.image} alt="">
                </div>
           {/each}
        </div>
        
    </div>
    
    

    <div class="perspective overflow-hidden">
        <h2 style="background-size: 140%; background-position: {$cursorPosition.x*0.01+(scrollDistance*0.05)}% {$cursorPosition.y*0.01}%"
            class="footerBranding rotate-x opacity-0 bg-[url('/images/footer/footerBg.jpg')] bg-cover bg-center text-[7.5em] my-[0.3em] mb-1em text-center text-transparent bg-clip-text
            md:text-[21.5vw] md:mb-[0.25em] lg:text-[22.1vw] md:mt-0 lg:mb-0 lg:-mt-[0.21em]">
                ResideCo
        </h2>
    </div>


</div>


<style>
    .perspective {
        perspective: 1000px;
    }
    .rotate-x {
        transform: rotateX(-40deg);
    }
</style>