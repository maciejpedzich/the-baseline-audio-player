import { computed, ref, Ref } from 'vue';
import { useMediaControls } from '@vueuse/core';

import UseAudioPlayerReturn from '@/types/UseAudioPlayerReturn';

export default function useAudioPlayer(
  audioElementRef: Ref<HTMLAudioElement | undefined>
): UseAudioPlayerReturn {
  const { currentTime, duration, playing, volume } =
    useMediaControls(audioElementRef);

  const loop = ref(false);

  const playbackButtonIcon = computed(() =>
    playing.value ? 'pi pi-pause' : 'pi pi-play'
  );

  const volumeSliderIcon = computed(() =>
    volume.value >= 0.5
      ? 'pi pi-volume-up'
      : volume.value < 0.5 && volume.value > 0
      ? 'pi pi-volume-down'
      : 'pi pi-volume-off'
  );

  const playOrPause = () =>
    playing.value
      ? audioElementRef.value?.pause()
      : audioElementRef.value?.play();

  return {
    currentTime,
    duration,
    volume,
    playing,
    loop,
    playbackButtonIcon,
    volumeSliderIcon,
    playOrPause
  };
}
