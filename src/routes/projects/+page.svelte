<script lang="ts">
    import PageHeader from "$lib/components/PageHeader.svelte";
	import WorksList from "$lib/components/works/WorksList.svelte";

</script>

<style lang="postcss">

</style>

<PageHeader subtitle="A portfolio of all my projects and creations" title='My Projects' showSubtitle={true}/>

<section class="works di-sect">
    <WorksList />
</section>
<hr class="di-vide">