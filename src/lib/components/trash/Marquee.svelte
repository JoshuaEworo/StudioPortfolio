<script lang='ts' type="module">
	export let marqueeItems: Array<string>;
</script>

<style lang="postcss">
.wrapper {
    @apply flex w-full overflow-x-hidden relative text-xl sm:text-3xl font-semibold opacity-25;
}

.marquee {
    @apply whitespace-nowrap;
    animation: marquee 50s linear infinite;
}

.marquee2 {
    @apply whitespace-nowrap;
    animation: marquee2 50s linear infinite;
    position: absolute;
    top: 0;
}

ul {
  display: flex;
  list-style: none;
  padding-left: 0;
}

li {
  margin: 8px;
}

@keyframes marquee {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-100%);
  }
}

@keyframes marquee2 {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
}
</style>

<div class="wrapper">
    <ul class="marquee">
        {#each marqueeItems as item}
            <li>{item}</li>
        {/each}
        {#each marqueeItems as item}
            <li>{item}</li>
        {/each}
        {#each marqueeItems as item}
            <li>{item}</li>
        {/each}
        {#each marqueeItems as item}
            <li>{item}</li>
        {/each}
    </ul>
    <ul class="marquee2">
        {#each marqueeItems as item}
            <li>{item}</li>
        {/each}
        {#each marqueeItems as item}
            <li>{item}</li>
        {/each}
        {#each marqueeItems as item}
            <li>{item}</li>
        {/each}
        {#each marqueeItems as item}
            <li>{item}</li>
        {/each}
    </ul>
</div>
