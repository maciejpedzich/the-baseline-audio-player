<template>
  <audio
    ref="nativeAudio"
    class="p-d-none"
    :loop="loop"
    :src="require('@/assets/test.mp3')"
  ></audio>
  <footer id="player-container" class="p-grid p-m-0 p-py-1">
    <div class="p-col-3 p-d-flex p-ai-center">
      <Avatar class="p-mx-3" size="xlarge" label="X" />
      <div>
        <div class="p-text-bold">Lorem Ipsum</div>
        <div class="p-text-light">John Doe</div>
      </div>
    </div>
    <div class="p-col-6 p-d-flex p-flex-column p-jc-center p-ai-center">
      <div class="p-mb-3">
        <Button class="p-button-text" icon="pi pi-sort-alt" />
        <Button class="p-button-text" icon="pi pi-step-backward" />
        <Button
          class="p-button-rounded p-mx-2"
          :icon="playbackButtonIcon"
          @click="playOrPause"
        />
        <Button class="p-button-text" icon="pi pi-step-forward" />
        <Button
          :class="{ 'p-button-text': true, 'loop-enabled': loop }"
          icon="pi pi-replay"
          @click="loop = !loop"
        />
      </div>
      <div id="duration-bar" class="p-d-flex p-ai-center">
        <span>{{ formatDuration(currentTime) }}</span>
        <Slider
          id="duration-slider"
          class="p-mx-3"
          :max="duration"
          v-model="currentTime"
        />
        <span>{{ formatDuration(duration) }}</span>
      </div>
    </div>
    <div class="p-col-3 p-d-flex p-jc-end p-ai-center">
      <Button class="p-button-text" icon="pi pi-list" />
      <div id="volume-bar" class="p-d-flex p-ai-center p-ml-2 p-mr-3">
        <i :class="[volumeSliderIcon]"></i>
        <Slider
          id="volume-slider"
          class="p-ml-3"
          :min="0"
          :max="1"
          :step="0.01"
          v-model="volume"
        />
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import Avatar from 'primevue/avatar';
import Button from 'primevue/button';
import Slider from 'primevue/slider';

import useAudioPlayer from '@/composables/useAudioPlayer';
import formatDuration from '@/utils/formatDuration';

export default defineComponent({
  name: 'AudioPlayer',
  components: {
    Avatar,
    Button,
    Slider
  },
  setup() {
    const nativeAudio = ref<HTMLAudioElement | undefined>();

    return {
      nativeAudio,
      formatDuration,
      ...useAudioPlayer(nativeAudio)
    };
  }
});
</script>

<style scoped>
#player-container {
  position: fixed;
  bottom: 0;
  background-color: var(--surface-100);
  border-top: 1px solid var(--surface-600);
}

#player-container,
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

.p-button-text.p-button-icon-only.loop-enabled {
  color: var(--primary-color);
}

.p-button-text.p-button-icon-only:active,
.p-button-text.p-button-icon-only:focus {
  background-color: transparent;
  border-color: transparent;
  box-shadow: none;
}
</style>
