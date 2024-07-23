<script lang="ts" type="module">
    import pfLogo from '$lib/assets/pf-logo.webp'
    import Fa from 'svelte-fa'
    import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
	import { blur } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';

    let isDropped: Boolean = false
    $: navClass = isDropped ? "fixedNav" : "navbar";

    let navLinks = [
        {
            'page': "Home",
            'link': "/",
        },
        {
            'page': "Projects",
            'link': "/projects",
        },
        {
            'page': "Blog",
            'link': "/blog",
        },
        {
            'page': "About",
            'link': "/about",
        }
    ];
    
    const dropMenu = () => {
        isDropped = !isDropped;
    }
</script>

<style lang="postcss">
    .navbar{
        @apply w-full z-30;
    }
    .fixedNav{
        @apply fixed top-0 w-full z-30;
    }
    .wrapper{
        @apply flex flex-row justify-between py-12 z-30 relative;
    }
    .left{
        @apply flex items-center;
    }
    .right{
        @apply flex-row gap-12 hidden lg:flex;
    }
    .right-mobile{
        @apply lg:hidden;
    }

    .right>div{
        @apply flex items-center;
    }
    .dropWrapper>div{
        @apply flex justify-center w-full mb-12 text-xl font-medium;
    }
    .dropped{
        @apply h-screen fixed top-0 w-full z-20 flex items-center justify-center;
        /* background: linear-gradient(270deg, #280375 0.52%, #130138 19.79%, #0C0026 33.85%, #0E012B 47.40%, #190248 61.46%, #4108BA 99.08%); */
        background: url($lib/assets/Background.svg) center top repeat fixed;
        background-size: auto 100%;
    }
    .logo{
        @apply invert;
        width: 37.2px;
        height: 31.2px;
    }
    .btn{
        @apply border border-white px-6 py-2 rounded-3xl;
    }

    .filler{
        height: 87px; /* height of navbar  */
    }
</style>

<nav class={navClass}>
    <div class="wrapper di-sect">
        <div class="left">
            <a href="/"><img class="logo" src={pfLogo} alt=""></a>
        </div>
    
        <div class="right">
            {#each navLinks as links}
                <div>
                    <a data-sveltekit-preload-data="hover" href={links.link}>{links.page}</a>
                </div>
            {/each}
            <div class="get-started">
                <a href="mailto:eworojoshua@gmail.com">
                    <div class="btn">
                        Get in touch!
                    </div>
                </a>
            </div>
        </div>
    
        <div class="right-mobile">
            <button  transition:blur on:click={dropMenu} class="menu">
                {#if isDropped === false}
                    <div><Fa icon={faBars} size="2x"/></div>
                {:else}
                    <div><Fa icon={faClose} size="2x"/></div>
                {/if}
            </button>
        </div>
    </div>
</nav>

{#if isDropped}
    <nav transition:blur={{delay: 250, duration: 300, easing: quintOut}} class="dropped">
        <div class="dropWrapper">
            {#each navLinks as links}
                <div> 
                    <a on:click={dropMenu} href={links.link}>{links.page}</a>
                </div>
            {/each}
            <div class="get-started">
                <a on:click={dropMenu} href="/">
                    <div class="btn">
                        Get in touch!
                    </div>
                </a>
            </div>
        </div>
    </nav>
{/if}

{#if isDropped}
    <div class="filler"></div>
{/if}