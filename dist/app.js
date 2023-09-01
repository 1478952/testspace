/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classCheckPrivateStaticFieldDescriptor(descriptor, action) { if (descriptor === undefined) { throw new TypeError("attempted to " + action + " private static field before its declaration"); } }
function _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
// import BubblePlayer from "./bubbleplayer.js";

// const inputElement = document.querySelector("input");

// const a = new BubblePlayer();
// a.subscribe(inputElement)

var countNumElement = document.querySelector(".countNum");
var increaseBtn = document.querySelector(".increaseBtn");
var decreaseBtn = document.querySelector(".decreaseBtn");
var increaseEvent = new CustomEvent("increase"
// {
// detail: {
//   countNum: +countNumElement.textContent + 1,
// },
// }
);

function increaseNum() {
  countNumElement.dispatchEvent(increaseEvent);
}

// function decreaseNum() {
//   const decreaseEvent = new CustomEvent("decrease", {
//     detail: {
//       countNum: countNumElement.textContent - 1,
//     },
//   });
//   countNumElement.dispatchEvent(decreaseEvent);
// }

increaseBtn.addEventListener("click", increaseNum);
// decreaseBtn.addEventListener("click", decreaseNum);

countNumElement.addEventListener("increase", function (event) {
  // countNumElement.textContent = event.detail.countNum;
  console.log("event", event.target);
});
// countNumElement.addEventListener("decrease", (event) => {
//   countNumElement.textContent = event.detail.countNum;
// });

window.addEventListener("beforeunload", function (event) {
  event.preventDefault();
  event.returnValue = "학습을 종료하시겠습니까?";
  return "학습을 종료하시겠습니까?";
});
var SingleTonHuman = /*#__PURE__*/function () {
  function SingleTonHuman() {
    _classCallCheck(this, SingleTonHuman);
    _defineProperty(this, "name", void 0);
  }
  _createClass(SingleTonHuman, [{
    key: "getName",
    value: function getName() {
      return "Hi ".concat(this.name);
    }
  }, {
    key: "setName",
    value: function setName(newName) {
      this.name = newName;
    }
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (_classStaticPrivateFieldSpecGet(SingleTonHuman, SingleTonHuman, _instance)) {
        return _classStaticPrivateFieldSpecGet(SingleTonHuman, SingleTonHuman, _instance);
      }
      return _classStaticPrivateFieldSpecSet(SingleTonHuman, SingleTonHuman, _instance, new SingleTonHuman());
    }
  }]);
  return SingleTonHuman;
}();
var _instance = {
  writable: true,
  value: void 0
};
var a = SingleTonHuman.getInstance();
var b = SingleTonHuman.getInstance();
a.setName("버블콘");
console.log(a.getName()); // Hi 버블콘
console.log(b.getName()); // Hi 버블콘
console.log(a === b); // true
/******/ })()
;