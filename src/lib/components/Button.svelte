<script lang="ts" type="module">
    export let text: string;
    export let src: string = "/";
    export let isDropdown: boolean = false;
    export let ddDesc: string = "";

    import Fa from 'svelte-fa'
    import { fade } from 'svelte/transition';
    import { faArrowRight, faArrowDown } from '@fortawesome/free-solid-svg-icons'

    let isDropped: boolean = false
    const dropDesc = () => {
        isDropped = !isDropped
    }

</script>

<style>
    .button{
        @apply border border-white px-6 py-2 rounded-3xl inline-block text-lg;
    }

    .drop{
        @apply flex flex-col gap-5;
    }
    .main{
        @apply  border border-white px-6 py-2 rounded-3xl cursor-pointer flex gap-5;
    }
    .arrow{
        width: 20px;
    }
    .drop{
        @apply mt-6;
    }
</style>

{#if isDropdown===true}
    <div class="drop" on:click={dropDesc}>
        <div class="main">
            <div class="arrow">
                {#if isDropped === true}
                    <Fa icon={faArrowDown} size="lg"/>
                {:else}
                    <Fa icon={faArrowRight} size="lg"/>
                {/if}
            </div>
            <p>{text}</p>
        </div>
        {#if isDropped === true}
            <p transition:fade>{ddDesc}</p>
        {/if}
    </div>
{:else}
    <a href={src}>
        <div class="button">
            <p>{text}</p>
        </div>
    </a>
{/if}