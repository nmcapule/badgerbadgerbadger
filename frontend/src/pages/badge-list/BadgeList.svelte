<script lang="ts">
  import BasicLayout from '../../layouts/basic/BasicLayout.svelte';

  const emojis = [
    { title: 'test', imageUrl: null, asText: '☀' },
    { title: 'test', imageUrl: null, asText: '👃' },
    { title: 'test', imageUrl: null, asText: '😘' },
    { title: 'test', imageUrl: null, asText: '🤞' },
    { title: 'test', imageUrl: null, asText: '✅' },
    { title: 'test', imageUrl: null, asText: '👸' },
    { title: 'test', imageUrl: null, asText: '👩' },
    { title: 'test', imageUrl: null, asText: '‍🦳' },
    { title: 'test', imageUrl: null, asText: '🧑' },
    { title: 'test', imageUrl: null, asText: '🧒' },
    { title: 'test', imageUrl: null, asText: '🚈' },
    { title: 'test', imageUrl: null, asText: '🚘' },
    { title: 'test', imageUrl: null, asText: '🚔' },
    { title: 'test', imageUrl: null, asText: '🛴' },
    { title: 'test', imageUrl: null, asText: '🚞' },
    { title: 'test', imageUrl: null, asText: '🚉' },
    { title: 'test', imageUrl: null, asText: '🚆' },
    { title: 'test', imageUrl: null, asText: '🚒' },
    { title: 'test', imageUrl: null, asText: '🚒' },
    { title: 'test', imageUrl: null, asText: '🛹' },
    { title: 'test', imageUrl: null, asText: '🚞' },
    { title: 'test', imageUrl: null, asText: '🛵' },
    { title: 'test', imageUrl: null, asText: '👨‍🌾' },
    { title: 'test', imageUrl: null, asText: '👨' },
    { title: 'test', imageUrl: null, asText: '‍🎓' },
    { title: 'test', imageUrl: null, asText: '💂' },
    { title: 'test', imageUrl: null, asText: '‍♀️' },
    { title: 'test', imageUrl: null, asText: '👷‍♂️' },
  ];
</script>

<style lang="scss">
  @import '../../styles/theme.scss';

  .item-badge {
    font-size: 40px;
    text-align: center;
    width: 100px;
    height: 100px;
    line-height: 100px;
    margin: 2px;
    background-color: var(--color-snow);
  }

  @media only screen and (max-width: 800px) {
    .item-badge {
      font-size: 32px;
      width: 64px;
      height: 64px;
      line-height: 64px;
    }
  }
</style>

<BasicLayout>
  <div slot="title">My Badges</div>
  <div slot="actions">&nbsp;</div>

  <div class="d-flex flex-wrap">
    {#each emojis as item}<a href="/" class="item-badge" title={item.title}>{item.asText}</a>{/each}
  </div>
</BasicLayout>
