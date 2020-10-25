<template>
  <div id="app">
    <router-view />
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
</style>
