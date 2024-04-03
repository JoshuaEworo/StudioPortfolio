<script lang='ts'>
    import Fa from 'svelte-fa'
    import Icons from './Icons.svelte';
    import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
    let windowWidth: any;
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
</script>

<style lang="postcss">
    footer{
        @apply w-full;
        background-color: #0D0D0D;
    }
    .wrapper{
        @apply py-6 flex flex-row justify-between;
    }
</style>


<svelte:window bind:innerWidth={windowWidth} />

<footer>
    <div class="footer">
        <div class="wrapper di-sect">
            <div class="left">
                <p>© {currentYear} Joshua Eworo</p>
            </div>
            <div class="right">
                <Icons/>
            </div>
        </div>
    </div>
</footer>