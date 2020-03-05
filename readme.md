# Microverse Project Title - Tic Tac Toe [Collaborative Project]
Javascript

### Snapshot

![](https://github.com/geraldgsh/tic-tac-toe-js/blob/feature/img/TTT.JPG?raw=true)

### Introduction.
In this project, the student builds a Tic Tac Toe game (Again) but this time it’ll be rendered in the browser. No backend. This project follows the lesson about Factory Functions and The Module Pattern so the main goal is to put into practice those concepts along with the main concepts of Object Oriented Programming. Particularly, classes/objects and how to access their methods and attributes.

You can find the original project specification at: https://www.theodinproject.com/courses/javascript/lessons/tic-tac-toe-javascript

### Project Setup

1. Set up your project with a HTML, CSS and Javascript files and get the Git repo all set up.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
    />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Tic Tac Toe</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>  

    <section>
      <h1 class="game--title">Tic Tac Toe</h1>
      <h2 class="game-status"></h2>
      <div class="game--container" id="squares">
        <div data-index="0" class="cell" id="cell"></div>
        <div data-index="1" class="cell" id="cell"></div>
        <div data-index="2" class="cell" id="cell"></div>
        <div data-index="3" class="cell" id="cell"></div>
        <div data-index="4" class="cell" id="cell"></div>
        <div data-index="5" class="cell" id="cell"></div>
        <div data-index="6" class="cell" id="cell"></div>
        <div data-index="7" class="cell" id="cell"></div>
        <div data-index="8" class="cell" id="cell"></div>
      </div>
      <button class="game-restart">Restart Game</button>
      <div class="score-board"></div>
      <div id="inputsContainer">
        <div id="textBoxContainer">
          <input
            type="text"
            class="input"
            id="playerOneName"
            placeholder="Player One"
          />
          <input
            type="text"
            class="input"
            id="playerTwoName"
            placeholder="Player Two"
          />
        </div>
        <div id="buttonsContainer">
          <button class="startButton button is-primary">
            Start New Game!
          </button>
          <button id="endGameButton" class="button is-danger">
            End Current Game
          </button>
        </div>
      </div>
    </section>

    <!-- The Modal -->
    <div id="myModal" class="modal">
      <!-- Modal content -->
      <div class="modal-content">
        <span class="close">&times;</span>
        <h2 class="winner-status"></h2>
      </div>
    </div>

    <script src="script.js"></script>
  </body>
</html>
```

2. You’re going to store the gameboard as an array inside of a Gameboard object, so start there! Your players are also going to be stored in objects… and you’re probably going to want an object to control the flow of the game itself.

```javascript
const playBoard = (() => {
  const gridBoard = ['', '', '', '', '', '', '', '', ''];
  const winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];
  return {
    gridBoard,
    winningCombination,
  };
})();
const playerGenerator = (name, mark, wins, playArr) => ({
  name,
  mark,
  wins,
  playArr,
});
```

2.1 Your main goal here is to have as little global code as possible. Try tucking everything away inside of a module or factory. Rule of thumb: if you only ever need ONE of something (gameBoard, displayController), use a module. If you need multiples of something (players!), create them with factories.

```javascript
const gameEngine = (() => {
  const scoreboard = () => {}
  const newPlayer = (player) => {}
  const checkNames = (name1, name2) => {}
  const start = () => {}
  const changePlayers = () => {};
  const clearBoard = () => {};
  const checkWinner = (arr) => {};
  const endGame = () => {};
  const newRound = () => {};
  const checkPlay = (cells, cellNum) => {};
})();
```

3. Set up your HTML and write a JavaScript function that will render the contents of the gameboard array to the webpage (for now you can just manually fill in the array with "X"s and "O"s)

```html
See #1 above
```

4. Build the functions that allow players to add marks to a specific spot on the board, and then tie it to the DOM, letting players click on the gameboard to place their marker. Don’t forget the logic that keeps players from playing in spots that are already taken!

```javascript
const gameEngine = (() => {
  let player1 = playerGenerator('', 'X', 0, []);
  let player2 = playerGenerator('', 'O', 0, []);
  const start = () => {
.
.
    const sq = document.getElementById('squares');
    newPlayer(player1);
    newPlayer(player2);
    if (checkNames(player1.name, player2.name)) {
      sq.style.display = 'grid';
    }
    scoreboard();
  };
})();
```

4.1 Think carefully about where each bit of logic should reside. Each little piece of functionality should be able to fit in the game, player or gameboard objects.. but take care to put them in “logical” places. Spending a little time brainstorming here can make your life much easier later!

```javascript
const gameEngine = (() => {
  const checkPlay = (cells, cellNum) => {
    if (playBoard.gridBoard[cellNum] === '') {
      playBoard.gridBoard[cellNum] = currPlayer.mark;
      cells[cellNum].innerHTML += currPlayer.mark;
      currPlayer.playArr.push(Number(cellNum));

      if (checkWinner(currPlayer.playArr)) {
        const modal = document.getElementById('myModal');
        modal.style.display = 'block';
        endGame();

        const span = document.getElementsByClassName('close')[0];
        span.onclick = function setSpan() {
          modal.style.display = 'none';
          newRound();
          clearBoard();
        };
      } else {
        changePlayers();
        numPlays += 1;
        // detecting a draw
        if (numPlays > 8) {
          setStatus("It's a tie!");
        }
      }
    } else {
      setStatus('Stop clicking!');
    }
  };
})();
```

5. Build the logic that checks for when the game is over! Should check for 3-in-a-row and a tie.

```javascript
const gameEngine = (() => {
  const checkWinner = (arr) => {
    const winCombo = playBoard.winningCombination;
    const result = winCombo.some((ele) => ele.every((array) => arr.includes(array)));
    return result;
  };
})();
```

6. Clean up the interface to allow players to put in their names, include a button to start/restart the game and add a display element that congratulates the winning player!

```javascript
const gameEngine = (() => {
  const gameStatus = document.querySelector('.game-status');
  const setStatus = (status) => {
    gameStatus.innerHTML = '';
    gameStatus.innerHTML += status.toString();
  };
  setStatus('');
  const winner = document.querySelector('.winner-status');
  const setWinner = (status) => {
    winner.innerHTML = '';
    winner.innerHTML += status.toString();
  };
  const endGame = () => {
    numPlays = 0;
    setWinner(`${currPlayer.name} won!`);
  };
  document.querySelector('.game-restart').addEventListener('click', clearBoard);
  document.querySelector('#endGameButton').addEventListener('click', () => {
    window.location.reload();
  });
})();
```

### Linter Setup

Clone file [content](https://github.com/microverseinc/linters-config/tree/master/javascript) into root directory (except for readme.md)

Install ESLint on Linux environment using the following commands

Install Node Version Manager to update NodeJS + NPM.

```sh
$curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash

