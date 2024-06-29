<template>
  <div class="container">
    <HeaderComponent />
</div>
<router-view></router-view>
<FooterComponet />



</template>

<script>
import { store } from './store.js';
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponet from './components/FooterComponent.vue';
export default {
  components: {
    HeaderComponent,
    FooterComponet
  },
  name: 'App',
  data() {
    return {
      store
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
}
</style>

