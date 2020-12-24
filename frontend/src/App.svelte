<script lang="ts">
  import { Router, Route } from 'svelte-routing';
  import { initClient } from '@urql/svelte';
  import { dedupExchange, cacheExchange, fetchExchange } from '@urql/core';

  import BadgeList from './pages/badge-list/BadgeList.svelte';
  import Home from './pages/home/Home.svelte';
  import { JWT_TOKEN_KEY } from './utils/auth';

  initClient({
    url: 'http://localhost:3000/graphql',
    fetchOptions: () => {
      const token = localStorage.getItem(JWT_TOKEN_KEY);
      return token ? { headers: { Authorization: `Bearer ${token}` } } : {};
    },
    exchanges: [dedupExchange, cacheExchange, fetchExchange],
  });
</script>

<style lang="scss" global>
  /** Gray 10 theme **/
  @import 'carbon-components-svelte/css/g10';
</style>

<Router>
  <Route path="/" component={Home} />
  <Route path="/login" component={Home} />
  <Route path="/badges" component={BadgeList} />
</Router>
