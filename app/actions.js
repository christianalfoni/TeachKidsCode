import state from './state.js';

export default {
  showNewCourseModal() {
    state.select('home').set('showNewCourseModal', true);
  },
  hideNewCourseModal() {
    state.select('home').set('showNewCourseModal', false);
  }
};
