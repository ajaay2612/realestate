<script>
    import "../app.css";
    import Header from "../components/Header.svelte";
    import lenisStore from '../stores/lenisStore.js';
    import { afterNavigate,beforeNavigate } from '$app/navigation';
    import { onMount } from 'svelte';
	import { page } from '$app/stores';
    import Lenis from 'lenis'

    onMount(() => {
        // lenis
        $lenisStore = new Lenis()

        $lenisStore.on('scroll', (e) => {
            // console.log(e)
        })

        function raf(time) {
            $lenisStore.raf(time)
            requestAnimationFrame(raf)
        }


        requestAnimationFrame(raf)

        if ($page.url.hash) {
            $lenisStore.scrollTo($page.url.hash)
            // console.log("hashed")        
        }

    })

    beforeNavigate(() => {
        $lenisStore.stop()
        // console.log("stopped")
    })

    afterNavigate(() => {
        $lenisStore.start()
        // console.log("started")
    })
</script>



<div class="mainController font-roboto" >
    <Header/>
    <slot />
</div>