<!-- WorksList.svelte -->
<script lang="ts">
    import ProjectCard from "./ProjectCard.svelte";
    import Modal from "./ProjectModal.svelte";
    
    export let allProjects;
    export let n_items: number = allProjects.length;
    let projects = allProjects.slice(0, n_items);
    
    let showModal = false;
    let selectedProject = null;

    function handleOpenModal(event) {
        selectedProject = event.detail;
        showModal = true;
    }
</script>

<style lang="postcss">
    .projects{
        @apply w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12;
    }
</style>

<div class="projects">
    {#each projects as project}
        <ProjectCard 
            {...project}
            on:openModal={handleOpenModal}
        />
    {/each}
</div>

{#if showModal && selectedProject}
    <Modal 
        bind:showModal
        project={selectedProject}
    />
{/if}