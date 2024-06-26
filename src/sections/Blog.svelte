<script>
    import { onMount } from 'svelte';
    import { inView , animate, stagger ,timeline} from "motion"
    import { register } from 'swiper/element/bundle';
    register();
        
	let blogs = [
		{
            image:'/images/blogs/1.jpg',
            date: '\ Investment \ Jun 4, 2024',
            label: 'The Ultimate Guide to Real Estate Investing',
        },
		{
            image:'/images/blogs/2.jpg',
            date: '\ Investment \ Jun 4, 2024',
            label: 'How to Choose the Right Real Estate Agent',
        },
		{
            image:'/images/blogs/3.jpg',
            date: '\ Investment \ Jun 4, 2024',
            label: 'How to Find Your Dream Home on a Budget',
        },
        {
            image:'/images/blogs/2.jpg',
            date: '\ Investment \ Jun 4, 2024',
            label: 'How to Choose the Right Real Estate Agent',
        },
	];
    let customInOut = [1,0,.18,.99]
    let customInOutFast = [.79,-0.01,.34,1]
    let customOut = [.2,.88,.56,1]
    let customFastOut = [.21,.53,.34,1]

    onMount(()=>{
        inView(".blogSection", (info) => {


            const sequence = [
                [".blogHeadLine", { y:['20%','0'], opacity: [0,1] }, { duration: 1, easing:customOut , delay: stagger(0.15)}],  
                ["swiper-container", { x:['2em','0'], opacity: [0,1],  }, {at:'-0.6', duration: 1, easing:customOut , delay: stagger(0.15)}],  
            ]
            timeline(sequence,{ delay: 0 })

        },{amount:0.2})
    })

    onMount(() => {
        const swiperEl = document.querySelector('swiper-container');

        // swiper parameters
        const swiperParams = {
            slidesPerView: 1,
            spaceBetween: 15,
            breakpoints: {
                640: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            },
            on: {
                init() {
                // ...
                },
            },
        };

        // now we need to assign all parameters to Swiper element
        Object.assign(swiperEl, swiperParams);

        // and now initialize it
        swiperEl.initialize();
    });
    

</script>



<!-- <section class="h-[100vw] bg-red-200 w-full">

</section> -->


<!-- svelte-ignore a11y-no-static-element-interactions -->
<section class="w-full py-4em blogSection relative overflow-hidden min-h-[60vh] md:min-h-[95vh]">

    <div class="sectionMarginContainer ">

        <h2 class="blogHeadLine translate-y-[20%] opacity-0 relative text-[2.5em] w-fit pb-1hem capitalize
            md:text-[1.9em] ">
            Blogs
            <div class="w-[1.5em] h-[3px] bg-[#C2C2C2]"></div>
        </h2>

        <swiper-container init="false" loop="true" class="cursor-pointer">
            {#each blogs as blog}
                <swiper-slide>
                    <div class="blog" style='background-color:{blog.color};'>
                        <div class="">
                            <div class="pointer-events-none">
                                <img src="{blog.image}" alt="">
                            </div>
                            <p class="text-[#6E6E6E] mt-[0.3em]">{blog.date}</p>
                            <p class="text-[1.3em]">{blog.label}</p>
                        </div>
                    </div>
                </swiper-slide>
            {/each}
        </swiper-container>

    </div>
  
</section>




<!-- <section class="h-screen bg-red-200 w-full">

</section> -->
