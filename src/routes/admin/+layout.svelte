<script>
    import "../../app.css";
    import { enhance } from "$app/forms";
    import pfLogo from '$lib/assets/pf-logo.webp'
    import { goto } from '$app/navigation';


    export let data;
	$: ({ supabase } = data);

	$: logout = async () => {
		const { error } = await supabase.auth.signOut();
		if (error) {
			console.error(error);
		}
        const thisPage = window.location.pathname;
        goto(thisPage);
	};
</script>

<style lang="postcss">
    .navbar{
        @apply flex flex-row w-full px-5 mx-auto my-4 justify-between;
    }
    .n-left{
        @apply flex flex-row;
    }
    .loginBtn{
        @apply border border-white rounded-3xl px-6 py-1;
    }
    .loginBtn p{
        @apply text-sm;
    }
    .logo{
        @apply invert mr-4;
        width: 37.2px;
        height: 31.2px;
    }
    .screen{
        @apply overflow-y-hidden h-screen;
        background-color: #0D0D0D;
    }
</style>

<main class="screen">
    <div class = "navbar">
        <div class="n-left">
            <img class="logo" src={pfLogo} alt="">
            <h6>Admin Console</h6>
        </div>

        <form method="POST" action="login?/logout" use:enhance>
            <button class="loginBtn" on:click={logout}><p>Log Out</p></button>
        </form>
    </div>
    <hr>
    <slot />
</main>