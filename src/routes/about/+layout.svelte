<script>
import "../../app.css";
import Navbar from '$lib/components/Navbar.svelte';
import Footer from '$lib/components/Footer.svelte';
import CallToAction from "$lib/components/CallToAction.svelte";
</script>


<svelte:head>
<link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'>
<link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>
</svelte:head>

<Navbar />
<slot />
<CallToAction />
<Footer />