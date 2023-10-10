<script lang="ts">
    import ProjectCard from "$lib/components/works/ProjectCard.svelte";
    import PageHeader from "$lib/components/PageHeader.svelte";

    let projects = [
        { 
            name : "RenovateX",
            type : "Website Design",
            img : "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            link: "/"
        },
        { 
            name : "Exodus",
            type : "AI-Powered Solutions",
            img : "https://images.unsplash.com/photo-1465256410760-10640339c72c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            link: "/"
        },
        { 
            name : "SpaceOrcas",
            type : "Website Development",
            img : "https://images.unsplash.com/photo-1615378536579-61c7d173e8a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
            link: "/"
        },
        { 
            name : "Elysium AI",
            type : "Website Development",
            img : "https://images.unsplash.com/photo-1615525137689-198778541af6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80",
            link: "/"
        },
    ];
    
    let filtered = projects;
    let activeFilter = "all";

    function filterByType(type:string){
        activeFilter = type;
        if (type == "all"){
            filtered = projects;
        } else {
            filtered = projects.filter(project => project.type === type);
            if (filtered.length == 0){
                filtered = projects;
            }
        }
        console.log(filtered);
    }
</script>

<style lang="postcss">
    .works{
        @apply mt-32 pb-20;
    }
    
    .filters{
        @apply flex flex-row gap-8 w-3/4 justify-between mx-auto pt-16 font-semibold;
    }

    .filter{
        @apply text-indigo-600;
    }

</style>

<PageHeader subtitle="Portfolio of Past Projects" title='My Projects'/>

<div class="dark-section vw">
    <div class="wrapper">
        <div class="filters">
            <button on:click={() => filterByType("all")} class:filter={activeFilter === "all"}>View all</button>
            <button on:click={() => filterByType("Website Design")} class:filter={activeFilter === "Website Design"}>Website Design</button>
            <button on:click={() => filterByType("Website Development")} class:filter={activeFilter === "Website Development"}>Website Development</button>
            <button on:click={() => filterByType("AI-Powered Solutions")} class:filter={activeFilter === "AI-Powered Solutions"}>AI-Powered Solutions</button>
            <button on:click={() => filterByType("Extras")} class:filter={activeFilter === "Extras"}>Extras</button>
        </div>
    
        <div class="works">
            {#each filtered as project}
                <ProjectCard name={project.name} img={project.img} type={project.type} link={project.link}/>
            {/each}
        </div>
    </div>
</div>