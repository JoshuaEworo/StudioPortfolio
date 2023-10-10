<script lang="ts">
    import PageHeader from "$lib/components/PageHeader.svelte";
    import { blogStore } from '../../blogStore';

    $: articles = $blogStore;
</script>

<style lang="postcss">
    .blogs{
        @apply py-20 flex flex-col gap-32;
    }

    .blogpost{
        @apply flex flex-col md:flex-row gap-8 lg:gap-16;
    }

    .text{
        @apply my-auto flex flex-col gap-3;
    }

    .img{
        @apply rounded-3xl;
    }
</style>

<PageHeader subtitle="Thoughts and Insights" title='My Journal'/>

<section class="dark-section">
    <div class="wrapper blogs">
        {#each articles as article}
            <a href = "/blog/{article.id}">
                <div class="blogpost">
                    <div class="img">
                        <img src={article.header_image} alt="">
                    </div>
                    <div class="text">
                        <h3>{article.title}</h3>
                        <p>{article.description}</p>
                    </div>
                </div>
            </a>
        {/each}
    </div>
</section>