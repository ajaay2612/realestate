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
        title: "Building construction",
        content:
          "To become a better person, to help others, and to leave the world a better place than you found it."
      },
      {
        title: "World glass solutions",
        content:
          "Read books, listen to podcasts, and surround yourself with people who inspire you."
      },
      {
        title: "Window joinery",
        content: "Give them your time, attention, and love."
      },
      {
        title: "Facade",
        content: "Give them your time, attention, and love."
      }
    ];

    const handleMouseEnter = (e,i) => {
        let blackBox = e.target.querySelector('.accordionAnimateBlack')
        let closeButton = e.target.querySelector('.closeButton svg')

        const sequence = [
            [".accordionAnimateBlack"+i, {  transform:'translateY(0)' }, {duration: 0.5, easing:customInOut}],  
            [".accordionAnimateBlack"+i, {  borderRadius:'0' }, {at:'-0.5',duration: 0.5, easing:customInOut}],  
            [e.target, {  color:'white',  scaleX:0.95  }, {at:0, duration: 0.5, easing:customInOut}],  
            // [".accordionContent"+i, {  scaleX:0.95 }, {at:0, duration: 0.5, easing:customInOut}],  
            [closeButton, {  stroke:"white"}, {at:0, duration: 0.5, easing:customInOut}],  

        ]
        timeline(sequence)
    };

    const handleMouseLeave = (e,i) => {
        let blackBox = e.target.querySelector('.accordionAnimateBlack')
        let closeButton = e.target.querySelector('.closeButton svg')
        const sequence = [
            [".accordionAnimateBlack"+i, {  transform:'translateY(-101%)' }, {duration: 0.5, easing:customInOut}],  
            [".accordionAnimateBlack"+i, {  borderRadius:'100%' }, {at:'-0.5',duration: 0.5, easing:customInOut}],  
            [e.target, {  color:'black', scaleX:1  }, {at:0, duration: 0.5, easing:customInOut}],  
            // [".accordionContent"+i, {  scaleX:1 }, {at:0, duration: 0.5, easing:customInOut}],  
            [closeButton, {  stroke:"black"}, {at:0, duration: 0.5, easing:customInOut}],  
        ]
        timeline(sequence)
    };
    


</script>

<Accordion.Root 
class="w-full text-[1.15em] mt-3em mb-2em
md:text-[1.15em]
lg:text-[1.3em]" 
multiple>

    {#each items as item, i}
        <Accordion.Item value="${i}"  
        class=" accordionItem translate-y-[20%] opacity-0 relative overflow-hidden border-[1px] border-b-0 border-[#E7E7E7]"
        >
        <div class="accordionAnimateBlack{i} rounded-[100%] bg-black absolute w-full h-full left-0 top-0 -translate-y-[101%]"></div>

            <Accordion.Header>
                <Accordion.Trigger class="font-light w-full text-[1.2em] transition-all 
                [&[data-state=open]>div>span>.closeButton]:rotate-[135deg]" 
                >
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <div class="accordionAnimate relative overflow-hidden flex w-full flex-1 items-center justify-between px-[1.5em] py-[1.5em]
                    md:py-2hem md:px-2em
                    lg:px-2em"
                    on:mouseenter={(e)=>handleMouseEnter(e,i)} on:mouseleave={(e)=>handleMouseLeave(e,i)}>
                        <span class="text-[1.2em] relative">{item.title}</span>
                        <span class="relative inline-flex items-center justify-center rounded-[7px] bg-transparent transition-all hover:bg-dark-10">
                            <div class=" closeButton w-[1.1em] aspect-square transition-all duration-700">
                                <svg stroke="black" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23 1L23 45" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                    <path d="M45 23L1 23" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </span>
                    </div>
                </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content
                transition={slide}
                transitionConfig={{ duration: 700, easing: expoInOut}}
                class="accordionContent{i} font-light relative px-[1.5em] pb-[1.5em] max-w-[20em]  text-[#7e7e7e] text-[1.2em]
                md:pb-2em md:px-2em
                lg:px-2em "
            >
                <span class=" text-[0.95em] tracking-[-0.01em]">{item.content}</span>
            </Accordion.Content>
        </Accordion.Item>
    {/each}
</Accordion.Root>