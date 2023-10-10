<script>
    import Hero from '$lib/assets/AboutHero.jpg'
    import Marquee from '$lib/components/Marquee.svelte';
	import Button from '$lib/components/Button.svelte';
    import { fly } from 'svelte/transition';
</script>

<style lang='postcss'>
    .hero{
        @apply mt-12;
    }
    .h-wrapper{
        @apply flex flex-col-reverse lg:flex-row;
    }
    .hero-left{
        @apply w-full lg:w-1/2 relative;
    }
    .hero-img{
        @apply absolute overflow-hidden -top-52 lg:top-0 right-0 left-0  mx-auto lg:mx-0 z-10 w-60 h-80 sm:w-72 sm:h-96;
    }
    @media (min-width: 1024px) {
        .hero-img{
            width: 485px;
            height: 580px;
        }
    }

    .hero-right{
        @apply w-full lg:w-1/2 flex justify-center z-10;
    }
    .hero-text{
        @apply text-center mt-20 lg:my-40 lg:pb-0 md:pb-60 pb-60;
    }
    .a-wrapper{
        @apply py-20;
    }
    .intro{
        @apply mt-10 sm:mt-16;
    }
    .storyWrapper{
        @apply flex flex-col md:flex-row gap-6 md:gap-0 justify-between mt-6 md:mt-12;
    }
    .storyLeft{
        @apply md:mr-16 w-full md:w-1/2;
    }
    .storyRight{
        @apply md:ml-16 w-full md:w-1/2;
    }

    .linkBTN{
        @apply w-full flex flex-col md:flex-row gap-5 md:gap-3 justify-between mt-16;
    }
    .Button{
        @apply w-60 flex justify-center mx-auto;
    }
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
                <p>Hey, I’m Joshua!</p>
                <h1>About Me</h1>
            </div>
        </div>
    </div>
</section>

<section class="about dark-section">
    <Marquee marqueeItems={["- Engineer", "- Designer", "- Tinkerer", "- Creative", "- Engineer", "- Designer"]} />
    <div class="wrapper a-wrapper">
        <p class="intro">
            Hello, I'm Joshua Eworo, an applied AI and software engineer based out of Houston. I find joy in being able to bring together the worlds of creativity and logic. 
            I enjoy using my skill-set to create products that not only have beautiful aesthetics, but have amazing utility as well. Continuously pushing the boundaries of what's possible with technology, I strive to stay at the forefront of the ever-evolving AI and software engineering landscape. 
            My passion for innovation and problem-solving fuels my dedication to developing cutting-edge solutions that make a positive impact on people's lives. 
        </p>
        <div class="storyWrapper">
            <p class="storyLeft">
                From an early age, I loved being immersed in technology. I did it all when I was younger, from tinkering with arduinos and robot kits, to letting my imagination run wild creating little video games. My love for technology and creation brought me here, to a place where I can use my skill set to enhance your business.
            </p>
            <p class="storyRight">
                I am thrilled to enhance and advance my abilities, continuously refining my skills to foster learning and personal growth. Delivering an exceptional user experience brings me immense joy. Whether you wish to discuss job opportunities or simply want to say hello, reach out!
            </p>
        </div>
        <div class="linkBTN">
            <div class="Button">
                <Button text="View My Tech Stack"/>
            </div>
            <div class="Button">
                <Button text="View My Projects"/>
            </div>
            <div class="Button">
                <Button text="View My Blog"/>
            </div>
        </div>
    </div>
</section>