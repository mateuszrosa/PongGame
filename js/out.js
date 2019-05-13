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

eval("const canvas = document.querySelector('canvas');\nconst ctx = canvas.getContext('2d');\n\ncanvas.width = 1000;\ncanvas.height = 500;\n\nconst cw = canvas.width;\nconst ch = canvas.height;\n\nconst ballSize = 20;\nlet ballX = cw / 2 - ballSize / 2;\nlet ballY = ch / 2 - ballSize / 2;\n\nconst paddleWidth = 20;\nconst paddleHeight = 100;\n\nconst playerX = 70;\nconst aiX = 910;\n\nconst playerY = 200;\nconst aiY = 200;\n\nconst lineWidth = 6;\nconst lineHeight = 16;\n\nlet ballSpeedX = 1;\nlet ballSpeedY = -1;\n\nconst player = () => {\n    ctx.fillStyle = 'green';\n    ctx.fillRect(playerX, playerY, paddleWidth, paddleHeight);\n}\n\nconst ai = () => {\n    ctx.fillStyle = 'green';\n    ctx.fillRect(aiX, aiY, paddleWidth, paddleHeight);\n}\n\nconst table = () => {\n    ctx.fillStyle = \"black\";\n    ctx.fillRect(0, 0, cw, ch);\n    for (let linePosition = 20; linePosition < ch; linePosition += 30) {\n        ctx.fillStyle = \"white\";\n        ctx.fillRect(cw / 2 - lineWidth / 2, linePosition, lineWidth, lineHeight);\n    }\n};\n\nconst ball = () => {\n    ctx.fillStyle = \"white\";\n    ctx.fillRect(ballX, ballY, ballSize, ballSize);\n\n    if (ballY >= ch - ballSize) {\n        ballSpeedY = -1;\n    } else if (ballY <= 0) {\n        ballSpeedY = 1;\n    }\n    ballX += ballSpeedX;\n    ballY += ballSpeedY;\n}\n\nconst game = () => {\n    table();\n    ball();\n    player();\n    ai();\n}\n\nsetInterval(game, 25);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hcHAuanM/Yzk5ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixtQkFBbUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpO1xuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbmNhbnZhcy53aWR0aCA9IDEwMDA7XG5jYW52YXMuaGVpZ2h0ID0gNTAwO1xuXG5jb25zdCBjdyA9IGNhbnZhcy53aWR0aDtcbmNvbnN0IGNoID0gY2FudmFzLmhlaWdodDtcblxuY29uc3QgYmFsbFNpemUgPSAyMDtcbmxldCBiYWxsWCA9IGN3IC8gMiAtIGJhbGxTaXplIC8gMjtcbmxldCBiYWxsWSA9IGNoIC8gMiAtIGJhbGxTaXplIC8gMjtcblxuY29uc3QgcGFkZGxlV2lkdGggPSAyMDtcbmNvbnN0IHBhZGRsZUhlaWdodCA9IDEwMDtcblxuY29uc3QgcGxheWVyWCA9IDcwO1xuY29uc3QgYWlYID0gOTEwO1xuXG5jb25zdCBwbGF5ZXJZID0gMjAwO1xuY29uc3QgYWlZID0gMjAwO1xuXG5jb25zdCBsaW5lV2lkdGggPSA2O1xuY29uc3QgbGluZUhlaWdodCA9IDE2O1xuXG5sZXQgYmFsbFNwZWVkWCA9IDE7XG5sZXQgYmFsbFNwZWVkWSA9IC0xO1xuXG5jb25zdCBwbGF5ZXIgPSAoKSA9PiB7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICdncmVlbic7XG4gICAgY3R4LmZpbGxSZWN0KHBsYXllclgsIHBsYXllclksIHBhZGRsZVdpZHRoLCBwYWRkbGVIZWlnaHQpO1xufVxuXG5jb25zdCBhaSA9ICgpID0+IHtcbiAgICBjdHguZmlsbFN0eWxlID0gJ2dyZWVuJztcbiAgICBjdHguZmlsbFJlY3QoYWlYLCBhaVksIHBhZGRsZVdpZHRoLCBwYWRkbGVIZWlnaHQpO1xufVxuXG5jb25zdCB0YWJsZSA9ICgpID0+IHtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjdywgY2gpO1xuICAgIGZvciAobGV0IGxpbmVQb3NpdGlvbiA9IDIwOyBsaW5lUG9zaXRpb24gPCBjaDsgbGluZVBvc2l0aW9uICs9IDMwKSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgIGN0eC5maWxsUmVjdChjdyAvIDIgLSBsaW5lV2lkdGggLyAyLCBsaW5lUG9zaXRpb24sIGxpbmVXaWR0aCwgbGluZUhlaWdodCk7XG4gICAgfVxufTtcblxuY29uc3QgYmFsbCA9ICgpID0+IHtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgIGN0eC5maWxsUmVjdChiYWxsWCwgYmFsbFksIGJhbGxTaXplLCBiYWxsU2l6ZSk7XG5cbiAgICBpZiAoYmFsbFkgPj0gY2ggLSBiYWxsU2l6ZSkge1xuICAgICAgICBiYWxsU3BlZWRZID0gLTE7XG4gICAgfSBlbHNlIGlmIChiYWxsWSA8PSAwKSB7XG4gICAgICAgIGJhbGxTcGVlZFkgPSAxO1xuICAgIH1cbiAgICBiYWxsWCArPSBiYWxsU3BlZWRYO1xuICAgIGJhbGxZICs9IGJhbGxTcGVlZFk7XG59XG5cbmNvbnN0IGdhbWUgPSAoKSA9PiB7XG4gICAgdGFibGUoKTtcbiAgICBiYWxsKCk7XG4gICAgcGxheWVyKCk7XG4gICAgYWkoKTtcbn1cblxuc2V0SW50ZXJ2YWwoZ2FtZSwgMjUpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvYXBwLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);