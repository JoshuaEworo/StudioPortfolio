<script lang="ts">
    interface Blog {
        id: string;
        title: string;
        description: string;
        content: string; 
        header_image: string;
        created_at: string;
        published: boolean;
    }
    export let article: Blog;
</script>

<style lang="postcss">
    .blogpost{
        @apply grid md:grid-cols-[1fr_2fr] gap-3 lg:gap-5;
    }

    .text{
        @apply my-auto flex flex-col gap-3;
    }
    .image{
        @apply rounded-xl border w-[420px] h-[280px] object-cover;
    }
</style>

<a href = "/blog/{article.id}">
    <div class="blogpost">
        <div>
            <img class="image" src={article.header_image} alt="">
        </div>
        <div class="text">
            <h3>{article.title}</h3>
            <p>{article.description}</p>
        </div>
    </div>
</a>