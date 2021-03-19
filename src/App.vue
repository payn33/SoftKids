<template>
  <router-view v-slot="{ Component }">
    <transition name="route">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
// import {Landing, Test} from './components/index'
export default {
  name: "App",
  components: {},
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  position: relative;
  box-sizing: border-box;
  max-width: 100%;
  -webkit-tap-highlight-color: transparent;
  scroll-behavior: smooth;
}
#app {
  font-family: DM sans, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.pointer {
  cursor: pointer;
}
button {
  cursor: pointer;
}
.router-link {
  text-decoration: none;
}
.outline {
  outline: 0;
}
::-webkit-scrollbar {
  width: 3px;
  height: 3px;
  border-radius: 50%;
}
::-webkit-scrollbar-thumb {
  width: 100%;
  background: #999c9c;
  border-radius: 5px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
.route-enter-active,
.route-leave-active {
  transition: all 0.4s ease-in-out;
}
.route-enter-from,
.route-leave-to {
  opacity: 0;
}
.route-enter-to,
.route-leave-from {
  opacity: 1;
}
</style>
