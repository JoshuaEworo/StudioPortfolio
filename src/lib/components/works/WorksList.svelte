<script lang="ts">
	import ProjectCard from "./ProjectCard.svelte";
    let allProjects = [
        { 
            name : "Delta AI",
            type : "Web App Development | AI Application",
            img : "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            link: "/"
        },
        { 
            name : "Clarity Clyde",
            type : "Web App Development | AI Application",
            img : "https://images.unsplash.com/photo-1616017640739-44ce2bfd9b4e?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            link: "/"
        },
        { 
            name : "Aionos",
            type : "Hardware | AI Systems",
            img : "https://images.unsplash.com/photo-1572957074697-877d62384239?q=80&w=2965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            link: "/"
        },
        { 
            name : "Co-Mind Board",
            type : "Web App Development",
            img : "https://images.unsplash.com/photo-1552664688-cf412ec27db2?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            link: "/"
        },
        { 
            name : "Echo",
            type : "Desktop App Development | AI Application",
            img : "https://images.unsplash.com/photo-1573184426556-05c59aca2e3b?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            link: "/"
        },
        { 
            name : "Otto's Arena",
            type : "C++ Program | Game Development",
            img : "https://images.unsplash.com/photo-1525711857929-4272fb4a040f?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            link: "/"
        },
    ];
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