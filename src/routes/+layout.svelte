<script>
    import "../app.css";
    import Header from "../components/Header.svelte";
    import Footer from "../components/Footer.svelte";
    import FooterV2 from "../components/FooterV2.svelte";
    import lenisStore from '../stores/lenisStore.js';
    import { afterNavigate,beforeNavigate } from '$app/navigation';
    import { onMount } from 'svelte';
	import { page } from '$app/stores';
    import Lenis from 'lenis'

    onMount(() => {
        // lenis
        $lenisStore.store = new Lenis()

        $lenisStore.store.on('scroll', (e) => {
            $lenisStore.onScroll = e
    
        })

        function raf(time) {
            $lenisStore.store.raf(time)
            requestAnimationFrame(raf)
        }


        requestAnimationFrame(raf)

        if ($page.url.hash) {
            $lenisStore.store.scrollTo($page.url.hash)
            // console.log("hashed")        
        }

    })

    beforeNavigate(() => {
        $lenisStore.store.stop()
        // console.log("stopped")
    })

    afterNavigate(() => {
        $lenisStore.store.start()
        // console.log("started")
    })
</script>



<div class="mainController font-roboto" >
    <Header/>
    <slot />
    <Footer/>
    <FooterV2/>
</div>