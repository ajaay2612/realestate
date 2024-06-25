<script>
    import { Accordion } from "bits-ui";
    import { cubicInOut, quintInOut, expoInOut } from "svelte/easing";
    import { scale, slide } from "svelte/transition";
    import { inView , animate, stagger ,timeline} from "motion"

    let customInOut = [1,0,.18,.99]
    let customInOutFast = [.79,-0.01,.34,1]
    let customOut = [.2,.88,.56,1]
    let customFastOut = [.21,.53,.34,1]
    const items = [
      {
        title: "What sets Evodwell apart from other home builders?",
        content:
          "we prioritize customization, sustainability, and quality craftsmanship. Our collaborative approach ensures that each home is tallored to the unique preferences of our clients, while our commitment to green building practices ensures a sustainable future for generations to come."
      },
      {
        title: "Are ResideCo homes eco-friendly?",
        content:
          "Read books, listen to podcasts, and surround yourself with people who inspire you."
      },
      {
        title: "How does the customization process at ResideCo work?",
        content: "Give them your time, attention, and love."
      }
    ];

    const handleMouseEnter = (e,i) => {
        let closeButtonFaq = e.target.querySelector('.closeButtonFaq svg')

        const sequence = [
            [".accordionFaqAnimateBlack"+i, {  transform:'translateY(0)' }, {duration: 0.5, easing:customInOut}],  
            [".accordionFaqAnimateBlack"+i, {  borderRadius:'0' }, {at:'-0.5',duration: 0.5, easing:customInOut}],  
            [e.target, {  color:'white' }, {at:0, duration: 0.5, easing:customInOut}],  
            // [".accordionContent"+i, {  scaleX:0.95 }, {at:0, duration: 0.5, easing:customInOut}],  
            [closeButtonFaq, {  stroke:"white"}, {at:0, duration: 0.5, easing:customInOut}],  

        ]
        timeline(sequence)
    };

    const handleMouseLeave = (e,i) => {
        let closeButtonFaq = e.target.querySelector('.closeButtonFaq svg')
        const sequence = [
            [".accordionFaqAnimateBlack"+i, {  transform:'translateY(-100%)' }, {duration: 0.5, easing:customInOut}],  
            [".accordionFaqAnimateBlack"+i, {  borderRadius:'100%' }, {at:'-0.5',duration: 0.5, easing:customInOut}],  
            [e.target, {  color:'black'  }, {at:0, duration: 0.5, easing:customInOut}],  
            // [".accordionContent"+i, {  scaleX:1 }, {at:0, duration: 0.5, easing:customInOut}],  
            [closeButtonFaq, {  stroke:"black"}, {at:0, duration: 0.5, easing:customInOut}],  
        ]
        timeline(sequence)
    };
    


</script>

<Accordion.Root 
class="w-full text-[1.15em] mt-3em mb-2em
md:text-[1.15em]
lg:text-[1.3em] lg:max-w-[53em] lg:mx-auto" 
multiple value="$0">

    {#each items as item, i}
        <Accordion.Item value="${i}"  
        class="px-1hem accordionItemFaq relative overflow-hidden border-b-[1px] border-[#6E6E6E]"
        >
        <div class="accordionFaqAnimateBlack{i} rounded-[100%] bg-black absolute w-full h-full left-0 top-0 -translate-y-full"></div>

            <Accordion.Header>
                <Accordion.Trigger class="font-light w-full text-[1.2em] transition-all 
                group [&[data-state=open]>div>span>.closeButtonFaq]:rotate-[180deg]" 
                >
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <div class="accordionAnimate relative overflow-hidden flex w-full flex-1 items-center justify-between  py-[1.2em]
                    md:py-1em "
                    on:mouseenter={(e)=>handleMouseEnter(e,i)} on:mouseleave={(e)=>handleMouseLeave(e,i)}>

                        <span class="text-[1.2em] lg:text-[1.5em] relative font-medium text-left w-[85%] lg:w-[95%]">{item.title}</span>
                        <span class="relative inline-flex items-center justify-center rounded-[7px] bg-transparent transition-all ">
                            <div class=" closeButtonFaq w-[1.5em] aspect-square transition-all duration-700">
                                
                                <svg class="group-hover:invert-0 invert transition-[filter] duration-700 ease-in-out" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="23.5" cy="23.5" r="21.5" fill="black"/>
                                    <path d="M23.2305 19.2031L29.9492 27.2656H16.5117L23.2305 19.2031Z" fill="white"/>
                                    <circle cx="23.5" cy="23.5" r="22.25" stroke="white" stroke-width="1.5"/>
                                </svg>                                                                
                            </div>
                        </span>
                    </div>
                </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content
                transition={slide}
                transitionConfig={{ duration: 700, easing: expoInOut}}
                class="accordionContent{i} leading-[1em] relative  pb-[1.5em] max-w-[40em]  text-[#7e7e7e] text-[1.2em]
                md:pb-2em 
                md:text-[1em]
                lg:text-[0.956em]"
            >
                <span class=" text-[0.8em] ">{item.content}</span>
            </Accordion.Content>
        </Accordion.Item>
    {/each}
</Accordion.Root>