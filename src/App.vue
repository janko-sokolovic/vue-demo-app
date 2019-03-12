<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
.app {
  padding: 40px;
}

body {
  margin: 0;
  padding: 0;
}

* {
  font-family: "Roboto", sans-serif !important;
}
</style>
