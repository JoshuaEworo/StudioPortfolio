<script lang="ts">
    export let link:string;
    export let name:string;
    export let type:string;
    export let img:string;
</script>

<style lang="postcss">
    .project{
        @apply relative w-full h-48 bg-black rounded-xl mb-20 flex flex-row overflow-hidden;
    }
    .project:last-child{
        @apply mb-0;
    }
    .project-info{
        @apply flex flex-col p-10 h-full gap-3 justify-center w-full relative border-none;
    }
    .project-image{
        @apply w-5/6 skew-x-12 bg-black relative left-5 overflow-hidden border-none;
        transition: box-shadow .4s;
    }
    .project-image img{
        @apply -skew-x-12 scale-125 sm:scale-150 opacity-60 relative object-cover w-full h-full lg:w-auto lg:h-auto;
        transition: transform .4s;
    }
    
    .project:hover > .project-image img{
        @apply -skew-x-12 scale-125 sm:scale-150 -translate-x-2 opacity-60;
    }
    .project:hover > .project-image{
        box-shadow: inset 80px 0 70px -60px rgb(255, 255, 255);
        /* box-shadow: inset 64px 0 80px -25px rgba(79, 70, 229, 1); */
        /* box-shadow: inset 64px 0 80px -25px rgb(255, 255, 255); */
    }
</style>

<a class="project" href={link}>
    <div class="project">
        <div class="project-info">
            <h4>{name}</h4>
            <p>{type}</p>
        </div>
        <div class="project-image">
            <img src={img} alt="">
        </div>
    </div>
</a>