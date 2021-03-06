<script lang="ts">
  import { navigate } from 'svelte-routing';

  import BasicLayout from '../../layouts/basic/BasicLayout.svelte';
  import { createAuthenticator, login } from '../../utils/auth';

  const authenticate = createAuthenticator();

  let badger = true;
  let email = '';
  let password = '';
  let error = '';

  async function submit(e: Event) {
    e.preventDefault();

    try {
      await login(email, password, authenticate);
      navigate('/badges', { replace: true });
    } catch (e) {
      error = e;
    }
  }
</script>

<style lang="scss">
  .intro-container,
  .login-container {
    width: 50%;
  }

  @media only screen and (max-width: 800px) {
    .intro-container,
    .login-container {
      width: 100%;
    }

    .intro-container {
      padding: 0 !important;
    }

    .login-container {
      margin-top: 3em;
      min-height: 0 !important;
    }
  }

  .intro-container {
    padding-right: 5em;
  }

  .login-container {
    background-color: var(--color-snow);
    padding: 2em;
    min-height: 30em;
  }

  .big {
    font-size: 1.5em;
    margin-bottom: 1.5em;
  }

  .clickable {
    cursor: pointer;
  }
</style>

<BasicLayout hideHeader={true}>
  <div slot="title" class="flex-fill">
    {#if badger}
      <marquee><span class="clickable" on:click={() => (badger = false)}>🦡🦡🦡</span></marquee>
    {/if}
  </div>
  <div slot="actions">&nbsp;</div>

  <div class="d-flex flex-wrap">
    <div class="intro-container d-flex flex-column">
      <div class="big">We uhh... <strong>attach badges to your account</strong>. That's all.</div>
      <div class="mb-5">
        You can create badges too if you want. Grant it to others or something.
      </div>
      <div class="mt-auto">
        Like the site?
        <a href="https://buymeacoffee.com/nmcapule">buymeacoffee.com/nmcapule</a>
      </div>
    </div>
    <div class="login-container d-flex flex-column">
      <div class="big">Login or Register</div>
      <form class="d-flex flex-column align-items-end" on:submit={submit}>
        <div class="form-group align-self-stretch">
          <input
            type="email"
            bind:value={email}
            class="form-control"
            placeholder="Enter email"
            autofocus />
        </div>
        <div class="form-group align-self-stretch">
          <input
            type="password"
            bind:value={password}
            class="form-control"
            placeholder="Password" />
        </div>
        {#if error}
          <div class="form-group align-self-stretch">
            <div class="alert alert-danger" role="alert">{error}</div>
          </div>
        {/if}
        <div>
          <button type="button" class="btn btn-secondary">Register</button>
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  </div>
</BasicLayout>
