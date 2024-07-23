<script>
    import Hero from '$lib/assets/Hero.webp'
    import Hero2 from '$lib/assets/BWPFP.webp'
    import { fly } from 'svelte/transition';
	import Icons from './Icons.svelte';
</script>

<svelte:head>
    <link rel="preload" as="image" href={Hero} />
    <link rel="preload" as="image" href={Hero2} />
</svelte:head>

<style lang="postcss">
    .hero{
        @apply relative flex flex-col lg:flex-row justify-between mt-8 mx-auto;
        height: calc(100vh - 280px)
    }

    .visuals{
        font-family: 'Poppins';
        @apply flex flex-col h-96 justify-center my-auto px-8 lg:px-16 font-semibold;
    }
    .visual-text{
        font-size: 14vw;
        line-height: 1;
    }
    .vt-bottom{
        padding-left: 10vw;
        padding-right: 10vw;
    }

    .info{
        @apply flex flex-col gap-3 justify-center w-full lg:w-3/12;
    }
    .icons{
        @apply pt-2 w-full;
    }

    .HeroImageDiv{
        @apply absolute flex justify-end right-1 lg:right-1/3;
    }
    .heroImage{
        @apply rounded-full -z-10 mx-auto object-cover shadow-inner;
        width: 40vw;
        height: 40vw;
    }


    @media (min-width: 1024px) {
        .heroImage {
            width: 25vw;
            height: 25vw;
        }
        .visual-text{
            font-size: 9vw;
            line-height: 1;
        }
    }

</style>

<div class="hero">
    <div class="visuals select-none">
        <span class="visual-text">Joshua</span>
        <span class="visual-text vt-bottom">Eworo</span>
        <div class="HeroImageDiv">
            <img in:fly class="heroImage" src={Hero} alt="">
        </div>
    </div>
    <div class="info">
        <h4>I am Joshua Eworo, a software and applied AI engineer based in Houston, Texas</h4>
        <hr/>
        <p>I design and build websites, web applications, and AI-powered systems.</p>
        <div class="icons"><Icons/></div>
    </div>
</div>