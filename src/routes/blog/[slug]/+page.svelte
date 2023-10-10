<script lang="ts">
    import { blogStore } from '../../../blogStore';
    import { page } from '$app/stores';
    import SvelteMarkdown from 'svelte-markdown'
    import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
	import Fa from 'svelte-fa';
	import PageHeader from '$lib/components/PageHeader.svelte';

    const id = $page.params.slug;

    $: article = $blogStore.find((article) => article.id == id);
    console.log(article);
</script>


<style lang="postcss">
</style>

{#if article}
    <PageHeader title={article.title} subtitle={article.title}/>
    <div class="dark-section">
        <div id="md" class="wrapper py-8">
            <SvelteMarkdown source={article.content}  />
        </div>
    </div>
{:else}
    <div class="dark-section vw">
        <div class="holder">
            <div class="cautionlogo">
                <Fa icon={faTriangleExclamation} size="7x"/>
            </div>
            <div class="text">
                <h1 class="mb-4">UNDER CONSTRUCTION</h1>
                <p>We are currently working on this page. Sorry for the inconvenience.</p>
            </div>
        </div>
    </div>
{/if}
