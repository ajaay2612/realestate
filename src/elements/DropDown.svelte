<script>
    import { fly } from "svelte/transition";
    export let dropDowns, title, i;


    let show = false
</script>

<svelte:window on:click={
    (e)=>{
        if(e.target.closest(`.impDiv${i}`) == null){
            show = false
        }
    }
}/>


<div class="impDiv{i} relative text-[black] mt-[0.4em] text-[1.4em] md:text-[1em]">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="px-[1em]">
        <h2 class="text-[#6E6E6E] capitalize text-[0.7em]">{title}</h2>
    </div>
    <div on:click={()=>show = !show} class="cursor-pointer flex justify-between items-center w-full py-[0.6em] px-[1em] border-none rounded-[0.8em] ">
        <div class=" font-medium capitalize flex gap-0hem justify-center items-center">

            {#if dropDowns.all[dropDowns.active].icon}
                <div class="h-[1em] aspect-square"><img src="{dropDowns.all[dropDowns.active].icon}" alt=""></div>
            {/if}            
            {dropDowns.all[dropDowns.active].name}
        </div>
        <div class="w-[0.5em]">
            <svg style="rotate:{show ? '180deg':''}" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.1645 0.582466C1.44112 0.305845 1.88961 0.305845 2.16623 0.582466L4.4987 2.91493L6.83116 0.582466C7.10779 0.305845 7.55628 0.305845 7.8329 0.582466C8.10952 0.859087 8.10952 1.30758 7.8329 1.5842L4.99957 4.41753C4.86673 4.55037 4.68656 4.625 4.4987 4.625C4.31084 4.625 4.13067 4.55037 3.99783 4.41753L1.1645 1.5842C0.887876 1.30758 0.887876 0.859087 1.1645 0.582466Z" fill="#797979"></path></svg>
        </div>
    </div>

    {#if show}
        <div transition:fly={{y:-10}} class="shadow-md z-10 absolute left-0 top-full bg-white  mt-[0.4em] w-full  border-none rounded-[0.8em] p-0hem">
            {#each dropDowns.all as drop,i}
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div on:click={()=>{dropDowns.active=i, show = false}} style="{i==0?'opacity:50%;pointer-events:none':''}" class="cursor-pointer hover:bg-[#f2f2f2d7]  py-[0.5em] px-[0.7em]  capitalize rounded-[0.6em] ">
                    <div class=" font-medium capitalize flex gap-0hem justify-start items-center">
                        {#if drop.icon}
                            <div class="h-[1em] aspect-square"><img src="{drop.icon}" alt=""></div>
                        {/if}
                        {drop.name}
                    </div>
                </div>
            {/each}    
        </div>
    {/if}
</div>