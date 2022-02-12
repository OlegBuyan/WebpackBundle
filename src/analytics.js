import * as $ from 'jquery';

function createAnalytics() {
  let counter = 0;
  let isDestroyed = false;
  const listiner = () => counter++;
  $(document).on('click', listiner);

  return {
    destroy() {
      $(document).off('click', listiner);
      isDestroyed = true;
    },

    getClicks() {
      if (isDestroyed) {
        return `Boom. Total clicks = ${counter}`;
      }
      return counter;
    },
  };
}
window.analitcs = createAnalytics();
