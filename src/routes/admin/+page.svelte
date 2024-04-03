<script lang="ts">
  import pfLogo from '$lib/assets/pf-logo.webp'
  import SvelteMarkdown from 'svelte-markdown'
  import Fa from 'svelte-fa'
  import { faPlus, faSave, faTrash, faCog } from '@fortawesome/free-solid-svg-icons'
  import { blogStore, updateBlog } from '../../blogStore';
  import CreateBlogModal from '$lib/components/modals/CreateBlogModal.svelte';
  import DeleteBlogModal from '$lib/components/modals/DeleteBlogModal.svelte';
  import EditBlogModal from '$lib/components/modals/EditBlogModal.svelte';

  // Blog Values
  let articleContent = '';
  let articleID = '';
  let articleTitle = '';
  let articleDesc = '';
  let articleImg = '';
  let isArticlePublished: boolean = true;
  

  $: articles = $blogStore;
  $: pubArticles = articles.filter(article => article.published === true);
  $: draftArticles = articles.filter(article => article.published === false);

  
  function assignBlog(content: string, id:string, title:string, desc:string, img:string, isPublished:boolean){
    articleContent = content;
    articleID = id;
    articleTitle = title;
    articleDesc = desc;
    articleImg = img;
    isArticlePublished = isPublished;
  }

  let showPublished: boolean = true;
  let showDrafts: boolean = true;

  function toggleShowPublished(){
    showPublished = !showPublished;
  }
  function toggleShowDrafts(){
    showDrafts = !showDrafts;
  }
  let isCreateModalOpen = false;
  let isDeleteModalOpen = false;
  let isEditModalOpen = false;

  // Blog Functions
  const saveChanges = async () => {
    await updateBlog(articleID, articleContent);
  }
</script>


<style lang="postcss">
  .screen{
    @apply overflow-y-hidden h-screen;
    background-color: #0D0D0D;
  }
  .wrapperAdmin{
    @apply w-screen mx-auto;
  }
  textarea{
    all: unset;
    @apply w-full h-full text-white px-2;
  }

  .navbar{
    @apply flex flex-row w-full px-5 mx-auto my-4 justify-between;
  }
  .n-left{
    @apply flex flex-row;
  }
  .loginBtn{
    @apply border border-white rounded-3xl px-6 py-1;
  }
  .loginBtn p{
    @apply text-sm;
  }
  .logo{
    @apply invert mr-4;
    width: 37.2px;
    height: 31.2px;
  }

  .workspace{
    @apply h-screen w-full grid gap-4;
    grid-template-columns: 1.8fr 3fr 3fr;
    height: calc(100vh - 64px);
  }
  .sidebar, .editor, .preview{
    @apply w-full;
  }
  .sidebar, .editor{
    @apply border-r border-white;
  }
  .sidebar{
    @apply flex flex-col justify-between overflow-hidden px-2;
  }
  .editor{
    @apply px-2 mt-8  break-words;
  }
  .preview{
    @apply overflow-y-scroll break-words px-2 pr-4;
  }

  .bbtn{
    @apply mb-5 w-full underline text-xs text-left pl-2;
  }
  .bbtn:hover{
    @apply text-indigo-600;
  }

  /* .button{
    @apply border border-white px-6 my-1 rounded-2xl w-full inline-block;
  } */
  .postSets{
    @apply border-b mb-2 flex flex-row justify-between;
  }
  .postSets:nth-child(n+2){
    @apply mt-2;
  }
  .postSets button:hover{
    @apply text-indigo-600;
  }

  .bottombar{
    @apply flex flex-row gap-1 border-t mx-auto justify-between w-full p-2;
  }

</style>

<div class="screen">
  <div class="wrapperAdmin">
    <div class = "navbar">
      <div class="n-left">
        <img class="logo" src={pfLogo} alt="">
        <h6>Admin Console</h6>
      </div>
  
      <form class="loginForm" method="POST" action="/login?/signout">
        <button class="loginBtn"><p>Log Out</p></button>
      </form>
    </div>
    <hr>
    <section class="workspace">
      <div class="sidebar">
        <div class="topbar">
          <div class="postSets">
            <p class="font-semibold" >Published</p>
            <button on:click={toggleShowPublished} >
              {#if (showPublished == true)}
              ⮟
              {:else}
              ➤
              {/if}
            </button>
          </div>
          <div class="sbList">
            {#if (showPublished == true)}
              {#each pubArticles as blog}
                <button class="bbtn" on:click={() => assignBlog(blog.content, blog.id, blog.title, blog.description, blog.header_image, blog.published)}>
                  {blog.title}
                </button>
              {/each}
            {/if}
          </div>

          <div class="postSets">
            <p class="font-semibold" >Drafts</p>
            <button on:click={toggleShowDrafts} >
              {#if (showDrafts == true)}
              ⮟
              {:else}
              ➤
              {/if}
            </button>
          </div>
          <div class="sbList">
            {#if (showDrafts == true)}
              {#each draftArticles as blog}
                <button class="bbtn" on:click={() => assignBlog(blog.content, blog.id, blog.title, blog.description, blog.header_image, blog.published)}>
                  {blog.title}
                </button>
              {/each}
            {/if}
          </div>
        </div>
        
        <div class="bottombar">
          <button on:click={() => {isCreateModalOpen = !isCreateModalOpen}}><Fa icon={faPlus} size="lg"/></button>
          <button on:click={saveChanges}><Fa icon={faSave} size="lg"/></button>
          <button on:click={() => {isDeleteModalOpen = !isDeleteModalOpen}}><Fa icon={faTrash} size="lg"/></button>
          <button on:click={() => {isEditModalOpen = !isEditModalOpen}}><Fa icon={faCog} size="lg"/></button>
        </div>
      </div>
      
      <section class="editor">
        <textarea bind:value={articleContent}></textarea>
      </section>

      <section class="preview">
        <div id="md" class="wrapper">
          <SvelteMarkdown source={articleContent}  />
        </div>
      </section>
    </section>
  </div>
</div>

<!-- Modals -->
<CreateBlogModal bind:isOpen={isCreateModalOpen}/>
<DeleteBlogModal bind:isOpen={isDeleteModalOpen} bind:id={articleID}/>
<EditBlogModal bind:isOpen={isEditModalOpen} bind:id={articleID} bind:title={articleTitle} bind:description={articleDesc} bind:imgLink={articleImg} bind:isPublished={isArticlePublished}/>