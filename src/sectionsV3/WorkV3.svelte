<script>
    import { tweened } from "svelte/motion";
    import { fly, scale } from "svelte/transition";
    import { cubicOut } from "svelte/easing";
    import { onMount } from "svelte";   
    let progress = tweened(0, { duration: 500 , easing: cubicOut})

    let properties = {
        all:[
            {
                name: "cal hills",
                image: "/images/work3/1.jpg",
                gallery:{
                    all:[
                        {
                            name:"/images/work3/g1.jpg"
                        },
                        {
                            name:"/images/work3/g2.jpg"
                        },
                        {
                            name:"/images/work3/g3.jpg"
                        },
                    ],
                    active:0
                }
            },
            {
                name: "grass field",
                image: "/images/work3/2.jpg",
                gallery:{
                    all:[
                        {
                            name:"/images/work3/g4.jpg"
                        },
                        {
                            name:"/images/work3/g5.jpg"
                        },
                        {
                            name:"/images/work3/g6.jpg"
                        },
                    ],
                    active:0
                }
            },
            {
                name: "Wooden House",
                image: "/images/work3/3.jpg",
                gallery:{
                    all:[
                        {
                            name:"/images/work3/g7.jpg"
                        },
                        {
                            name:"/images/work3/g8.jpg"
                        },
                        {
                            name:"/images/work3/g9.jpg"
                        },
                    ],
                    active:0
                }
            },
        ],
        active:0
    }


    let galleryInterval;
    let transitionDirection

    function startGallerySlideshow() {
        clearInterval(galleryInterval);
        let activeProperty = properties.all[properties.active];

        galleryInterval = setInterval(() => {
            properties.all[properties.active].gallery.active = (activeProperty.gallery.active + 1) % activeProperty.gallery.all.length;
        }, 3000);
    }

    onMount(() => {
        startGallerySlideshow();
        transitionDirection = 5
        progress.set((properties.active+1)/properties.all.length * 100)
    });
 

    const handleNext = () => {
        
        transitionDirection = 5
        properties.active < properties.all.length - 1 ? properties.active++ : properties.active = 0
        progress.set((properties.active+1)/properties.all.length * 100)
        startGallerySlideshow()

    }

    const handlePrev = () => {

        transitionDirection = -5        
        properties.active > 0 ? properties.active-- : properties.active = properties.all.length - 1        
        progress.set((properties.active+1)/properties.all.length * 100)
        startGallerySlideshow()

    }

</script>


<div class="h-screen w-full lg:h-[85vh] relative">

    <div class="h-[72%] relative
    md:h-[70%] lg:h-[100%]">

        {#key properties.active}
            <img transition:fly={{x:transitionDirection, duration:500}} class="absolute object-cover" src="{properties.all[properties.active].image}" alt="">
        {/key}       

        <div class="work3gradient  absolute bottom-0 left-0 h-[40%] w-full
        lg:work3gradientPc lg:h-full lg:w-[100%]"></div>
    
        <div class="w-[90%] max-w-[68em] xl:max-w-[80em] mx-auto pt-3hem">
            <h2 class=" relative text-[white] font-medium text-[1.5em]
            lg:text-[1.1em] mb-2em">LATEST PROJECTS</h2>
            
            <!-- progress pc -->
            <div class="relative text-white hidden lg:flex gap-[0.5em] items-center">
                <p class="text-[0.9em]">{properties.active+1}</p>
                <div class="w-[7em] h-[2px] relative">
                    <div class="bg-[#ffffff5e] w-full h-[1.2px] absolute left-0 top-1/2 -translate-y-1/2 "></div>
                    <div style="width:{$progress}%" class="bg-[#fff] h-[2px]"></div>
                </div>
                <p class="text-[0.9em]">{properties.all.length}</p>
            </div>

        </div>
    
        <div class="absolute right-[5%] bottom-5em w-[45%]">
            <div class=" hidden md:block lg:hidden w-full relative bottom-0">
                <div class="aspect-[1.82/1]"></div>
                {#key properties.all[properties.active].gallery.active}
                    <img transition:scale={{start:0.95, duration:500}} class="absolute left-0 top-0 object-cover aspect-[1.82/1]" src="{properties.all[properties.active].gallery.all[properties.all[properties.active].gallery.active].name}" alt="">
                {/key}
            </div>
        </div>


    </div>
    <div class="bg-black text-white h-[28%]
    md:h-[30%] lg:h-[unset] lg:absolute lg:left-0 lg:bottom-2em lg:w-full lg:bg-transparent" >
        
        <div class="relative pb-2em w-[90%] max-w-[68em] xl:max-w-[80em] mx-auto h-full
        lg:flex lg:justify-between lg:items-center">
            
            <div class="flex flex-col justify-between h-full 
            lg:w-[57%]">
                <!-- progress phone -->
                <div class="lg:hidden absolute left-0 -top-[2.6em] flex gap-[0.5em] items-center">
                    <p class="text-[1.15em]">{properties.active+1}</p>
                    <div class="w-[7.5em] h-[2px] relative">
                        <div class="bg-[#ffffff5e] w-full h-[1.2px] absolute left-0 top-1/2 -translate-y-1/2 "></div>
                        <div style="width:{$progress}%" class="bg-[#fff] h-[2px]"></div>
                    </div>
                    <p class="text-[1.15em]">{properties.all.length}</p>
                </div>
                {#key properties.active}
                    <h3 in:fly={{x:transitionDirection, duration:500}} class="leading-[1em] text-[2.8em] uppercase relative text-[white] font-medium">{properties.all[properties.active].name}</h3>
                {/key}
                <div class="flex justify-between items-center
                lg:w-[14.5em] lg:pt-3em lg:pb-4em lg:text-[0.85em]">
                    <button type="button" on:click={handlePrev}>
                        <div class="w-[5.5em] p-[1.9em] border-2 border-white rounded-full">
                            <svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.3333 22.6641L13.3308 20.6666L5.42583 12.7474L22.6667 12.7474V9.91406L5.42583 9.91406L13.345 2.00906L11.3333 -0.00260353L0 11.3307L11.3333 22.6641Z" fill="white"/>
                            </svg>
                        </div>
                    </button>
                    <button type="button" on:click={handleNext}>
                        <div class="w-[5.5em] p-[1.9em] border-2 border-white rounded-full">
                            <svg class="rotate-180" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.3333 22.6641L13.3308 20.6666L5.42583 12.7474L22.6667 12.7474V9.91406L5.42583 9.91406L13.345 2.00906L11.3333 -0.00260353L0 11.3307L11.3333 22.6641Z" fill="white"/>
                            </svg>
                        </div>
                    </button>
                </div>
                <button class="block w-fit mt-1em lg:mt-0 capitalize bg-white text-black px-2hem text-[1.2em] py-0hem rounded-full">all project</button>
            </div>
        
        
            <div class="hidden lg:block lg:w-[43%] relative">
                <div class="aspect-[1.82/1]"></div>
                {#key properties.all[properties.active].gallery.active}
                    <img transition:scale={{start:0.95, duration:500}} class="absolute left-0 top-0 object-cover aspect-[1.82/1]" src="{properties.all[properties.active].gallery.all[properties.all[properties.active].gallery.active].name}" alt="">
                {/key}
            </div>

        </div>


    </div>

</div>

