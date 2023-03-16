<script>
import AppHeader from './components/AppHeader.vue';
export default {
  name: 'App',
  components: { AppHeader }
};
</script>

<template>
  <AppHeader></AppHeader>
  <main class="container">
    <RouterView></RouterView>

  </main>
</template>

