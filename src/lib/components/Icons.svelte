<script lang="ts">
import Fa from 'svelte-fa';
import { faGithub, faLinkedin, faRProject, faTwitter } from '@fortawesome/free-brands-svg-icons';

let isMobile = 767;
let windowWidth: any;
$: size = windowWidth <= isMobile ? "sm" : "lg";
</script>


<style lang="postcss">

.icons{
    @apply flex flex-row gap-6 sm:gap-12;
}
</style>


<!-- icon sizes: "xs", "sm", "lg", "2x", "2.5x", "5x", "7x", "10x"-->

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