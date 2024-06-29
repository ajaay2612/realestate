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
    
    let allFooterLinks = [
        {
            heading: "Quick Links",
            navs:[
                {name: "Properties", link: "/properties"},
                {name: "About", link: "/about"},
                {name: "Services", link: "/services"},
            ]
        },
        {
            heading: "Get In Touch",
            navs:[
                {name: "sales@resideco.com", link: "mailto:sales@resideco.com"},
                {name: "+44 746 475 1722", link: "tel:+44 746 475 1722"},
            ]
        }
    ]
</script>
   



<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="footerAnimContainerV2 mt-5em min-h-screen w-full bg-black text-white">
    
    
    <div class="w-[90%] mx-auto pt-4em pb-2em flex flex-col justify-between min-h-screen
    lg:text-[0.85em] xl:text-[0.9em] 2xl:text-[1.05em]">
        <div class="flex flex-col gap-1em lg:flex-row justify-between">
            <div class="lg:w-[50%]">
                <h2 class="text-[2.2em]">Book an Appointment</h2>
                <p class="w-[85%] lg:w-[80%] text-[1.05em] mt-1em font-light
                lg:text-[1.15em]">Book your appointment with ResideCo today and find your dream home with ease. Our expert team is here to help!</p>
                <form action="" class="footerForm text-[1.1em] ">
                    <input class="footerFormInput" type="text" placeholder="Full Name *">
                    <input class="footerFormInput" type="text" placeholder="Email *">
                    <textarea class="footerFormInput resize-none " rows="4" name="" id="" placeholder="Leave a Message *"></textarea>
                    <button type="button" class=" footerFormSubmit active:scale-[0.98]">Book Now</button>
                </form>
            </div>
            <div class="lg:w-[30%] mr-2em">
                <div class="flex mt-2hem text-[1.1em]
                lg:text-[1.15em]">
                    {#each allFooterLinks as allLinks}
                        <div class="w-1/2">
                            <p class="mb-1em">{allLinks.heading}</p>
                            <nav class="flex gap-[0.2em] flex-col">
                                {#each allLinks.navs as link}
                                    <li class="list-none font-light">{link.name}</li>
                                {/each}
                            </nav>
                        </div>
                    {/each}
                </div>
                <div class="mt-3em flex justify-center items-center text-[1.5em] gap-3hem 
                lg:text-[1.5em]">
                   {#each social as soc}
                        <div class="footerSocials h-[1.5em] aspect-square">
                            <img class="invert" src={soc.image} alt="">
                        </div>
                   {/each}
                </div>
            </div>
        </div>


        <p class="text-[#5D5D5D] mt-3em mx-auto text-center">copyright © 2024. ResideCo Limited. All rights reserved</p>
    </div>
</div>

<style>
    .footerForm{
        @apply flex flex-wrap gap-1em mt-3em;
    }
    .footerFormInput{
        @apply w-[40%] rounded-[0.8em] focus-within:outline-none focus-within:border-[1px] focus-within:border-[white]  focus-within:bg-[#121212] flex-grow border-[1px] border-[#ffffffa8] bg-transparent text-white py-1em px-1hem;
    }

    .footerFormSubmit{
        @apply w-full rounded-[0.8em] text-black bg-white py-1em;
    }


</style>

