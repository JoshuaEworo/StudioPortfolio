<script lang="ts">
    import PageHeader from "$lib/components/PageHeader.svelte";
	import BlogList from "$lib/components/blogs/BlogList.svelte";
</script>

<style lang="postcss">

</style>

<svelte:head>
    <title>Blog | Joshua Eworo</title>
</svelte:head>

<PageHeader subtitle="A journal for all my thoughts, experiments, and insights" title='My Journal' showSubtitle={true}/>
<section class="Blogs di-sect">
    <BlogList isPage={true}/>
</section>
<hr class="di-vide">