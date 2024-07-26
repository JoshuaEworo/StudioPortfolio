<script lang="ts">
    import { blogStore } from '../../../blogStore';
    import { page } from '$app/stores';
    import SvelteMarkdown from 'svelte-markdown'
	import PageHeader from '$lib/components/PageHeader.svelte';
	import Button from '$lib/components/Button.svelte';
    import { fade } from 'svelte/transition'

    const id = $page.params.slug;

    $: article = $blogStore.find((article) => article.id == id);
    // console.log(article);
</script>


<style lang="postcss">
    .wrapper-blog{
        @apply w-11/12 md:w-2/3 max-w-7xl mx-auto;
    }
    .centered{
        @apply w-full flex justify-center mt-12;
    }
</style>

{#if article}
    <div in:fade={{ duration: 350 }}> 
        <PageHeader title={article.title} subtitle={article.description} showSubtitle={false}/>
        <div class="dark-section">
            <div id="md" class="wrapper-blog py-8">
                <SvelteMarkdown source={article.content}  />
            </div>
            <div class="centered">
                <Button text="🡰 Back" src="javascript:history.back()"/>
            </div>
        </div>
    </div>
{:else}
    <div class="h-screen"></div>
{/if}

<hr class="di-vide">
