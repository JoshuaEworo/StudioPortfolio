<script lang="ts">
  import "../app.css";
  import '@fontsource-variable/montserrat';
  import '@fontsource/poppins/600.css';

  import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	export let data;
	$: ({ session, supabase } = data);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});

	import { afterNavigate, disableScrollHandling } from '$app/navigation';

	afterNavigate(() => {
		disableScrollHandling();
		setTimeout(() => {
			scrollTo({ top: 0, behavior: 'instant' });
		}, 300);
	});

	// import type { PageData } from './$types'
    import PageTransition from "$lib/components/transition.svelte"
</script>


<svelte:head>
</svelte:head>

<PageTransition key={data.url}>
	<slot />
</PageTransition>