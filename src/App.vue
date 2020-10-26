<template>
  <div id="app">
    <v-layout-auth>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </v-layout-auth>
    
    <v-alerts />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-size: 15px;
  box-sizing: border-box;
  color: rgb(75, 75, 75);
  font-family: 'Lato',sans-serif;
  line-height: 1.4;
}

a {
  text-decoration: none;
}

ul, ol {
  list-style: none;
}

body {
  background-color: white;
}

svg {
  width: 24px;
  height: 24px;
  fill: black;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .32s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
