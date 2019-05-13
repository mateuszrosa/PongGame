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

eval("const canvas = document.querySelector('canvas');\nconst ctx = canvas.getContext('2d');\n\ncanvas.width = 1000;\ncanvas.height = 500;\n\nconst cw = canvas.width;\nconst ch = canvas.height;\n\nconst ballSize = 20;\nlet ballX = cw / 2 - ballSize / 2;\nlet ballY = ch / 2 - ballSize / 2;\n\nconst paddleWidth = 20;\nconst paddleHeight = 100;\n\nconst playerX = 70;\nconst aiX = 910;\n\nconst playerY = 200;\nconst aiY = 200;\n\nconst player = () => {\n    ctx.fillStyle = 'green';\n    ctx.fillRect(playerX, playerY, paddleWidth, paddleHeight);\n}\n\nconst ai = () => {\n    ctx.fillStyle = 'green';\n    ctx.fillRect(aiX, aiY, paddleWidth, paddleHeight);\n}\n\nconst table = () => {\n    ctx.fillStyle = \"black\";\n    ctx.fillRect(0, 0, cw, ch);\n};\n\nconst ball = () => {\n    ctx.fillStyle = \"white\";\n    ctx.fillRect(ballX, ballY, ballSize, ballSize);\n}\n\ntable();\nball();\nplayer();\nai();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hcHAuanM/Yzk5ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpO1xuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbmNhbnZhcy53aWR0aCA9IDEwMDA7XG5jYW52YXMuaGVpZ2h0ID0gNTAwO1xuXG5jb25zdCBjdyA9IGNhbnZhcy53aWR0aDtcbmNvbnN0IGNoID0gY2FudmFzLmhlaWdodDtcblxuY29uc3QgYmFsbFNpemUgPSAyMDtcbmxldCBiYWxsWCA9IGN3IC8gMiAtIGJhbGxTaXplIC8gMjtcbmxldCBiYWxsWSA9IGNoIC8gMiAtIGJhbGxTaXplIC8gMjtcblxuY29uc3QgcGFkZGxlV2lkdGggPSAyMDtcbmNvbnN0IHBhZGRsZUhlaWdodCA9IDEwMDtcblxuY29uc3QgcGxheWVyWCA9IDcwO1xuY29uc3QgYWlYID0gOTEwO1xuXG5jb25zdCBwbGF5ZXJZID0gMjAwO1xuY29uc3QgYWlZID0gMjAwO1xuXG5jb25zdCBwbGF5ZXIgPSAoKSA9PiB7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICdncmVlbic7XG4gICAgY3R4LmZpbGxSZWN0KHBsYXllclgsIHBsYXllclksIHBhZGRsZVdpZHRoLCBwYWRkbGVIZWlnaHQpO1xufVxuXG5jb25zdCBhaSA9ICgpID0+IHtcbiAgICBjdHguZmlsbFN0eWxlID0gJ2dyZWVuJztcbiAgICBjdHguZmlsbFJlY3QoYWlYLCBhaVksIHBhZGRsZVdpZHRoLCBwYWRkbGVIZWlnaHQpO1xufVxuXG5jb25zdCB0YWJsZSA9ICgpID0+IHtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjdywgY2gpO1xufTtcblxuY29uc3QgYmFsbCA9ICgpID0+IHtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgIGN0eC5maWxsUmVjdChiYWxsWCwgYmFsbFksIGJhbGxTaXplLCBiYWxsU2l6ZSk7XG59XG5cbnRhYmxlKCk7XG5iYWxsKCk7XG5wbGF5ZXIoKTtcbmFpKCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9hcHAuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);