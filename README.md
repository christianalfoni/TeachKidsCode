# TeachKidsCode
An open source service for learning code

https://codeship.com/projects/TeachKidsCode/status?branch=master

Latest version can be found at: [teachkidscode.herokuapp.com/](http://teachkidscode.herokuapp.com/).

## The tech prototype
The prototype of the technology that will be used is located at [www.jsfridge.com](http://www.jsfridge.com). The technology allows synced recording of voice and interaction in the browser. The main feature of the prototype implementation is html/css/javascript and a "mini-browser". It basically is an IDE that allows you to record voice and interactions.

## The concept
The TeachKidsCode project will be a framework for creating courses. The framework will consist of:

- The ability to watch and interact with courses
- The ability to create courses in the browser
- The ability to record scenes with synced voice and interaction
- Replay recordings, seek, pause and resync any changes while paused when playing back scene

These features will allow the project to implement different types of scenes that can hook on to an API for recording, creating events, saving scene etc. These are ideas to scene types:

- Markdown to text
- html/css/javascript with minibrowser
- Slides
- Compiled language to javascript and terminal

The last scene type, compiled language with terminal, is especially exciting. By [compiling a language](https://github.com/jashkenas/coffeescript/wiki/List-of-languages-that-compile-to-JS) to JavaScript we are able to run the code in the browser and display the result in a terminal component.

## Application stack
- Webpack with Babel-loader for ES6 and JSX support
- React JS as view layer and Baobab as state layer
- React-Bootstrap as component system
- A custom combination of recorder.js and libmp3lame.js is used to record audio and convert to mp3 in the client before uploading to server
- Node JS backend
- Redis for session storage
- MongoDB for audio (FSGrid) and course storage
- MaxCDN is used to cache audio recordings in production

## Development process
The application will be running on Heroku, later Nodejitsu when they have moved to GoDaddy. It will automatically be deployed via codeship to Heroku when pushing to repo and tests pass. The project itself can be fully simulated locally. To run the development workflow simply run `npm start` in the terminal. This launches the project, connects to your local MongoDB and optionally the Redis instance. It has automatic rebuilds and ES6 syntax support.

## Development requirements
- Node JS v0.12
- MongoDB
- Redis (optional)

## Styleguide
#### Comments
Always use `//` to comment above line of code, also on multiline comments. Leave empty line above comment.
```js
var someCode = 'foo';

// This is my comment
// on multiline
var someMoreCode = 'bar';
```
#### Comments Section
Use `// === SOMETHING === `and `// === SOMETHING END ===` to indicate a section of code.
```js
var someCode = 'foo';

// === SOME SECTION ===
var someOtherCode = 'bar';
// === SOME SECTION END ===
```
#### Methods
Use the new ES6 syntax with paranthesis attached to method name.
```js
var methods = {
  method1() {

  },
  method2() {

  }
};
```
#### React Bootstrap
Always import components from React Bootstrap with the following syntax.
```js
import {
  Input,
  Row,
  Col
} from 'react-boostrap';
```
