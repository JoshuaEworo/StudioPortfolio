<script lang="ts">
    import Fa from 'svelte-fa';
    import { faClose } from '@fortawesome/free-solid-svg-icons'
    import { createBlog } from '../../../blogStore';
    import { fade } from 'svelte/transition';


    let title: string;
    let description: string;
    let imgLink: string;
    export let isOpen : Boolean;

    function stringToSlug(input: string) {
        return input
            .toLowerCase()
            .replace(/\s+/g, '-')   // Replace spaces with -
            .replace(/[^\w-]+/g, '')  // Remove non-word characters
            .replace(/--+/g, '-')    // Replace multiple - with single -
            .replace(/^-+/, '')      // Trim - from start of text
            .replace(/-+$/, '');     // Trim - from end of text
    }

    const createPost = async () => {
        let id = stringToSlug(title);
        await createBlog(id, title, description, imgLink);
        title = "";
        description = "";
        imgLink = "";
        isOpen = !isOpen;
    }
    

</script>

<style lang="postcss">
    .viewFill{
        @apply w-screen h-screen flex absolute top-0 left-0 justify-center items-center text-black;
        backdrop-filter: blur(8px);
    }
    .modal{
        @apply w-1/2 bg-white rounded-lg p-4;
    }
    .close{
        @apply flex w-full justify-between;
    }
    .inputHolder{
        @apply bg-none border border-black py-2 px-3 mt-3;
    }
    input{
        all: unset;
        @apply w-full;
    }
    .form{
        @apply flex flex-col gap-4;
    }
    .submit{
        @apply flex justify-end;
    }
    .submitBtn{
        @apply border border-black bg-none py-1 px-6 mt-3;
    }
</style>

{#if isOpen == true}
    <div transition:fade={{ delay: 250, duration: 100 }} class="viewFill">
        <div class="modal">
            <div class="close font-semibold">
                <span></span>
                <p>Create Blog</p>
                <button on:click={()=>{isOpen = !isOpen}} class="closeBtn"><Fa icon={faClose} size="lg"/></button>
            </div>
            <div class="form">
                <div class="title formIn">
                    <label for="title"><p>Title:</p></label>
                    <div class="inputHolder">
                        <input name="title" type="text" placeholder="Input title here..." bind:value={title} required />
                    </div>
                </div>
                <div class="desc formIn">
                    <label for="desc"><p>Description:</p></label>
                    <div class="inputHolder">
                        <input name="desc" type="text" placeholder="Input description here..." bind:value={description} />
                    </div>
                </div>
                <div class="header formIn">
                    <label for="link"><p>Header Image Link:</p></label>
                    <div class="inputHolder">
                        <input name="link" type="text" placeholder="Input link here..." bind:value={imgLink} />
                    </div>
                </div>
                <div class="submit">
                    <button on:click={createPost} class="submitBtn">Create Post</button>
                </div>
            </div>
        </div>
    </div>
{/if}