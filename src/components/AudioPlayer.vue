<template>
  <footer id="player-container" class="p-grid p-m-0 p-py-1">
    <div class="p-col-3 p-d-flex p-ai-center">
      <Avatar class="p-mx-3" size="xlarge" label="X" />
      <div id="track-metadata">
        <div class="p-text-bold">Lorem Ipsum</div>
        <div class="p-text-light">John Doe</div>
      </div>
    </div>
    <div class="p-col-6 p-d-flex p-flex-column p-jc-center p-ai-center">
      <div class="p-mb-3">
        <Button class="p-button-text" icon="pi pi-sort-alt" />
        <Button class="p-button-text" icon="pi pi-step-backward" />
        <Button class="p-button-rounded p-mx-2" icon="pi pi-pause" />
        <Button class="p-button-text" icon="pi pi-step-forward" />
        <Button class="p-button-text" icon="pi pi-replay" />
      </div>
      <div id="duration-bar" class="p-d-flex p-ai-center">
        <span>0:00</span>
        <Slider
          id="duration-slider"
          class="p-mx-3"
          v-model="duration"
          :max="150"
        />
        <span>2:30</span>
      </div>
    </div>
    <div class="p-col-3 p-d-flex p-jc-end p-ai-center">
      <Button class="p-button-text" icon="pi pi-list" />
      <div id="volume-bar" class="p-d-flex p-ai-center p-ml-2 p-mr-3">
        <i class="pi pi-volume-up"></i>
        <Slider id="volume-slider" class="p-ml-3" :max="100" v-model="volume" />
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import Button from 'primevue/button';
import Slider from 'primevue/slider';
import Avatar from 'primevue/avatar';

export default defineComponent({
  name: 'AudioPlayer',
  components: {
    Button,
    Slider,
    Avatar
  },
  setup() {
    const duration = ref(0);
    const volume = ref(100);

    return { duration, volume };
  }
});
</script>

<style scoped>
#player-container {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: var(--surface-100);
  border-top: 1px solid var(--surface-600);
}

#duration-bar,
#duration-slider,
#volume-slider {
  width: 100%;
}

#volume-bar {
  flex-basis: 125px;
}

.p-button-text.p-button-icon-only {
  color: var(--text-color);
}
</style>
