<template>
  <div id="app">
    <ion-app>
      <ion-menu content-id="main-content">
        <ion-header>
          <ion-toolbar color="primary">
            <ion-title>Menu</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content>
          <ion-list>
            <ion-list-header>
              Navigate
            </ion-list-header>
            <ion-menu-toggle auto-hide="false">
              <ion-item button>
                <ion-icon slot="start" name='home'></ion-icon>
                <ion-label>
                  Home
                </ion-label>
              </ion-item>
              <router-link to="/catalogue">
                <ion-item button>
                  <ion-icon slot="start" name='catalogue'></ion-icon>
                  <ion-label>
                    About
                  </ion-label>
                </ion-item>
              </router-link>
            </ion-menu-toggle>
          </ion-list>
        </ion-content>
      </ion-menu>
      <ion-vue-router />
    </ion-app>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
