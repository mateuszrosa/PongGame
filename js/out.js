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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("const canvas = document.querySelector('canvas');\nconst ctx = canvas.getContext('2d');\n\ncanvas.width = 1000;\ncanvas.height = 500;\n\nconst cw = canvas.width;\nconst ch = canvas.height;\n\nconst ballSize = 20;\nlet ballX = cw / 2 - ballSize / 2;\nlet ballY = ch / 2 - ballSize / 2;\n\nconst paddleWidth = 20;\nconst paddleHeight = 100;\n\nconst playerX = 70;\nconst aiX = 910;\n\nconst playerY = 200;\nconst aiY = 200;\n\nconst lineWidth = 6;\nconst lineHeight = 16;\n\nlet ballSpeedX = 1;\nlet ballSpeedY = 1;\n\nconst player = () => {\n    ctx.fillStyle = 'green';\n    ctx.fillRect(playerX, playerY, paddleWidth, paddleHeight);\n}\n\nconst ai = () => {\n    ctx.fillStyle = 'green';\n    ctx.fillRect(aiX, aiY, paddleWidth, paddleHeight);\n}\n\nconst table = () => {\n    ctx.fillStyle = \"black\";\n    ctx.fillRect(0, 0, cw, ch);\n    for (let linePosition = 20; linePosition < ch; linePosition += 30) {\n        ctx.fillStyle = \"white\";\n        ctx.fillRect(cw / 2 - lineWidth / 2, linePosition, lineWidth, lineHeight);\n    }\n};\n\nconst ball = () => {\n    ctx.fillStyle = \"white\";\n    ctx.fillRect(ballX, ballY, ballSize, ballSize);\n\n    ballX += ballSpeedX;\n    ballY += ballSpeedY;\n\n    if (ballY >= ch - ballSize || ballY <= 0) {\n        ballSpeedY = -ballSpeedY;\n    }\n    if (ballX >= cw - ballSize || ballX <= 0) {\n        ballSpeedX = -ballSpeedX;\n    }\n}\n\nconst game = () => {\n    table();\n    ball();\n    player();\n    ai();\n}\n\nsetInterval(game, 10);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hcHAuanM/Yzk5ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixtQkFBbUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKTtcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG5jYW52YXMud2lkdGggPSAxMDAwO1xuY2FudmFzLmhlaWdodCA9IDUwMDtcblxuY29uc3QgY3cgPSBjYW52YXMud2lkdGg7XG5jb25zdCBjaCA9IGNhbnZhcy5oZWlnaHQ7XG5cbmNvbnN0IGJhbGxTaXplID0gMjA7XG5sZXQgYmFsbFggPSBjdyAvIDIgLSBiYWxsU2l6ZSAvIDI7XG5sZXQgYmFsbFkgPSBjaCAvIDIgLSBiYWxsU2l6ZSAvIDI7XG5cbmNvbnN0IHBhZGRsZVdpZHRoID0gMjA7XG5jb25zdCBwYWRkbGVIZWlnaHQgPSAxMDA7XG5cbmNvbnN0IHBsYXllclggPSA3MDtcbmNvbnN0IGFpWCA9IDkxMDtcblxuY29uc3QgcGxheWVyWSA9IDIwMDtcbmNvbnN0IGFpWSA9IDIwMDtcblxuY29uc3QgbGluZVdpZHRoID0gNjtcbmNvbnN0IGxpbmVIZWlnaHQgPSAxNjtcblxubGV0IGJhbGxTcGVlZFggPSAxO1xubGV0IGJhbGxTcGVlZFkgPSAxO1xuXG5jb25zdCBwbGF5ZXIgPSAoKSA9PiB7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICdncmVlbic7XG4gICAgY3R4LmZpbGxSZWN0KHBsYXllclgsIHBsYXllclksIHBhZGRsZVdpZHRoLCBwYWRkbGVIZWlnaHQpO1xufVxuXG5jb25zdCBhaSA9ICgpID0+IHtcbiAgICBjdHguZmlsbFN0eWxlID0gJ2dyZWVuJztcbiAgICBjdHguZmlsbFJlY3QoYWlYLCBhaVksIHBhZGRsZVdpZHRoLCBwYWRkbGVIZWlnaHQpO1xufVxuXG5jb25zdCB0YWJsZSA9ICgpID0+IHtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjdywgY2gpO1xuICAgIGZvciAobGV0IGxpbmVQb3NpdGlvbiA9IDIwOyBsaW5lUG9zaXRpb24gPCBjaDsgbGluZVBvc2l0aW9uICs9IDMwKSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgIGN0eC5maWxsUmVjdChjdyAvIDIgLSBsaW5lV2lkdGggLyAyLCBsaW5lUG9zaXRpb24sIGxpbmVXaWR0aCwgbGluZUhlaWdodCk7XG4gICAgfVxufTtcblxuY29uc3QgYmFsbCA9ICgpID0+IHtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgIGN0eC5maWxsUmVjdChiYWxsWCwgYmFsbFksIGJhbGxTaXplLCBiYWxsU2l6ZSk7XG5cbiAgICBiYWxsWCArPSBiYWxsU3BlZWRYO1xuICAgIGJhbGxZICs9IGJhbGxTcGVlZFk7XG5cbiAgICBpZiAoYmFsbFkgPj0gY2ggLSBiYWxsU2l6ZSB8fCBiYWxsWSA8PSAwKSB7XG4gICAgICAgIGJhbGxTcGVlZFkgPSAtYmFsbFNwZWVkWTtcbiAgICB9XG4gICAgaWYgKGJhbGxYID49IGN3IC0gYmFsbFNpemUgfHwgYmFsbFggPD0gMCkge1xuICAgICAgICBiYWxsU3BlZWRYID0gLWJhbGxTcGVlZFg7XG4gICAgfVxufVxuXG5jb25zdCBnYW1lID0gKCkgPT4ge1xuICAgIHRhYmxlKCk7XG4gICAgYmFsbCgpO1xuICAgIHBsYXllcigpO1xuICAgIGFpKCk7XG59XG5cbnNldEludGVydmFsKGdhbWUsIDEwKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL2FwcC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);