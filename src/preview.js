const DUMMY_DATA = [
  {
    id: "24bf25ac-730a-4409-b694-eac6a9312e26",
    data: {
      text: "<p>전송 테스트</p>",
    },
    type: "text",
  },
  {
    id: "20e87b14-30f6-4c4d-a2fa-636f8aca305b",
    data: [
      {
        text: "<p>한문1</p>",
        audio: {
          src: "",
        },
        meaning: "<p>뜻1</p>",
        character: {
          src: "https://d3ck2c76fu5pug.cloudfront.net/assets/XyYFwpO5M5gopX394QhOtZG5/qTjx9gU5IL9cNfolcpcgRnOXK1kK7BuD.png",
          name: "김",
        },
        pronunciation: "<p>병음1</p>",
      },
      {
        text: "<p>한문2</p>",
        audio: {
          src: "",
        },
        meaning: "<p>뜻2</p>",
        character: {
          src: "https://fastly.picsum.photos/id/704/200/200.jpg?hmac=kJOOLetUU-CUDBZJ8Y1l52dL4qYp9QRAKpQC8OsyOSo",
          name: "박",
        },
        pronunciation: "<p>병음2</p>",
      },
    ],
    type: "conversation",
  },
];

const createElement = (htmlTag, classNames) => {
  const element = document.createElement(htmlTag);
  element.className = classNames;
  return element;
};

const previewDiv = document.querySelector(".preview");

const textComponent = (textData) => {
  const textWrap = createElement("div", "text-wrap");
  const text = createElement("div", "text");
  text.innerHTML = textData.text;
  textWrap.append(text);
  return textWrap;
};

const conversationComponent = (conversationData) => {
  const ul = document.createElement("ul");
  ul.className = "conversation-wrapper";
  for (let i = 0; i < conversationData.length; i++) {
    const li = createElement("li", "conversation-wrap");
    li.append(createImgWrap(conversationData[i]));
    li.append(createTextWrap(conversationData[i]));
    ul.append(li);
  }
  return ul;
};

const createImgWrap = (conversationData) => {
  const imgGrp = createElement("div", "img-grp");
  const imgWrap = createElement("div", "img-wrap");
  const imgRound = createElement("div", "img-round");
  const btnProfile = createElement("button", "btn-profile");
  const img = createElement("img", "profile");
  const name = createElement("p", "name");
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

const createTextWrap = (conversationData) => {
  const textWrap = createElement("div", "txt-wrap");
  const chinese = createElement("div", "chinese");
  const pinyin = createElement("div", "pinyin");
  const mean = createElement("div", "mean");
  chinese.innerHTML = conversationData.text;
  pinyin.innerHTML = conversationData.pronunciation;
  mean.innerHTML = conversationData.meaning;
  textWrap.append(chinese);
  textWrap.append(pinyin);
  textWrap.append(mean);
  return textWrap;
};

const getQuestion = (contentData) => {
  switch (contentData.type) {
    case "text":
      return textComponent(contentData.data);
    case "conversation":
      return conversationComponent(contentData.data);
  }
};

for (let i = 0; i < DUMMY_DATA.length; i++) {
  const questionDiv = document.createElement("div");
  questionDiv.className = "previewList";
  const question = getQuestion(DUMMY_DATA[i]);
  questionDiv.append(question);
  previewDiv.append(questionDiv);
}
