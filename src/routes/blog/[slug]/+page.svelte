<script lang="ts">
    import { blogStore } from '../../../blogStore';
    import { page } from '$app/stores';
    import SvelteMarkdown from 'svelte-markdown'
    import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
	import Fa from 'svelte-fa';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import Button from '$lib/components/Button.svelte';

    const id = $page.params.slug;

    $: article = $blogStore.find((article) => article.id == id);
    console.log(article);
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
    <PageHeader title={article.title} subtitle={article.description} showSubtitle={false}/>
    <div class="dark-section">
        <div id="md" class="wrapper-blog py-8">
            <SvelteMarkdown source={article.content}  />
        </div>
        <div class="centered">
            <Button text="🡰 Back" src="javascript:history.back()"/>
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

<hr class="di-vide">
