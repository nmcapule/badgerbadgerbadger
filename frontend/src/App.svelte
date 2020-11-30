<script lang="ts">
  import { Router, Route } from 'svelte-routing';
  import { initClient } from '@urql/svelte';

  initClient({
    url: 'http://localhost:3000/graphql',
  });

  import BadgeList from './pages/badge-list/BadgeList.svelte';
  import Home from './pages/home/Home.svelte';
</script>

<style lang="scss">
</style>

<Router>
  <Route path="/" component={Home} />
  <Route path="/login" component={Home} />
  <Route path="/badges" component={BadgeList} />
</Router>
