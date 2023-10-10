<script>
    import { enhance } from "$app/forms";
	  export let form;
    
</script>

<style lang="postcss">
  .wholePage{
    @apply h-screen w-full flex items-center;
  }

  .card{
    @apply border-white border-2 rounded-2xl w-10/12 sm:w-6/12 mx-auto p-8 flex flex-col gap-6;
  }

  .cardHead>:nth-child(1){
    @apply mb-3;
  }

  .socials{
    @apply flex gap-12 w-full justify-between;
  }
  .socials>a{
    @apply w-full;
  }

  .button{
    @apply border border-white flex gap-3 px-3 py-2 rounded-3xl text-lg;
  }

  .ruleCard {
    @apply bg-white my-2;
  }

  input{
    all: unset;
    @apply w-full text-white;
  }
  .inputHolder{
    @apply bg-none border border-white text-white rounded-xl py-2 px-3 mt-3;
  }

  form{
    @apply flex flex-col gap-3;
  }
  
  .loginBtn{
    @apply border border-white px-6 py-2 rounded-3xl flex text-lg w-1/3 mx-auto mt-8;
  }
  .loginBtn>p{
    @apply mx-auto;
  }
  ::-ms-reveal {
    filter: invert(100%);
  }

</style>

<div class="wholePage">
    <div class="card">
      <div class="cardHead">
        <h3>Log in to your dashboard</h3>
        <!-- <p>Enter your email and password below, or use social media to log in.</p> -->
        <p>Enter your email and password below to log in.</p>
      </div>

      <div class="loginForm">
        <form method="post" action="/login?/signin" use:enhance>
          <div class="email">
            <label for="email"><h5>Email</h5></label>
            <div class="inputHolder">
              <input name="email" type="email" id="email" placeholder="name@address.com" value={form?.email ?? ''} required />
            </div>
          </div> 

          <div class="password">
            <label for="password"><h5>Password</h5></label>
            <div class="inputHolder">
              <input name="password" type="password" id="password" placeholder="Enter your password" required />
            </div>
          </div>

          <button class="loginBtn" type="submit"><p>Log In</p></button>
        </form>
      </div>
    </div>
</div>