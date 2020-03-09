/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_gameEngine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/gameEngine */ \"./src/modules/gameEngine.js\");\n/* eslint-disable no-unused-vars */\r\n\r\n\r\nconst eventHandler = (() => {\r\n  const restart = document.querySelector('.game-restart');\r\n  restart.addEventListener('click', _modules_gameEngine__WEBPACK_IMPORTED_MODULE_0__[\"default\"].clearBoard);\r\n  const startBtn = document.querySelector('.startButton');\r\n  startBtn.addEventListener('click', _modules_gameEngine__WEBPACK_IMPORTED_MODULE_0__[\"default\"].start);\r\n  document.querySelector('.endGameButton').addEventListener('click', () => {\r\n    window.location.reload();\r\n  });\r\n})();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/gameEngine.js":
/*!***********************************!*\
  !*** ./src/modules/gameEngine.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _playBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playBoard */ \"./src/modules/playBoard.js\");\n/* harmony import */ var _playBoard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_playBoard__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _playerGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playerGenerator */ \"./src/modules/playerGenerator.js\");\n/* harmony import */ var _playerGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_playerGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* eslint-disable no-unused-vars */\r\n\r\n\r\n\r\nconst gameEngine = (() => {\r\n  // declaration of the players\r\n  let player1 = Object(_playerGenerator__WEBPACK_IMPORTED_MODULE_1__[\"playerGenerator\"])('', 'X', 0, []);\r\n  let player2 = Object(_playerGenerator__WEBPACK_IMPORTED_MODULE_1__[\"playerGenerator\"])('', 'O', 0, []);\r\n  let numPlays = 0;\r\n  let currPlayer = player1;\r\n\r\n  const checkWinner = (arr) => {\r\n    const winCombo = _playBoard__WEBPACK_IMPORTED_MODULE_0__[\"playBoard\"].winningCombination;\r\n    const result = winCombo.some((ele) => ele.every((array) => arr.includes(array)));\r\n    return result;\r\n  };\r\n\r\n  const setStatus = (status) => {\r\n    const gameStatus = document.querySelector('.game-status');\r\n    gameStatus.innerHTML = '';\r\n    gameStatus.innerHTML += status.toString();\r\n  };\r\n\r\n  const setWinner = (status) => {\r\n    const winner = document.querySelector('.winner-status');\r\n    winner.innerHTML = '';\r\n    winner.innerHTML += status.toString();\r\n  };\r\n\r\n  const scoreboard = () => {\r\n    const score = document.querySelector('.score-board');\r\n    score.innerHTML = `\r\n    <p>Player 'X': ${player1.name} ${player1.wins} win(s)</p>\r\n    <p>Player 'O': ${player2.name} ${player2.wins} win(s)</p>\r\n    `;\r\n  };\r\n\r\n  const newPlayer = (player) => {\r\n    if (player === player1) {\r\n      const player1Name = document.querySelector('#playerOneName').value;\r\n      player1.name = player1Name;\r\n    } else {\r\n      const player2Name = document.querySelector('#playerTwoName').value;\r\n      player2.name = player2Name;\r\n    }\r\n  };\r\n\r\n  const checkNames = (name1, name2) => {\r\n    if (name1 === '' || name2 === '') {\r\n      setStatus(\"Names can't be blank!\");\r\n      return false;\r\n    }\r\n    return true;\r\n  };\r\n\r\n  const start = () => {\r\n    document.querySelector('.game-restart').style.display = 'inline-block';\r\n    document.querySelector('.endGameButton').style.display = 'inline-block';\r\n    const sq = document.getElementById('squares');\r\n    newPlayer(player1);\r\n    newPlayer(player2);\r\n    if (checkNames(player1.name, player2.name)) {\r\n      sq.style.display = 'grid';\r\n    }\r\n    scoreboard();\r\n  };\r\n\r\n  const changePlayers = () => {\r\n    if (currPlayer === player1) {\r\n      currPlayer = player2;\r\n    } else {\r\n      currPlayer = player1;\r\n    }\r\n    setStatus(`It's ${currPlayer.name}'s turn!`);\r\n  };\r\n\r\n  const clearBoard = () => {\r\n    numPlays = 0;\r\n    _playBoard__WEBPACK_IMPORTED_MODULE_0__[\"playBoard\"].gridBoard = ['', '', '', '', '', '', '', '', ''];\r\n    player1 = Object(_playerGenerator__WEBPACK_IMPORTED_MODULE_1__[\"playerGenerator\"])(player1.name, player1.mark, player1.wins, []);\r\n    player2 = Object(_playerGenerator__WEBPACK_IMPORTED_MODULE_1__[\"playerGenerator\"])(player2.name, player2.mark, player2.wins, []);\r\n    const pieces = document.querySelectorAll('.cell');\r\n    pieces.forEach((box) => {\r\n      box.innerHTML = '';\r\n    });\r\n    scoreboard();\r\n    changePlayers();\r\n  };\r\n\r\n  const endGame = () => {\r\n    numPlays = 0;\r\n    setWinner(`${currPlayer.name} won!`);\r\n  };\r\n\r\n  const newRound = () => {\r\n    if (player1 === currPlayer) {\r\n      player1 = Object(_playerGenerator__WEBPACK_IMPORTED_MODULE_1__[\"playerGenerator\"])(player1.name, player1.mark, player1.wins += 1, []);\r\n      player2 = Object(_playerGenerator__WEBPACK_IMPORTED_MODULE_1__[\"playerGenerator\"])(player2.name, player2.mark, player2.wins, []);\r\n    } else {\r\n      player1 = Object(_playerGenerator__WEBPACK_IMPORTED_MODULE_1__[\"playerGenerator\"])(player1.name, player1.mark, player1.wins, []);\r\n      player2 = Object(_playerGenerator__WEBPACK_IMPORTED_MODULE_1__[\"playerGenerator\"])(player2.name, player2.mark, player2.wins += 1, []);\r\n    }\r\n    _playBoard__WEBPACK_IMPORTED_MODULE_0__[\"playBoard\"].gridBoard = ['', '', '', '', '', '', '', '', ''];\r\n    changePlayers();\r\n    scoreboard();\r\n  };\r\n\r\n  const checkPlay = (cells, cellNum) => {\r\n    if (_playBoard__WEBPACK_IMPORTED_MODULE_0__[\"playBoard\"].gridBoard[cellNum] === '') {\r\n      _playBoard__WEBPACK_IMPORTED_MODULE_0__[\"playBoard\"].gridBoard[cellNum] = currPlayer.mark;\r\n      cells[cellNum].innerHTML += currPlayer.mark;\r\n      currPlayer.playArr.push(Number(cellNum));\r\n\r\n      if (checkWinner(currPlayer.playArr)) {\r\n        const modal = document.getElementById('myModal');\r\n        modal.style.display = 'block';\r\n        endGame();\r\n\r\n        const span = document.getElementsByClassName('close')[0];\r\n        span.onclick = function setSpan() {\r\n          modal.style.display = 'none';\r\n          newRound();\r\n          clearBoard();\r\n        };\r\n      } else {\r\n        changePlayers();\r\n        numPlays += 1;\r\n        // detecting a draw\r\n        if (numPlays > 8) {\r\n          setStatus(\"It's a tie!\");\r\n        }\r\n      }\r\n    } else {\r\n      setStatus('Stop clicking!');\r\n    }\r\n  };\r\n\r\n  const cellInput = (() => {\r\n    const cells = document.querySelectorAll('.cell');\r\n    cells.forEach((cell) => {\r\n      cell.addEventListener('click', function setEvtListener() {\r\n        checkPlay(cells, this.dataset.index);\r\n      });\r\n    });\r\n  })();\r\n\r\n  return {\r\n    checkWinner,\r\n    clearBoard,\r\n    start,\r\n  };\r\n})();\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (gameEngine);\r\n\n\n//# sourceURL=webpack:///./src/modules/gameEngine.js?");

