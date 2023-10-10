<script lang="ts">
  import pfLogo from '$lib/assets/pf-logo.png'
  import SvelteMarkdown from 'svelte-markdown'
  import { blogStore } from '../../blogStore';
  import { supabase } from '$lib/supabase';

  interface Blog {
    id: string;
    title: string;
    description: string;
    content: string; 
    header_image: string;
    created_at: string;
    published: boolean;
  }

  let value = '';
  let articleID = '';
  $: articles = $blogStore;
  $: pubArticles = articles.filter(article => article.published === true);
  $: draftArticles = articles.filter(article => article.published === false);
  

  function assignBlog(content: string, id:string){
    value = content;
    articleID = id;
    console.log(articleID);
  }

  let showPublished: boolean = false;
  let showDrafts: boolean = false;

  function toggleShowPublished(){
    showPublished = !showPublished;
  }
  function toggleShowDrafts(){
    showDrafts = !showDrafts;
  }

  async function savesies(){
    try {
      const { data, error } = await supabase
        .from('blogs')
        .update({ content: value })
        .eq('id', articleID)
        .select()

        console.log(data);

      if (error) {
        throw error;
      }
      console.log(`Blog post with ID ${articleID} content updated successfully.`);
    } catch (error) {
      console.error('Error updating blog content:', error);
    }
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
    @apply flex flex-row w-full max-w-7xl mx-auto my-4 justify-between;
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
    @apply h-screen w-full grid;
    grid-template-columns: 1.5fr 3fr 3fr;
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
    @apply px-2 break-words;
  }
  .preview{
    @apply overflow-y-scroll break-words;
  }

  .bbtn{
    @apply mb-5 w-full underline text-xs text-left pl-2;
  }
  .bbtn:hover{
    @apply text-indigo-600;
  }

  .button{
    @apply border border-white px-6 my-1 rounded-2xl w-full inline-block;
  }
  .postSets{
    @apply border-b mb-2 flex flex-row justify-between;
  }
  .postSets:nth-child(n+2){
    @apply mt-2;
  }
  .postSets button:hover{
    @apply text-indigo-600;
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
                <button class="bbtn" on:click={() => assignBlog(blog.content, blog.id)}>
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
                <button class="bbtn" on:click={() => assignBlog(blog.content, blog.id)}>
                  {blog.title}
                </button>
              {/each}
            {/if}
          </div>
        </div>
        
        <div class="bottombar">
          <button class="button" on:click={savesies}>Save</button>
        </div>
      </div>
      
      <section class="editor">
        <textarea bind:value></textarea>
      </section>

      <section class="preview">
        <div id="md" class="wrapper">
          <SvelteMarkdown source={value}  />
        </div>
      </section>
    </section>
  </div>
</div>