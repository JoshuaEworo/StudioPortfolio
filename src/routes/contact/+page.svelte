<script>
    import Hero from '$lib/assets/AboutHero.jpg'
	import Button from '$lib/components/Button.svelte';
    import { fly } from 'svelte/transition';
</script>

<style lang='postcss'>
    .hero{
        @apply mt-12;
    }
    .h-wrapper{
        @apply flex flex-col-reverse lg:flex-row h-80;
    }
    .hero-left{
        @apply w-full lg:w-1/2 relative;
    }
    .hero-img{
        @apply absolute overflow-hidden -top-52 lg:top-0 right-0 left-0  mx-auto lg:mx-0 z-10 w-60 h-80 sm:w-72 sm:h-96;
    }
    @media (min-width: 1024px) {
        .hero-img{
            width: 441px; /* 485px; */
            height: 527px; /* 580px; */
        }
    }

    .hero-right{
        @apply w-full lg:w-1/2 flex justify-start z-10;
    }
    .hero-text{
        @apply text-left mt-20 lg:my-40 lg:pb-0 md:pb-60 pb-60;
    }
    .a-wrapper{
        @apply py-60;
    }

    /* .linkBTN{
        @apply w-full flex flex-col md:flex-row gap-5 md:gap-3 justify-between mt-16;
    }
    .Button{
        @apply w-60 flex justify-center mx-auto;
    } */
</style>

<svelte:head>
    <link rel="preload" as="image" href={Hero} />
</svelte:head>

<section class="hero section">
    <div class="wrapper h-wrapper">
        <div class="hero-left">
            <div class="hero-img">
                <img in:fly src={Hero} alt="">
            </div>
        </div>
        <div class="hero-right">
            <div class="hero-text">
                <p>Get in touch!</p>
                <h1>Contact Me</h1>
            </div>
        </div>
    </div>
</section>

<section class="about dark-section">
    <div class="wrapper a-wrapper">
    </div>
</section>