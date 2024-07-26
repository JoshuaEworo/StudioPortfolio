<script lang="ts">
	import ProjectCard from "./ProjectCard.svelte";
    export let allProjects;
    export let n_items: number = allProjects.length;

    let projects = allProjects.slice(0, n_items);
</script>

<style lang="postcss">
    .projects{
        @apply w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12;
    }
</style>

<div class="projects">
    {#each projects as project}
        <ProjectCard name={project.name} type={project.type} img={project.img} link={project.link}/>
    {/each}
</div>