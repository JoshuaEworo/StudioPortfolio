<script lang='ts'>
    import Fa from 'svelte-fa'
    import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    let isMobile = 767;
    let windowWidth: any;
    $: size = windowWidth <= isMobile ? "sm" : "lg";

</script>

<style lang="postcss">
    footer{
        @apply w-full;
        background-color: #0D0D0D;
    }
    .wrapper{
        @apply w-11/12 max-w-7xl mx-auto py-6 flex flex-row justify-between;
    }
    .icons{
        @apply flex flex-row gap-6 sm:gap-12;
    }
</style>


<svelte:window bind:innerWidth={windowWidth} />

<footer>
    <div class="wrapper">
        <div class="left">
            <p>© {currentYear} Joshua Eworo</p>
        </div>
        <div class="right">
            <div class="icons">
                <a target="_blank" href="https://github.com/JoshuaEworo">
                    <Fa icon={faGithub} size="{size}"/>
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/joshuaeworo/">
                    <Fa icon={faLinkedin} size="{size}"/>
                </a>
                <a target="_blank" href="https://twitter.com/JoshuaEworo/">
                    <Fa icon={faTwitter} size="{size}"/>
                </a>
            </div>
        </div>
    </div>
</footer>