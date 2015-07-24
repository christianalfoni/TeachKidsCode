import './../styles/bootstrap.css';
import './../styles/bootstrap-theme.css';
import './../styles/custom.css';

import React from 'react';
import controller from './controller';
import App from './App.js';
import {
  changeFileName,
  changeFileContent,
  setSaving,
  saveFile,
  unsetSaving,
  setFileId,
  setError,
  resetFile,
  displayEditor,
  displayFiles,
  setLoadingFiles,
  getFiles,
  setFiles,
  unsetLoadingFiles,
  setCurrentFileIndex,
  setEditedFile,
  publishFile
} from './actions.js';

controller.signal('fileNameChanged', changeFileName);
controller.signal('fileContentChanged', changeFileContent);
controller.signal('saveClicked',
  setSaving,
  [saveFile, {
    resolve: [setFileId],
    reject: [setError]
  }],
  unsetSaving
);
controller.signal('createFileClicked', resetFile, displayEditor);
controller.signal('openFileClicked', displayFiles, setLoadingFiles, [getFiles], setFiles, setCurrentFileIndex, unsetLoadingFiles);
controller.signal('currentFileChanged', setCurrentFileIndex);
controller.signal('editCurrentFileClicked', setEditedFile);
controller.signal('publishClicked', [publishFile]);

React.render(controller.injectInto(App), document.body);
