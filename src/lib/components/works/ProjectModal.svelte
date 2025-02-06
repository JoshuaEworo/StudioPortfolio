<script lang="ts">
    import { fade } from 'svelte/transition';
    import Fa from 'svelte-fa';
    import { 
        faGithub,
        faReact,
        faDeviantart, // for DevPost
        faCodepen // for Replit
    } from '@fortawesome/free-brands-svg-icons';
    import { faGlobe } from '@fortawesome/free-solid-svg-icons';

    export let showModal: boolean;
    export let project: {
        name: string;
        type: string;
        img: string;
        description: string;
        links: Array<{url: string, icon: string, label: string}>;
    };

    // Map link labels to Font Awesome icons
    const getIcon = (label: string) => {
        switch(label.toLowerCase()) {
            case 'github':
                return faGithub;
            case 'website':
            case 'live demo':
            case 'devpost':
                return faGlobe;
            case 'replit':
                return faCodepen;
            default:
                return faGlobe;
        }
    };

    const closeModal = () => {
        showModal = false;
    };

    const handleOutsideClick = (e: MouseEvent) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };
</script>

<style lang="postcss">
    .modal-overlay {
        @apply fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center;
    }
    .modal-content {
        @apply bg-white text-black rounded-2xl max-w-2xl w-full mx-4 relative border border-white transition-all duration-700 ease-in-out;
    }
    .close-button {
        @apply absolute top-4 right-4 text-white hover:text-red-300 transition-colors;
    }
    .project-image {
        @apply w-full h-64 rounded-t-2xl object-cover;
    }
    .links-container {
        @apply flex gap-4 mt-4;
    }
    .link-item {
        @apply flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors;
    }
</style>

{#if showModal}
    <div 
        class="modal-overlay" 
        on:click={handleOutsideClick} 
        transition:fade
    >
        <div class="modal-content">
            <button class="close-button" on:click={closeModal}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            
            <img src={project.img} alt={project.name} class="project-image"/>

            <div class="px-4 py-8">
                <h3 class="text-2xl font-bold mb-2">{project.name}</h3>
                <p class="text-gray-600 mb-2 italic font-normal text-neutral-500">{project.type}</p>
                <p class="text-gray-800 mb-4 font-normal">{project.description}</p>
                
                <div class="links-container">
                    {#each project.links as link}
                        <a 
                            href={link.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            class="link-item"
                        >
                            <Fa icon={getIcon(link.label)} size="lg"/>
                            <span class="font-semibold">{link.label}</span>
                        </a>
                    {/each}
                </div>
            </div>
        </div>
    </div>
{/if}