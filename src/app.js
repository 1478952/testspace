// import BubblePlayer from "./bubbleplayer.js";

// const inputElement = document.querySelector("input");

// const a = new BubblePlayer();
// a.subscribe(inputElement)

const countNumElement = document.querySelector(".countNum");
const increaseBtn = document.querySelector(".increaseBtn");
const decreaseBtn = document.querySelector(".decreaseBtn");

const increaseEvent = new CustomEvent(
  "increase"
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

countNumElement.addEventListener("increase", (event) => {
  // countNumElement.textContent = event.detail.countNum;
  console.log("event", event.target);
});
// countNumElement.addEventListener("decrease", (event) => {
//   countNumElement.textContent = event.detail.countNum;
// });

window.addEventListener("beforeunload", (event) => {
  event.preventDefault();
  event.returnValue = "학습을 종료하시겠습니까?";
  return "학습을 종료하시겠습니까?";
});

class SingleTonHuman {
  static #instance;
  name;
  static getInstance() {
    if (SingleTonHuman.#instance) {
      return SingleTonHuman.#instance;
    }
    return (SingleTonHuman.#instance = new SingleTonHuman());
  }

  getName() {
    return `Hi ${this.name}`;
  }

  setName(newName) {
    this.name = newName;
  }
}

const a = SingleTonHuman.getInstance();
const b = SingleTonHuman.getInstance();

a.setName("버블콘");

console.log(a.getName()); // Hi 버블콘
console.log(b.getName()); // Hi 버블콘
console.log(a === b); // true
