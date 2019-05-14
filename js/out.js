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

eval("const canvas = document.querySelector('canvas');\nconst ctx = canvas.getContext('2d');\n\ncanvas.width = 1000;\ncanvas.height = 500;\n\nconst cw = canvas.width;\nconst ch = canvas.height;\n\nconst ballSize = 20;\nlet ballX = cw / 2 - ballSize / 2;\nlet ballY = ch / 2 - ballSize / 2;\n\nconst paddelWidth = 20;\nconst paddelHeight = 100;\n\nconst playerX = 70;\nconst aiX = 910;\n\nlet playerY = 200;\nlet aiY = 200;\n\nconst lineWidth = 6;\nconst lineHeight = 16;\n\nlet ballSpeedX = 3;\nlet ballSpeedY = 3;\n\nconst player = () => {\n    ctx.fillStyle = 'green';\n    ctx.fillRect(playerX, playerY, paddelWidth, paddelHeight);\n}\n\nconst ai = () => {\n    ctx.fillStyle = 'green';\n    ctx.fillRect(aiX, aiY, paddelWidth, paddelHeight);\n}\n\nconst table = () => {\n    ctx.fillStyle = \"black\";\n    ctx.fillRect(0, 0, cw, ch);\n    for (let linePosition = 20; linePosition < ch; linePosition += 30) {\n        ctx.fillStyle = \"white\";\n        ctx.fillRect(cw / 2 - lineWidth / 2, linePosition, lineWidth, lineHeight);\n    }\n};\n\nconst ball = () => {\n    ctx.fillStyle = \"white\";\n    ctx.fillRect(ballX, ballY, ballSize, ballSize);\n\n    ballX += ballSpeedX;\n    ballY += ballSpeedY;\n\n    if (ballY >= ch - ballSize || ballY <= 0) {\n        ballSpeedY = -ballSpeedY;\n        speedUp();\n    }\n    if (ballX >= cw - ballSize || ballX <= 0) {\n        ballSpeedX = -ballSpeedX;\n        speedUp();\n    }\n}\n\ntopCanvas = canvas.offsetTop;\n\nconst playerPosition = event => {\n    playerY = event.clientY - topCanvas - paddelHeight / 2;\n\n    if (playerY <= 0) {\n        playerY = 0;\n    }\n    if (playerY >= ch - paddelHeight) {\n        playerY = ch - paddelHeight;\n    }\n}\n\nconst aiPosition = () => {\n    const middleBall = ballY + ballSize / 2;\n    const middlePaddel = aiY + paddelHeight / 2;\n\n    if (ballX > 500) {\n        if (middlePaddel - middleBall > 200) {\n            aiY -= 30;\n        } else if (middlePaddel - middleBall > 50) {\n            aiY -= 15;\n        }\n        if (middlePaddel - middleBall < -200) {\n            aiY += 30;\n        } else if (middlePaddel - middleBall < -50) {\n            aiY += 15;\n        }\n    } else if (ballX <= 500 && ballX > 100) {\n        if (middlePaddel - middleBall > 100) {\n            aiY -= 3;\n        } else if (middlePaddel - middleBall < -100) {\n            aiY += 3;\n        }\n    }\n}\n\ncanvas.addEventListener('mousemove', playerPosition);\n\nconst speedUp = () => {\n    if (ballSpeedX > 0 && ballSpeedX < 16) {\n        ballSpeedX += .2;\n    } else if (ballSpeedY < 0 && ballSpeedY > -16) {\n        ballSpeedY -= .2;\n    }\n}\n\nconst game = () => {\n    table();\n    ball();\n    player();\n    ai();\n    aiPosition();\n}\n\nsetInterval(game, 10);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hcHAuanM/Yzk5ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixtQkFBbUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzJyk7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuY2FudmFzLndpZHRoID0gMTAwMDtcbmNhbnZhcy5oZWlnaHQgPSA1MDA7XG5cbmNvbnN0IGN3ID0gY2FudmFzLndpZHRoO1xuY29uc3QgY2ggPSBjYW52YXMuaGVpZ2h0O1xuXG5jb25zdCBiYWxsU2l6ZSA9IDIwO1xubGV0IGJhbGxYID0gY3cgLyAyIC0gYmFsbFNpemUgLyAyO1xubGV0IGJhbGxZID0gY2ggLyAyIC0gYmFsbFNpemUgLyAyO1xuXG5jb25zdCBwYWRkZWxXaWR0aCA9IDIwO1xuY29uc3QgcGFkZGVsSGVpZ2h0ID0gMTAwO1xuXG5jb25zdCBwbGF5ZXJYID0gNzA7XG5jb25zdCBhaVggPSA5MTA7XG5cbmxldCBwbGF5ZXJZID0gMjAwO1xubGV0IGFpWSA9IDIwMDtcblxuY29uc3QgbGluZVdpZHRoID0gNjtcbmNvbnN0IGxpbmVIZWlnaHQgPSAxNjtcblxubGV0IGJhbGxTcGVlZFggPSAzO1xubGV0IGJhbGxTcGVlZFkgPSAzO1xuXG5jb25zdCBwbGF5ZXIgPSAoKSA9PiB7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICdncmVlbic7XG4gICAgY3R4LmZpbGxSZWN0KHBsYXllclgsIHBsYXllclksIHBhZGRlbFdpZHRoLCBwYWRkZWxIZWlnaHQpO1xufVxuXG5jb25zdCBhaSA9ICgpID0+IHtcbiAgICBjdHguZmlsbFN0eWxlID0gJ2dyZWVuJztcbiAgICBjdHguZmlsbFJlY3QoYWlYLCBhaVksIHBhZGRlbFdpZHRoLCBwYWRkZWxIZWlnaHQpO1xufVxuXG5jb25zdCB0YWJsZSA9ICgpID0+IHtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjdywgY2gpO1xuICAgIGZvciAobGV0IGxpbmVQb3NpdGlvbiA9IDIwOyBsaW5lUG9zaXRpb24gPCBjaDsgbGluZVBvc2l0aW9uICs9IDMwKSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgIGN0eC5maWxsUmVjdChjdyAvIDIgLSBsaW5lV2lkdGggLyAyLCBsaW5lUG9zaXRpb24sIGxpbmVXaWR0aCwgbGluZUhlaWdodCk7XG4gICAgfVxufTtcblxuY29uc3QgYmFsbCA9ICgpID0+IHtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgIGN0eC5maWxsUmVjdChiYWxsWCwgYmFsbFksIGJhbGxTaXplLCBiYWxsU2l6ZSk7XG5cbiAgICBiYWxsWCArPSBiYWxsU3BlZWRYO1xuICAgIGJhbGxZICs9IGJhbGxTcGVlZFk7XG5cbiAgICBpZiAoYmFsbFkgPj0gY2ggLSBiYWxsU2l6ZSB8fCBiYWxsWSA8PSAwKSB7XG4gICAgICAgIGJhbGxTcGVlZFkgPSAtYmFsbFNwZWVkWTtcbiAgICAgICAgc3BlZWRVcCgpO1xuICAgIH1cbiAgICBpZiAoYmFsbFggPj0gY3cgLSBiYWxsU2l6ZSB8fCBiYWxsWCA8PSAwKSB7XG4gICAgICAgIGJhbGxTcGVlZFggPSAtYmFsbFNwZWVkWDtcbiAgICAgICAgc3BlZWRVcCgpO1xuICAgIH1cbn1cblxudG9wQ2FudmFzID0gY2FudmFzLm9mZnNldFRvcDtcblxuY29uc3QgcGxheWVyUG9zaXRpb24gPSBldmVudCA9PiB7XG4gICAgcGxheWVyWSA9IGV2ZW50LmNsaWVudFkgLSB0b3BDYW52YXMgLSBwYWRkZWxIZWlnaHQgLyAyO1xuXG4gICAgaWYgKHBsYXllclkgPD0gMCkge1xuICAgICAgICBwbGF5ZXJZID0gMDtcbiAgICB9XG4gICAgaWYgKHBsYXllclkgPj0gY2ggLSBwYWRkZWxIZWlnaHQpIHtcbiAgICAgICAgcGxheWVyWSA9IGNoIC0gcGFkZGVsSGVpZ2h0O1xuICAgIH1cbn1cblxuY29uc3QgYWlQb3NpdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBtaWRkbGVCYWxsID0gYmFsbFkgKyBiYWxsU2l6ZSAvIDI7XG4gICAgY29uc3QgbWlkZGxlUGFkZGVsID0gYWlZICsgcGFkZGVsSGVpZ2h0IC8gMjtcblxuICAgIGlmIChiYWxsWCA+IDUwMCkge1xuICAgICAgICBpZiAobWlkZGxlUGFkZGVsIC0gbWlkZGxlQmFsbCA+IDIwMCkge1xuICAgICAgICAgICAgYWlZIC09IDMwO1xuICAgICAgICB9IGVsc2UgaWYgKG1pZGRsZVBhZGRlbCAtIG1pZGRsZUJhbGwgPiA1MCkge1xuICAgICAgICAgICAgYWlZIC09IDE1O1xuICAgICAgICB9XG4gICAgICAgIGlmIChtaWRkbGVQYWRkZWwgLSBtaWRkbGVCYWxsIDwgLTIwMCkge1xuICAgICAgICAgICAgYWlZICs9IDMwO1xuICAgICAgICB9IGVsc2UgaWYgKG1pZGRsZVBhZGRlbCAtIG1pZGRsZUJhbGwgPCAtNTApIHtcbiAgICAgICAgICAgIGFpWSArPSAxNTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYmFsbFggPD0gNTAwICYmIGJhbGxYID4gMTAwKSB7XG4gICAgICAgIGlmIChtaWRkbGVQYWRkZWwgLSBtaWRkbGVCYWxsID4gMTAwKSB7XG4gICAgICAgICAgICBhaVkgLT0gMztcbiAgICAgICAgfSBlbHNlIGlmIChtaWRkbGVQYWRkZWwgLSBtaWRkbGVCYWxsIDwgLTEwMCkge1xuICAgICAgICAgICAgYWlZICs9IDM7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBwbGF5ZXJQb3NpdGlvbik7XG5cbmNvbnN0IHNwZWVkVXAgPSAoKSA9PiB7XG4gICAgaWYgKGJhbGxTcGVlZFggPiAwICYmIGJhbGxTcGVlZFggPCAxNikge1xuICAgICAgICBiYWxsU3BlZWRYICs9IC4yO1xuICAgIH0gZWxzZSBpZiAoYmFsbFNwZWVkWSA8IDAgJiYgYmFsbFNwZWVkWSA+IC0xNikge1xuICAgICAgICBiYWxsU3BlZWRZIC09IC4yO1xuICAgIH1cbn1cblxuY29uc3QgZ2FtZSA9ICgpID0+IHtcbiAgICB0YWJsZSgpO1xuICAgIGJhbGwoKTtcbiAgICBwbGF5ZXIoKTtcbiAgICBhaSgpO1xuICAgIGFpUG9zaXRpb24oKTtcbn1cblxuc2V0SW50ZXJ2YWwoZ2FtZSwgMTApO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvYXBwLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);