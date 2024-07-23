<script lang="ts">
    export let link:string;
    export let name:string;
    export let type:string;
    export let img:string;

    let backgroundCSS = `background: url(${img}); 
        background-size: cover; 
        background-position: center;     
        `
</script>

<style lang="postcss">
    .projectWrapper{
        @apply rounded-2xl bg-cover bg-center drop-shadow-xl border;
    }
    .project-info{
        @apply flex flex-col p-5 pt-56 h-full justify-center w-full border-none;
    }
    .project-img{ 
        @apply object-contain;
    }
    .project-img img{
        @apply absolute top-1/2 -z-10;
    }
</style>

<a class="projectWrapper" href={link} style={backgroundCSS} target="_blank">
    <div class="project-info">
        <h4>{name}</h4>
        <p>{type}</p>
    </div>
</a>