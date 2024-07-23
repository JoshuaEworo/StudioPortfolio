<script>
    import Hero from '$lib/assets/AboutHero.webp'
	import PageHeader from '$lib/components/PageHeader.svelte';
    import 'iconify-icon'

    let iconSize = 60;
</script>

<style lang='postcss'>
    .about{
        @apply flex flex-col gap-32;
    }
    .introduction{
        @apply w-11/12 mx-auto grid md:grid-cols-[2fr_2fr] lg:grid-cols-[3fr_1.5fr] gap-16;
    }
    .intro-text{
        @apply flex flex-col gap-3;
    }
    .intro-left{
        @apply flex flex-col justify-center;
    }
    .sectHeader{
        @apply mb-5;
    }
    .intro-right{
        @apply h-full w-full;
    }
    .image{
        @apply rounded-xl border h-full w-full object-cover;
    }

    .proficiency{
        @apply w-11/12 mx-auto;
    }
    .logos{
        @apply grid grid-cols-3 lg:grid-cols-5 gap-12 w-10/12 mx-auto my-12;
    }
    .logos div{
        @apply flex justify-center my-6;
    }
</style>

<svelte:head>
    <link rel="preload" as="image" href={Hero} />
</svelte:head>

<PageHeader title="About Me" subtitle="A little about myself" showSubtitle={true}/>
<div class="about di-sect">
    <section class="introduction">
        <div class="intro-left">
            <h3 class="sectHeader">Introduction</h3>
            <div class="intro-text">
                <p>Hello, I'm Joshua Eworo, a self-taught software engineer based out of Houston. I find joy in being able to bring together the worlds of creativity and logic. I enjoy using my skill-set to create products that not only have beautiful aesthetics, but have amazing utility as well.</p>
                <p>From an early age, I loved being immersed in technology and innovation in various aspects. I did it all when I was younger, from tinkering with arduinos and robot kits, to letting my imagination run wild creating little video games. My love for technology and creation brought me here, to a place where I can utilize my skill-set to contribute to this ever growing technological landscape.</p>
                <p>I'm excited to continue refining and developing my skills to learn and grow. To be able to bring the best experience to your users is a pleasure of mine. Want to tell me about any available job opportunities or just want to say hello? Reach out :)</p>
            </div>
        </div>
        <div class="intro-right">
            <img class="image" src={Hero} alt="">
        </div>
    </section>

    <section class="proficiency">
        <h3 class="sectHeader">Skills I am Proficient At</h3>
        <div class="logos">
            <div><iconify-icon icon="devicon:html5" style="font-size: {iconSize}px;"></iconify-icon></div>
            <div><iconify-icon icon="devicon:css3" style="font-size: {iconSize}px;"></iconify-icon></div>
            <div><iconify-icon icon="devicon:javascript" style="font-size: {iconSize}px;"></iconify-icon></div>
            <div><iconify-icon icon="devicon:python" style="font-size: {iconSize}px;"></iconify-icon></div>
            <div><iconify-icon icon="devicon:cplusplus" style="font-size: {iconSize}px;"></iconify-icon></div>
            <div><iconify-icon icon="devicon:react" style="font-size: {iconSize}px;"></iconify-icon></div>
            <div><iconify-icon icon="teenyicons:nextjs-outline" style="color: white; font-size: {iconSize}px;"></iconify-icon></div>
            <div><iconify-icon icon="devicon:svelte" style="font-size: {iconSize}px;"></iconify-icon></div>
            <!-- <div><iconify-icon icon="vscode-icons:file-type-vercel" style="font-size: {iconSize}px;"></iconify-icon></div> -->
            <div><iconify-icon icon="devicon:tailwindcss" style="font-size: {iconSize}px;"></iconify-icon></div>
            <div><iconify-icon icon="devicon:figma" style="font-size: {iconSize}px;"></iconify-icon></div>
        </div>
    </section>
</div>
<hr class="di-vide">