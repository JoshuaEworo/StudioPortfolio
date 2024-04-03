<script lang="ts">
    import { deleteBlog } from '../../../blogStore';
    import { fade } from 'svelte/transition';

    export let id: string;
    export let isOpen : Boolean;
    
    const deletePost = async () => {
        await deleteBlog(id);
        isOpen = !isOpen;
    }

</script>

<style lang="postcss">
    .viewFill{
        @apply w-screen h-screen flex absolute top-0 left-0 justify-center items-center text-black;
        backdrop-filter: blur(8px);
    }
    .modal{
        @apply w-1/3 bg-white rounded-lg p-4;
    }
    .modalHead{
        @apply flex w-full justify-center;
    }
    .form{
        @apply flex flex-col gap-4;
    }
    .submit{
        @apply flex justify-center gap-4;
    }
    .deleteBtn{
        @apply border border-black bg-none py-1 px-6 mt-3;
    }
    .cancelBtn{
        @apply border border-gray-600 bg-gray-600 text-white py-1 px-6 mt-3;
    }
    .form > p{
        @apply text-center mt-3;
    }
</style>

{#if isOpen == true}
    <div transition:fade={{ delay: 250, duration: 100 }} class="viewFill">
        <div class="modal">
            <div class="modalHead font-semibold">
                <p>Delete Blog</p>
            </div>
            <div class="form">
                <p>Are you sure you want to delete this blog?</p>
                <div class="submit">
                    <button on:click={()=>{isOpen = !isOpen}} class="cancelBtn">Cancel</button>
                    <button on:click={deletePost} class="deleteBtn">Delete</button>
                </div>
            </div>
        </div>
    </div>
{/if}