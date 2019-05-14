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

eval("const canvas = document.querySelector('canvas');\nconst ctx = canvas.getContext('2d');\n\ncanvas.width = 1000;\ncanvas.height = 500;\n\nconst cw = canvas.width;\nconst ch = canvas.height;\n\nconst ballSize = 20;\nlet ballX = cw / 2 - ballSize / 2;\nlet ballY = ch / 2 - ballSize / 2;\n\nconst paddleWidth = 20;\nconst paddleHeight = 100;\n\nconst playerX = 70;\nconst aiX = 910;\n\nlet playerY = 200;\nconst aiY = 200;\n\nconst lineWidth = 6;\nconst lineHeight = 16;\n\nlet ballSpeedX = 1;\nlet ballSpeedY = 1;\n\nconst player = () => {\n    ctx.fillStyle = 'green';\n    ctx.fillRect(playerX, playerY, paddleWidth, paddleHeight);\n}\n\nconst ai = () => {\n    ctx.fillStyle = 'green';\n    ctx.fillRect(aiX, aiY, paddleWidth, paddleHeight);\n}\n\nconst table = () => {\n    ctx.fillStyle = \"black\";\n    ctx.fillRect(0, 0, cw, ch);\n    for (let linePosition = 20; linePosition < ch; linePosition += 30) {\n        ctx.fillStyle = \"white\";\n        ctx.fillRect(cw / 2 - lineWidth / 2, linePosition, lineWidth, lineHeight);\n    }\n};\n\nconst ball = () => {\n    ctx.fillStyle = \"white\";\n    ctx.fillRect(ballX, ballY, ballSize, ballSize);\n\n    ballX += ballSpeedX;\n    ballY += ballSpeedY;\n\n    if (ballY >= ch - ballSize || ballY <= 0) {\n        ballSpeedY = -ballSpeedY;\n    }\n    if (ballX >= cw - ballSize || ballX <= 0) {\n        ballSpeedX = -ballSpeedX;\n    }\n}\n\ntopCanvas = canvas.offsetTop;\n\nconst playerPosition = event => {\n    playerY = event.clientY - topCanvas;\n}\n\ncanvas.addEventListener('mousemove', playerPosition);\n\nconst game = () => {\n    table();\n    ball();\n    player();\n    ai();\n}\n\nsetInterval(game, 10);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hcHAuanM/Yzk5ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixtQkFBbUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzJyk7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuY2FudmFzLndpZHRoID0gMTAwMDtcbmNhbnZhcy5oZWlnaHQgPSA1MDA7XG5cbmNvbnN0IGN3ID0gY2FudmFzLndpZHRoO1xuY29uc3QgY2ggPSBjYW52YXMuaGVpZ2h0O1xuXG5jb25zdCBiYWxsU2l6ZSA9IDIwO1xubGV0IGJhbGxYID0gY3cgLyAyIC0gYmFsbFNpemUgLyAyO1xubGV0IGJhbGxZID0gY2ggLyAyIC0gYmFsbFNpemUgLyAyO1xuXG5jb25zdCBwYWRkbGVXaWR0aCA9IDIwO1xuY29uc3QgcGFkZGxlSGVpZ2h0ID0gMTAwO1xuXG5jb25zdCBwbGF5ZXJYID0gNzA7XG5jb25zdCBhaVggPSA5MTA7XG5cbmxldCBwbGF5ZXJZID0gMjAwO1xuY29uc3QgYWlZID0gMjAwO1xuXG5jb25zdCBsaW5lV2lkdGggPSA2O1xuY29uc3QgbGluZUhlaWdodCA9IDE2O1xuXG5sZXQgYmFsbFNwZWVkWCA9IDE7XG5sZXQgYmFsbFNwZWVkWSA9IDE7XG5cbmNvbnN0IHBsYXllciA9ICgpID0+IHtcbiAgICBjdHguZmlsbFN0eWxlID0gJ2dyZWVuJztcbiAgICBjdHguZmlsbFJlY3QocGxheWVyWCwgcGxheWVyWSwgcGFkZGxlV2lkdGgsIHBhZGRsZUhlaWdodCk7XG59XG5cbmNvbnN0IGFpID0gKCkgPT4ge1xuICAgIGN0eC5maWxsU3R5bGUgPSAnZ3JlZW4nO1xuICAgIGN0eC5maWxsUmVjdChhaVgsIGFpWSwgcGFkZGxlV2lkdGgsIHBhZGRsZUhlaWdodCk7XG59XG5cbmNvbnN0IHRhYmxlID0gKCkgPT4ge1xuICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIGN3LCBjaCk7XG4gICAgZm9yIChsZXQgbGluZVBvc2l0aW9uID0gMjA7IGxpbmVQb3NpdGlvbiA8IGNoOyBsaW5lUG9zaXRpb24gKz0gMzApIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KGN3IC8gMiAtIGxpbmVXaWR0aCAvIDIsIGxpbmVQb3NpdGlvbiwgbGluZVdpZHRoLCBsaW5lSGVpZ2h0KTtcbiAgICB9XG59O1xuXG5jb25zdCBiYWxsID0gKCkgPT4ge1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgY3R4LmZpbGxSZWN0KGJhbGxYLCBiYWxsWSwgYmFsbFNpemUsIGJhbGxTaXplKTtcblxuICAgIGJhbGxYICs9IGJhbGxTcGVlZFg7XG4gICAgYmFsbFkgKz0gYmFsbFNwZWVkWTtcblxuICAgIGlmIChiYWxsWSA+PSBjaCAtIGJhbGxTaXplIHx8IGJhbGxZIDw9IDApIHtcbiAgICAgICAgYmFsbFNwZWVkWSA9IC1iYWxsU3BlZWRZO1xuICAgIH1cbiAgICBpZiAoYmFsbFggPj0gY3cgLSBiYWxsU2l6ZSB8fCBiYWxsWCA8PSAwKSB7XG4gICAgICAgIGJhbGxTcGVlZFggPSAtYmFsbFNwZWVkWDtcbiAgICB9XG59XG5cbnRvcENhbnZhcyA9IGNhbnZhcy5vZmZzZXRUb3A7XG5cbmNvbnN0IHBsYXllclBvc2l0aW9uID0gZXZlbnQgPT4ge1xuICAgIHBsYXllclkgPSBldmVudC5jbGllbnRZIC0gdG9wQ2FudmFzO1xufVxuXG5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgcGxheWVyUG9zaXRpb24pO1xuXG5jb25zdCBnYW1lID0gKCkgPT4ge1xuICAgIHRhYmxlKCk7XG4gICAgYmFsbCgpO1xuICAgIHBsYXllcigpO1xuICAgIGFpKCk7XG59XG5cbnNldEludGVydmFsKGdhbWUsIDEwKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL2FwcC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);