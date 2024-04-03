<script>
    import Button from "./Button.svelte";
</script>

<style lang="postcss">
    /* span{
        @apply mx-3 inline-block;
    } */
    h1{
        @apply text-6xl;
    }
    .section-wrapper{
        @apply mx-auto max-w-7xl w-11/12 pb-28;
    }
    .centerbtn{
        @apply flex justify-center;
    }
    .cta>div{
        @apply text-center flex flex-col gap-8 lg:w-2/3;
    }
    .cta>div>h1{
        @apply w-5/6 sm:w-3/4 mx-auto;
    }
    .cta>div>p{
        @apply w-5/6 sm:w-1/2 mx-auto;
    }
    .themedWord{
        @apply text-indigo-700;
    }
</style>

<section class="cta section">
    <div class="section-wrapper">
        <h1>Let's create <span class="themedWord">amazing</span> work together!</h1>
        <p>I'm available for new collaborations & projects. If you'd like to work with me, reach out, I'll be happy to help!</p>
        <div class="centerbtn">
            <Button text="Get in touch!"/>
        </div>
    </div>
</section>