$export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"

$[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

Run the following command to verify installation;

```sh
$ command -v 
nvm
```

To download, compile, and install the latest release of node, do this.

```sh
nvm install node
```

Source [here](https://github.com/nvm-sh/nvm#installing-and-updating)

Go project folder using WSL environment and initiate NPM with following command

```javascript
npm init

This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (testing-practice)
version: (1.0.0)
keywords:
author: Gerald Goh
license: (ISC)
About to write to .../package.json:

{
  "name": "tic-tac-toe-js",
  "version": "1.0.0",
  "main": "script.js",
  "repository": "https://github.com/geraldgsh/tic-tac-toe-js/",
  "author": "Izaias Neto <izaiasneto4@gmail.com>",
  "license": "MIT",
  "devDependencies": {
    "eslint": "^6.8.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.20.0"
  }
}

Is this OK? (yes) yes
```

Command above will generate a "package.json" file for ESlint work off from.

##### Install ESlint

```sh
$ npm install eslint
npm notice created a lockfile as package-lock.json. You should commit this file.
+ eslint@6.8.0
added 123 packages from 83 contributors and audited 179 packages in 8.979s

3 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

Run the following to configure eslint in project root folder

```sh
$ eslint --init
? How would you like to use ESLint? To check syntax, find problems, and enforce code style
? What type of modules does your project use? JavaScript modules (import/export)
? Which framework does your project use? None of these
? Does your project use TypeScript? No
? Where does your code run? Browser
? How would you like to define a style for your project? Use a popular style guide
? Which style guide do you want to follow? Airbnb: https://github.com/airbnb/javascript
? What format do you want your config file to be in? JSON
Checking peerDependencies of eslint-config-airbnb-base@latest
The config that you've selected requires the following dependencies:

eslint-config-airbnb-base@latest eslint@^5.16.0 || ^6.1.0 eslint-plugin-import@^2.18.2
? Would you like to install them now with npm? No
Successfully created .eslintrc.json file in /mnt/d/Google_Drive/Microverse/5.Javascript/6.testing/testing-practice-js
```

Run ESlint

```sh
eslint script.js
```

##### Install Jest

```javascript
$ npm install --save-dev jest
npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.1.2 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

+ jest@25.1.0
added 537 packages from 248 contributors, removed 4 packages and audited 1204208 packages in 39.256s

29 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

Finally, run yarn test or npm run test and Jest will print this message:

```sh
PASS  ./sum.test.js
✓ adds 1 + 2 to equal 3 (5ms)
```

##### Install Babel

Install the @babel/preset-env package;

```sh
$ npm i -D @babel/preset-env
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.1.2 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

+ @babel/preset-env@7.8.6
added 232 packages from 28 contributors, removed 108 packages, updated 589 packages and audited 1208996 packages in 54.596s

31 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

##### Run jest test

```sh
$ npm test

> testing-practice@1.0.0 test /mnt/d/Google_Drive/Microverse/5.Javascript/6.testing/testing-practice-js
> jest

 PASS  capitalize/capitalize.test.js
 PASS  reverseString/reverseString.test.js
 PASS  arrayAnalysis/arrayAnalysis.test.js
 PASS  calculator/calculator.test.js
 PASS  ceasarCipher/caesarCipher.test.js

Test Suites: 5 passed, 5 total
Tests:       14 passed, 14 total
Snapshots:   0 total
Time:        3.607s
Ran all test suites.
```

Edit test;

```sh
./package.json

{
  "name": "tic-tac-toe-js",
  "version": "1.0.0",
  "main": "script.js",
  "repository": "https://github.com/geraldgsh/tic-tac-toe-js/",
  "author": "Izaias Neto <izaiasneto4@gmail.com>",
  "license": "MIT",
  "devDependencies": {
    "eslint": "^6.8.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.20.0"
  }
}
```

Create a .babelrc file in the project’s root with the following lines of code:
```javascript
{ "presets": ["@babel/preset-env"] }

#### Setup Webpack

Install webpack;

```sh
$ npm install webpack webpack-cli --save-dev
npm WARN rollback Rolling back readable-stream@2.3.6 failed (this is probably harmless): EINVAL: invalid argument, lstat '.../tic-tac-toe-js/node_modules/fsevents/node_modules'
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.11 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.11: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

+ webpack-cli@3.3.11
+ webpack@4.42.0
added 360 packages from 209 contributors and audited 5675 packages in 20.167s

19 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

Now we'll create the following directory structure, files and their contents:

Create;
./webpack.config.js

```javascript
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
};
```

Webpack can watch files and recompile whenever they change. Turn on watch mode. This means that after the initial build, webpack will continue to watch for changes in any of the resolved files.

```javascript
./package.json

{
  "name": "tic-tac-toe-js",
  "version": "1.0.0",
  "main": "'./src/index.js'",
  "scripts": {
    "build": "webpack --mode development",
    "test": "echo \"Error: no test specified\" && exit 1",
    "watch": "webpack --progress --watch"
  },
  "repository": "https://github.com/geraldgsh/tic-tac-toe-js/",
  "author": "Gerald Goh",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/geraldgsh/tic-tac-toe-js/issues"
  },
  "homepage": "https://github.com/geraldgsh/tic-tac-toe-js#readme",
  "devDependencies": {
    "@babel/preset-env": "^7.8.6",
    "eslint": "^6.8.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.20.0",
    "jest": "^25.1.0",
    "webpack": "^4.42.0",
    "webpack-cli": "^3.3.11"
  }
}
```

Run "yarn build"

```javascript
$ yarn build
yarn run v1.21.1
$ webpack --mode development
Hash: 87bba94788336242806f
Version: webpack 4.41.6
Time: 102ms
Built at: 02/21/2020 5:33:18 AM
  Asset      Size  Chunks             Chunk Names
