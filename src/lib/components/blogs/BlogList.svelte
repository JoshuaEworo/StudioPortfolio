<script lang="ts">
    import { blogStore } from '../../../blogStore';
	import BlogCard from "./BlogCard.svelte";

    const currentDate = new Date();
    export let isPage = true;
    let n_items: number = 3;

    $: allArticles = $blogStore
        .filter(article => article.published === true)
        .filter(article => new Date(article.created_at) <= currentDate)

        $: articles = isPage ? allArticles : allArticles.slice(0, n_items);

</script>

<style lang="postcss">
    .blogs{
        @apply mt-20 flex flex-col gap-16 w-11/12 mx-auto;
    }
</style>

<div class="blogs">
    {#each articles as article}
        <BlogCard article={article}/>
    {/each}
</div>