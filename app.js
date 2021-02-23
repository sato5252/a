const quiz = [
  {
    question: "答えはa",
    answers: ["a","b","c","d"],
    correct: "a"
  },{
    question: "答えは2",
    answers: ["1","2","3","4"],
    correct: "2"
  },{
    question: "答えはあ",
    answers: ["あ","い","う","え"],
    correct: "あ"
  }
];

let quizIndex = 0;
const quizLength = quiz.length;
let score = 0;

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex<buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}

setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert("正解！");
    score++;
  } else {
    window.alert("不正解!");
  }

  quizIndex++;
  
  if(quizIndex < quizLength){
    setupQuiz();
  } else {
    window.alert("終了！あなたの正解数は" + score + "/" + quizLength + "です！");
  }

}

let handlerIndex = 0;
while(handlerIndex<buttonLength){
  $button[handlerIndex].addEventListener("click",(e) => {
    clickHandler(e)
  });
  handlerIndex++;
}
