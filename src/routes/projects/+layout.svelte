<script>
    import "../../app.css";
    import Navbar from '$lib/components/Navbar.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import CallToAction from "$lib/components/CallToAction.svelte";
</script>


<svelte:head>
</svelte:head>

<Navbar />
<slot />
<CallToAction />
<Footer />