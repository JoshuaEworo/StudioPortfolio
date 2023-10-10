<script lang="ts">
    export let subtitle: string;
    export let title: string;
</script>

<style lang="postcss">
    section{
        @apply w-full text-center pt-20 pb-40 mt-12;
    }

    p{
        @apply text-sm sm:text-lg;
    }
</style>

<section>
    <div class="wrapper">
        <p>{subtitle}</p>
        <h1>{title}</h1>        
    </div>
</section>