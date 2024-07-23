<script lang="ts">
    import Navbar from '$lib/components/Navbar.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import CallToAction from "$lib/components/CallToAction.svelte";
    import Hero from '$lib/components/Hero.svelte';
    import Button from "$lib/components/Button.svelte";
	import WorksList from '$lib/components/works/WorksList.svelte';
	import BlogList from '$lib/components/blogs/BlogList.svelte';

    const scroll = () => {
        const section = document.querySelector( '#featured' );
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            console.error("Section element not found.");
        }
    };

    export let data;

</script>

<style lang="postcss">
    .scroll{
        @apply text-sm flex w-full justify-center underline mt-16;
    }
    .centered{
        @apply w-full flex justify-center mt-28;
    }
    .sectionHeader{
        @apply mb-28;
    }
</style>

<svelte:head>
    <title>Home | Joshua Eworo</title>
</svelte:head>

<Navbar/>

<section class="Hero-Section di-sect">
    <Hero />
    <button class="scroll" on:click={scroll}>
        <span>SCROLL</span>
    </button>
</section>

<hr class="di-vide">

<section class="Works-Section di-sect">
    <h1 class="sectionHeader" id="featured">Featured Works</h1>
    <WorksList allProjects={data.projects} n_items={3}/>
    <div class="centered">
        <Button text="View All Projects" src="/projects"/>
    </div>
</section>

<hr class="di-vide">

<section class="Blog-Section di-sect">
    <h1 class="sectionHeader" id="featured">Latest Blogs</h1>
    <BlogList isPage={false}/>
    <div class="centered">
        <Button text="View All Posts" src="/blog"/>
    </div>
</section>

<hr class="di-vide">

<CallToAction />

<Footer/>