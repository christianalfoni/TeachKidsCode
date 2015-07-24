export default {
  changeFileName(args, state) {
    state.set(['file', 'name'], args.fileName);
  },
  changeFileContent(args, state) {
    state.set(['file', 'content'], args.fileContent);
  },
  setSaving(args, state) {
    state.set('isSaving', true);
  },
  unsetSaving(args, state) {
    state.set('isSaving', false);
  },
  saveFile(args, state, promise) {
    args.utils.request.send('post', '/files', {
      file: state.get('file')
    })
    .then(function (result) {
      promise.resolve({
        id: result.id
      });
    })
    .catch(function (error) {
      promise.reject({
        error: error
      });
    });
  },
  setError(args, state) {
    state.set('error', args.error);
  },
  setFileId(args, state) {
    state.set(['file', 'id'], args.id);
  },
  resetFile(args, state) {
    state.set('file', {
      id: null,
      name: '',
      content: ''
    });
  },
  displayEditor(args, state) {
    state.set('view', 'editor');
  },
  displayFiles(args, state) {
    state.set('view', 'files');
  },
  setLoadingFiles(args, state) {
    state.set('isLoadingFiles', true);
  },
  unsetLoadingFiles(args, state) {
    state.set('isLoadingFiles', false);
  },
  getFiles(args, state, promise) {
    args.utils.request.get('/files')
      .then(function (files) {
        promise.resolve({
          files: files
        });
      })
      .catch(function (error) {
        promise.reject({
          error: error
        });
      });
  },
  setFiles(args, state) {
    state.set('files', args.files);
    return {
      currentFileIndex: state.get('currentFileIndex') || 0
    };
  },
  setCurrentFileIndex(args, state) {
    state.set('currentFileIndex', args.currentFileIndex);
  },
  setEditedFile(args, state) {
    const files = state.get('files');
    state.set('file', files[state.get('currentFileIndex')].toJS());
    state.set('view', 'editor');
  },
  publishFile(args, state, promise) {
    args.utils.request.send('post', '/files/' + state.get(['file', 'id']) + '/publish')
      .then(function () {
        promise.resolve();
      })
      .catch(function () {
        promise.reject();
      });
  }
};
