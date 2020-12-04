<script lang="ts">
  import { operationStore, query } from '@urql/svelte';
  import { MD5 } from 'crypto-js';

  const account = query(
    operationStore(`{
      currentAccount {
        id
        name
        profile
        email
      }
    }`),
  );

  function gravatarUrl(email: string): string {
    if (!email) return '';

    const hash = MD5(email?.toLowerCase().trim());
    return `http://gravatar.com/avatar/${hash}`;
  }

  export let hideHeader = false;
</script>

<style lang="scss">
  @import '../../styles/theme.scss';

  .layout-container {
    --padding-lr: 10vw;

    width: 100vw;
    min-height: 100vh;

    > .header,
    .footer,
    .content {
      padding-left: var(--padding-lr);
      padding-right: var(--padding-lr);
      min-height: 5em;
    }

    > .header {
      padding-top: 0;
      padding-bottom: 0;

      .bar {
        min-height: 3em;
      }

      > .title {
        font-size: 1.5em;
        padding-top: 1em;
      }
    }

    > .content {
      padding-top: 1em;
      padding-bottom: 1em;
      min-height: 20em;
    }

    > .footer {
      hr {
        color: var(--color-smoke);
        margin: 0;
      }
    }
  }

  .gravatar {
    margin: 0.5em;
    width: 3em;
    height: 3em;
    border: 1px solid var(--color-smoke);
    border-radius: 3em;
  }
</style>

<div class="layout-container d-flex flex-column">
  <div class="header">
    {#if !hideHeader}
      <div class="bar d-flex align-items-center justify-content-end">
        <a href="/badges" type="button" class="btn btn-link">Badges</a>
        <a href="/login" type="button" class="btn btn-link">Login</a>
        <img
          class="gravatar"
          src={gravatarUrl($account?.data?.currentAccount?.email)}
          alt="avatar profile pic" />
      </div>
    {/if}

    <div class="title d-flex justify-content-between">
      <slot name="title" />
      <slot name="actions" />
    </div>
  </div>
  <div class="content">
    <slot />
  </div>
  <div class="footer mt-auto">
    <hr />
    <div class="d-flex justify-content-end">Made with ❤ from PH</div>
  </div>
</div>
