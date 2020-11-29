<script lang="ts">
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
</style>

<div class="layout-container d-flex flex-column">
  <div class="header">
    <div class="bar d-flex align-items-center justify-content-end">
      <a href="/login" type="button" class="btn btn-link">Login</a>
      <a href="/badges" type="button" class="btn btn-link">Badges</a>
    </div>

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
