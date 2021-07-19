import { ComputedRef, Ref } from 'vue';

type UseAudioPlayerReturn = {
  currentTime: Ref<number>;
  duration: Ref<number>;
  volume: Ref<number>;
  playing: Ref<boolean>;
  loop: Ref<boolean>;
  playbackButtonIcon: ComputedRef<string>;
  volumeSliderIcon: ComputedRef<string>;
  playOrPause: () => void | Promise<void>;
};

export default UseAudioPlayerReturn;
