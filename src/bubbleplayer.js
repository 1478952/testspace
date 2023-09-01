export class BubblePlayer {
  constructor() {
    this.observer = new Set();
  }

  subscribe(observer) {
    this.observer.add(observer)
  }

  notify() {
    this.observer.forEach((observer) => observer());
  }
}

export class InputModel extends BubblePlayer {
  constructor(inputText) {
    super();
    this.inputText = inputText;
  }

  getInputText() {
    return this.inputText;
  }

  setInputText(inputText) {
    this.inputText = inputText;
    this.notify();
  }
}