/***/ }),

/***/ "./src/modules/playBoard.js":
/*!**********************************!*\
  !*** ./src/modules/playBoard.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const playBoard = (() => {\r\n  const gridBoard = ['', '', '', '', '', '', '', '', ''];\r\n  const winningCombination = [\r\n    [0, 1, 2],\r\n    [3, 4, 5],\r\n    [6, 7, 8],\r\n    [0, 4, 8],\r\n    [2, 4, 6],\r\n    [0, 3, 6],\r\n    [1, 4, 7],\r\n    [2, 5, 8],\r\n  ];\r\n  return {\r\n    gridBoard,\r\n    winningCombination,\r\n  };\r\n})();\r\n\r\nmodule.exports = { playBoard, default: playBoard };\n\n//# sourceURL=webpack:///./src/modules/playBoard.js?");

/***/ }),

/***/ "./src/modules/playerGenerator.js":
/*!****************************************!*\
  !*** ./src/modules/playerGenerator.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const playerGenerator = (name, mark, wins, playArr) => ({\r\n  name,\r\n  mark,\r\n  wins,\r\n  playArr,\r\n});\r\n\r\nmodule.exports = { playerGenerator, default: playerGenerator };\n\n//# sourceURL=webpack:///./src/modules/playerGenerator.js?");

/***/ })

/******/ });