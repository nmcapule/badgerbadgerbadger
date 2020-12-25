<script lang="ts">
  import { onMount } from 'svelte';
  import { Device } from 'framework7/framework7-lite.esm.bundle.js';
  import {
    f7,
    f7ready,
    App,
    Panel,
    View,
    Popup,
    Page,
    Navbar,
    NavRight,
    Link,
    Block,
    LoginScreen,
    LoginScreenTitle,
    List,
    ListInput,
    ListButton,
    BlockFooter,
  } from 'framework7-svelte';
  import cordovaApp from '../js/cordova-app';
  import routes from '../js/routes';

  // Framework7 Parameters
  let f7params = {
    id: 'dev.nmcapule.badger3', // App bundle ID
    name: 'badger3', // App name
    theme: 'auto', // Automatic theme detection

    // App routes
    routes: routes,

    // Input settings
    input: {
      scrollIntoViewOnFocus: Device.cordova && !Device.electron,
      scrollIntoViewCentered: Device.cordova && !Device.electron,
    },
    // Cordova Statusbar settings
    statusbar: {
      iosOverlaysWebView: true,
      androidOverlaysWebView: false,
    },
  };
  // Login screen demo data
  let username: string = '';
  let password: string = '';

  function alertLoginData() {
    f7.dialog.alert('Username: ' + username + '<br>Password: ' + password, () => {
      f7.loginScreen.close();
    });
  }
  onMount(() => {
    f7ready(() => {
      // Init cordova APIs (see cordova-app.js)
      if (Device.cordova) {
        cordovaApp.init(f7);
      }
      // Call F7 APIs here
    });
  });
</script>

<App params={f7params}>
  <!-- Left panel with cover effect-->
  <Panel left cover themeDark>
    <View>
      <Page>
        <Navbar title="Left Panel" />
        <Block>Left panel content goes here</Block>
      </Page>
    </View>
  </Panel>

  <!-- Right panel with reveal effect-->
  <Panel right reveal themeDark>
    <View>
      <Page>
        <Navbar title="Right Panel" />
        <Block>Right panel content goes here</Block>
      </Page>
    </View>
  </Panel>

  <!-- Your main view, should have "view-main" class -->
  <View main class="safe-areas" url="/" />

  <!-- Popup -->
  <Popup id="my-popup">
    <View>
      <Page>
        <Navbar title="Popup">
          <NavRight>
            <Link popupClose>Close</Link>
          </NavRight>
        </Navbar>
        <Block>
          <p>Popup content goes here.</p>
        </Block>
      </Page>
    </View>
  </Popup>

  <LoginScreen id="my-login-screen">
    <View>
      <Page loginScreen>
        <LoginScreenTitle>Login</LoginScreenTitle>
        <List form>
          <ListInput
            type="text"
            name="username"
            placeholder="Your username"
            value={username}
            onInput={(e) => (username = e.target.value)} />
          <ListInput
            type="password"
            name="password"
            placeholder="Your password"
            value={password}
            onInput={(e) => (password = e.target.value)} />
        </List>
        <List>
          <ListButton title="Sign In" onClick={() => alertLoginData()} />
        </List>
        <BlockFooter>
          Some text about login information.<br />Click "Sign In" to close Login Screen
        </BlockFooter>
      </Page>
    </View>
  </LoginScreen>
</App>
