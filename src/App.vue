<template>
  <div class="container">
    <router-view />
  </div>
  <AudioPlayerFooter />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import AudioPlayerFooter from '@/components/AudioPlayerFooter.vue';

export default defineComponent({
  components: {
    AudioPlayerFooter
  }
});
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: var(--surface-b);
  color: var(--text-color);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}
@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}
@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}
</style>