main.js  12.3 KiB    main  [emitted]  main
Entrypoint main = main.js
[./src/index.js] 1.23 KiB {main} [built]
[./src/modules/DOMControl.js] 3.12 KiB {main} [built]
[./src/modules/localControl.js] 1.6 KiB {main} [built]
Done in 2.67s.
```

Or run "yarn watch" to start.
```javascript
$ yarn watch

yarn run v1.21.1
$ webpack --watch

webpack is watching the files…

Hash: c1487def981e257fe947
Version: webpack 4.41.6
Time: 392ms
Built at: 02/21/2020 5:34:39 AM
  Asset      Size  Chunks             Chunk Names
main.js  1.55 KiB       0  [emitted]  main
Entrypoint main = main.js
[0] ./src/index.js + 2 modules 5.96 KiB {0} [built]
    | ./src/index.js 1.23 KiB [built]
    | ./src/modules/DOMControl.js 3.12 KiB [built]
    | ./src/modules/localControl.js 1.6 KiB [built]
```

#### Steps to publish Page to Githack

1. Navigate to "dist/index.html" on GitHub Page Repo then copy URL (step #1) as illustrated below

![](https://github.com/geraldgsh/restaurant-page/blob/development/dist/media/Github-index.jpg?raw=true)

2. Go to https://raw.githack.com/, paste GitHub directory into input box (step #2) to generate URL (step #3) illustrated below.

![](https://github.com/geraldgsh/restaurant-page/blob/development/dist/media/githack.jpg?raw=true)

#### Weather APP
This is a weather app built with Bulma, Webpack, Bootstrap, JS, CSS & HTML.

```

