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
/*!************************!*\
  !*** ./src/preview.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
var DUMMY_DATA = [{
  id: "24bf25ac-730a-4409-b694-eac6a9312e26",
  data: {
    text: "<p>전송 테스트</p>"
  },
  type: "text"
}, {
  id: "20e87b14-30f6-4c4d-a2fa-636f8aca305b",
  data: [{
    text: "<p>한문1</p>",
    audio: {
      src: ""
    },
    meaning: "<p>뜻1</p>",
    character: {
      src: "https://d3ck2c76fu5pug.cloudfront.net/assets/XyYFwpO5M5gopX394QhOtZG5/qTjx9gU5IL9cNfolcpcgRnOXK1kK7BuD.png",
      name: "김"
    },
    pronunciation: "<p>병음1</p>"
  }, {
    text: "<p>한문2</p>",
    audio: {
      src: ""
    },
    meaning: "<p>뜻2</p>",
    character: {
      src: "https://fastly.picsum.photos/id/704/200/200.jpg?hmac=kJOOLetUU-CUDBZJ8Y1l52dL4qYp9QRAKpQC8OsyOSo",
      name: "박"
    },
    pronunciation: "<p>병음2</p>"
  }],
  type: "conversation"
}];
var createElement = function createElement(htmlTag, classNames) {
  var element = document.createElement(htmlTag);
  element.className = classNames;
  return element;
};
var previewDiv = document.querySelector(".preview");
var textComponent = function textComponent(textData) {
  var textWrap = createElement("div", "text-wrap");
  var text = createElement("div", "text");
  text.innerHTML = textData.text;
  textWrap.append(text);
  return textWrap;
};
var conversationComponent = function conversationComponent(conversationData) {
  var ul = document.createElement("ul");
  ul.className = "conversation-wrapper";
  for (var i = 0; i < conversationData.length; i++) {
    var li = createElement("li", "conversation-wrap");
    li.append(createImgWrap(conversationData[i]));
    li.append(createTextWrap(conversationData[i]));
    ul.append(li);
  }
  return ul;
};
var createImgWrap = function createImgWrap(conversationData) {
  var imgGrp = createElement("div", "img-grp");
  var imgWrap = createElement("div", "img-wrap");
  var imgRound = createElement("div", "img-round");
  var btnProfile = createElement("button", "btn-profile");
  var img = createElement("img", "profile");
  var name = createElement("p", "name");
  img.src = conversationData.character.src;
  img.alt = conversationData.character.name;
  name.innerHTML = conversationData.character.name;
  btnProfile.append(img);
  imgRound.append(btnProfile);
  imgWrap.append(imgRound);
  imgGrp.append(imgWrap);
  imgGrp.append(name);
  return imgGrp;
};
var createTextWrap = function createTextWrap(conversationData) {
  var textWrap = createElement("div", "txt-wrap");
  var chinese = createElement("div", "chinese");
  var pinyin = createElement("div", "pinyin");
  var mean = createElement("div", "mean");
  chinese.innerHTML = conversationData.text;
  pinyin.innerHTML = conversationData.pronunciation;
  mean.innerHTML = conversationData.meaning;
  textWrap.append(chinese);
  textWrap.append(pinyin);
  textWrap.append(mean);
  return textWrap;
};
var getQuestion = function getQuestion(contentData) {
  switch (contentData.type) {
    case "text":
      return textComponent(contentData.data);
    case "conversation":
      return conversationComponent(contentData.data);
  }
};
for (var i = 0; i < DUMMY_DATA.length; i++) {
  var questionDiv = document.createElement("div");
  questionDiv.className = "previewList";
  var question = getQuestion(DUMMY_DATA[i]);
  questionDiv.append(question);
  previewDiv.append(questionDiv);
}
/******/ })()
;