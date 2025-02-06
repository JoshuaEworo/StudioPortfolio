<!-- ProjectCard.svelte -->
<script lang="ts">
    export let link: string;
    export let name: string;
    export let type: string;
    export let img: string;
    export let description: string;
    export let links: Array<{url: string, icon: string, label: string}>;
    
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    function openModal() {
        dispatch('openModal', {
            name,
            type,
            img,
            description,
            links
        });
    }
</script>

<style lang="postcss">
    .projectWrapper{
        @apply rounded-2xl drop-shadow-xl border cursor-pointer overflow-hidden relative;
    }
    .project-info{
        @apply flex flex-col p-5 pt-56 h-full justify-center w-full border-none relative z-10 text-white;
        background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%);
    }
    .background-image {
        @apply absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-out -z-0;
    }
    .projectWrapper:hover .background-image {
        @apply scale-110;
    }
</style>

<div class="projectWrapper" on:click={openModal}>
    <div class="background-image" style="background-image: url({img})"></div>
    <div class="project-info">
        <h4 class="text-xl font-bold">{name}</h4>
        <p class="text-sm mt-1">{type}</p>
    </div>
</div>