<script lang="ts">
    import Navbar from '$lib/components/Navbar.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import CallToAction from "$lib/components/CallToAction.svelte";
    import Hero from '$lib/components/Hero.svelte';
    import Button from "$lib/components/Button.svelte";
    import Fa from 'svelte-fa';
    import { faGithub, faLinkedin, faRProject, faTwitter } from '@fortawesome/free-brands-svg-icons';
    import { blogStore } from '../blogStore'
	import ProjectCard from '$lib/components/works/ProjectCard.svelte';

    $: articles = $blogStore.slice(0, 4);

    let projects = [
        { 
            name : "RenovateX",
            type : "Website Design",
            img : "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            link: "/"
        },
        { 
            name : "Exodus",
            type : "AI-Powered Solutions",
            img : "https://images.unsplash.com/photo-1465256410760-10640339c72c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            link: "/"
        },
        { 
            name : "SpaceOrcas",
            type : "Website Development",
            img : "https://images.unsplash.com/photo-1615378536579-61c7d173e8a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
            link: "/"
        },
        { 
            name : "Elysium AI",
            type : "Website Development",
            img : "https://images.unsplash.com/photo-1615525137689-198778541af6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80",
            link: "/"
        },
    ];

</script>

<style lang="postcss">
    .themedWord{
        @apply text-indigo-600;
    }

    .centerbtn{
        @apply flex justify-center;
    }

    .button{
        @apply w-full flex md:inline justify-center 
    }

    .section{
        @apply w-full;
    }

    .section-wrapper{
        @apply mx-auto max-w-7xl w-11/12 py-32;
    }
    .section-wrapper h3{
        @apply text-center;
    }

    /* header section */
        .head{
            @apply text-center my-20;
        }
        .head p{
            @apply text-sm sm:text-lg;
        }

        .iconsWrapper{
            @apply flex w-full justify-center mt-10;
        }
        
        .icons{
            @apply flex flex-row gap-24 sm:gap-32;
        }

    /* Services Section */
        .s-wrapper{
            @apply mx-auto w-11/12 max-w-7xl py-20;
        }
        .s-content{
            @apply flex flex-col md:flex-row gap-9;
        }
        .s-left{
            @apply md:w-3/5 flex flex-col gap-10;
        }
        .s-right{
            @apply md:w-2/5;
        }

    /* Works Section Stylings */
        .works{
            @apply my-32;
        }

    /* Blog Section Stylings */
        .items{
            @apply grid grid-cols-1 sm:grid-cols-2 gap-24 sm:gap-24 lg:gap-32 my-32;
        }
        .item{
            @apply flex flex-col gap-4;
        }
        .item h4{
            @apply mb-1;
        }
        .item-image{
            @apply w-full bg-black rounded-xl;
        }
        .s-item-img{
            @apply h-80;
        }
</style>

<!-- ----------------------------- -->
<!-- icon sizes: "xs", "sm", "lg", "2x", "2.5x", "5x", "7x", "10x"-->
<Navbar />

<section class="head">
    <p><span>Software Engineer</span> | <span>Applied AI Engineer</span></p>
    <h1>Joshua Eworo</h1>
    <Hero />
    <div class="iconsWrapper">
        <div class="icons">
            <a target="_blank" href="https://github.com/JoshuaEworo">
                <Fa icon={faGithub} size="lg"/>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/joshuaeworo/">
                <Fa icon={faLinkedin} size="lg"/>
            </a>
            <a target="_blank" href="https://twitter.com/JoshuaEworo/">
                <Fa icon={faTwitter} size="lg"/>
            </a>
        </div>
    </div>
</section>

<section class="services dark-section">
    <div class="s-wrapper">
        <div class="s-content">
            <div class="s-left">
                <h2>If you wanna stand out, you gotta be <span class="themedWord">outstanding.</span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <div class="button">
                    <Button src="/" text="Get in touch!"/>  
                </div>
            </div>
            <div class="s-right">
                <div class="dropdowns">
                    <Button 
                        isDropdown={true} 
                        text="Website Design & Wireframe" 
                        ddDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                    <Button 
                        isDropdown={true}
                        text="Website Development" 
                        ddDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                    <Button
                        isDropdown={true} 
                        text="AI-Powered Solutions" 
                        ddDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                </div>
            </div>
        </div>      
    </div>
</section>

<section class="works section">
    <div class="section-wrapper">
        <h3>Here are my selected works</h3>
            <div class="works">
                {#each projects as project}
                    <ProjectCard name={project.name} img={project.img} type={project.type} link={project.link}/>
                {/each}
            </div>
        <div class="centerbtn">
            <Button text="View All Projects" src="/projects"/>
        </div>
    </div>
</section>

<section class="blog dark-section">
    <div class="section-wrapper">
        <h3>Blog</h3>
        <div class="blogposts">
            <div class="items">
                {#each articles as article}
                    <a href="/blog/{article.id}">
                        <div class="item">
                            <div class="item-image s-item-img"></div>
                            <div class="item-text">
                                <h4>{article.title}</h4>
                                <p>{article.description}</p>
                            </div>
                        </div>
                    </a>
                {/each}
            </div>
        </div>
        <div class="centerbtn">
            <Button text="View All Posts" src="/blog"/>
        </div>
    </div>
</section>
<CallToAction />
<Footer />