<script lang="ts">
    export let subtitle: string;
    export let title: string;
    export let showSubtitle: boolean;

</script>

<style lang="postcss">
    section{
        @apply w-full text-center py-20 mt-12;
    }

    .wrapper{
        @apply w-11/12 mx-auto flex flex-col gap-3;
    }

    h1{
        @apply text-6xl
    }

    p{
        @apply text-sm sm:text-lg;
    }
</style>

<section>
    <div class="wrapper">   
        <h1>{title}</h1>  
        {#if showSubtitle }
            <p>{subtitle}</p>
        {/if}   
    </div>
</section>