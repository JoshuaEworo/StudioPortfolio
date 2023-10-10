<script>
    import Marquee from '$lib/components/Marquee.svelte';
    import Hero from '$lib/assets/Hero.jpg'
    import { fly } from 'svelte/transition';

</script>

<svelte:head>
    <link rel="preload" as="image" href={Hero} />
</svelte:head>

<style lang="postcss">
    .hero{
        @apply relative overflow-x-hidden flex mt-8 sm:mt-8;
    }

    .marquee{
        @apply absolute w-full top-1/4 flex flex-col sm:gap-5;
    }

    .heroImage{
        @apply mx-auto;
        border-radius: 200px;
        width: 230px;
        height: 350px;
        object-fit: cover;
        z-index: 10;
    }

    @media (min-width: 640px) {
        .heroImage{
            width: 347px;
            height: 524px;
        }
    }
</style>

<div class="hero">
    <div class="marquee">
        <Marquee marqueeItems={["-  Software Engineering", "-  Artificial Intelligence", "-  Web Design"]} />
        <Marquee marqueeItems={["-  Web Design", "-  Artificial Intelligence", "-  Software Engineering"]} />
        <Marquee marqueeItems={["-  Software Engineering", "-  Artificial Intelligence", "-  Web Design"]} />
        <Marquee marqueeItems={["-  Web Design", "-  Artificial Intelligence", "-  Software Engineering"]} />
    </div>
    <img in:fly class=heroImage src={Hero} alt="">
</div>