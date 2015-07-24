import Controller from 'cerebral-react-immutable-store';
import request from './request.js';

const state = {
  file: {
    id: null,
    name: '',
    content: ''
  },
  isSaving: false,
  isPublishing: false,
  error: null,
  view: 'editor',
  isLoadingFiles: false,
  files: [],
  currentFileIndex: null
};

const defaultArgs = {
  utils: {
    request: request
  }
};

export default Controller(state, defaultArgs);
