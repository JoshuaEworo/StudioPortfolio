<script lang="ts">
    import PageHeader from "$lib/components/PageHeader.svelte";
	import WorksList from "$lib/components/works/WorksList.svelte";
    import { fade } from 'svelte/transition'
    export let data;
</script>

<svelte:head>
    <title>Projects | Joshua Eworo</title>
</svelte:head>

<style lang="postcss">

</style>

{#if data.projects}
    <div in:fade={{ duration: 350, delay: 350 }}>
        <PageHeader subtitle="A portfolio of all my projects and creations" title='My Projects' showSubtitle={true}/>

        <section class="works di-sect">
            <WorksList allProjects={data.projects}/>
        </section>
        <hr class="di-vide">
    </div>
{:else}
    <div class="h-screen"></div>
{/if}