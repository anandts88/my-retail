import defaultTransition from 'bootstrap-modal/utils/default-transition';

const options = { duration: 350 };

export default function() {
  this.transition(
    this.useAndReverse('crossFade', options)
  );

  // bootstrap-modal transition
  defaultTransition(this);
}