#### Test Procedure

i. Click "Start New Game". Page should prompt "Names can't be blank".

ii. Fill in names and click "Start New Game". 9 x 9 grid will appear

iii. Play the game. After each turn, page prompt player's name whose turn is next. 

iV. If player wins, there modal aleart appears and announces winner's name. 

V. Click alert's exit button will initiate new round. Winner's wins will increment by one.

Vi. Click "Restart Game" to clear the board.

vii. Click on "End Current Game" to reset players name to blank and wins to 0.

#### Tic-Tac-Toe App
This is a small App for libraries built with JS, CSS & HTML.

### Wiki

Checkout our [wikipage](https://github.com/geraldgsh/tic-tac-toe-js/wiki) for more details. 

#### Live Demo
[Demo](https://geraldgsh.github.io/tic-tac-toe-js/)

#### Getting Started
Clone repo and run index.html

#### Prerequisites
Web browser like Chrome, Mozilla or similar.

### Original Project Source
https://www.theodinproject.com/courses/javascript/lessons/tic-tac-toe-javascript#introduction

### Github Repo
https://github.com/geraldgsh/tic-tac-toe-js


👤 **Author**

Github: [geraldgsh](https://github.com/geraldgsh)
Twitter: [geraldgsh](https://github.com/geraldgsh)
Linkedin: [Gerald Goh](https://www.linkedin.com/geraldgsh)

Github: [@izaiasneto4](https://github.com/izaiasneto4)
Twitter: [@izaiasneto_](https://twitter.com/izaiasneto_)
Linkedin: [Izaias Neto](https://www.linkedin.com/in/izaias-neto-69bb0a18a/)

## 🤝 Contributing
Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/geraldgsh/tic-tac-toe-js/issues).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc

## 📝 License

This project is [MIT](lic.url) licensed.