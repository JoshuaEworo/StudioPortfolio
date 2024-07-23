<script lang="ts">
    import { fade } from 'svelte/transition'
  
    export let key: string
    export let inDuration: number = 350
</script>

{#key key}
<div in:fade={{ duration: inDuration, delay: inDuration }}>
    <slot />
</div>
{/key}

<style>
    div {
        position: absolute;
        inset: 0;
    }
</style>
  