const input = document.getElementById('input')
const header = document.querySelector('.main__header')

let questionIndex = 0

const questions = [
 {
  imgSrc: "img1.jpg",
  title: "Введи пароль из букета",
  key: "Улик69"
 },
 {
  imgSrc: "img2.jpg",
  title: "Пароль равен сумме чисел нижних камер хранения в Короне",
  key: "207"
 },
 {
  imgSrc: "img3.jpg",
  title: "Сколько пальцев на руках у Алексея?",
  key: "10"
 },
 {
  imgSrc: "img4.jpg",
  title: "Пароль на месте первого поцелуя ;)",
  key: "13824"
 },
 {
  imgSrc: "img5.jpg",
  title: "Фольсваген?...",
  key: "Поло"
 },
 {
  imgSrc: "img6.jpg",
  title: "Отчество моего будущего сына?)))))",
  key: "Алексеевич"
 },
 {
  imgSrc: "img7.jpg",
  title: "Веста номер 122, пароль равен цене 2л Pepsi без цукру",
  key: "4.43"
 },
 {
  imgSrc: "img8.jpg",
  title: "Кто ты?",
  key: "Ульяна"
 },
 {
  imgSrc: "img9.jpg",
  title: "Пароль в том самом месте на Черняховке))) (кто понял тот поймёт)",
  key: "end"
 },
 {
 imgSrc: "img10.jpg",
  title: "ебитес...",
  key: "endQuestions"
 },
]

clearPage()
showQuestion()

function clearPage() {
 header.innerHTML = ''
}

function showQuestion() {
 const contentHTML = `
  <div class="main__img"><img src="${questions[questionIndex]['imgSrc']}" alt="error"></div>
  <h1 class="main__title">${questions[questionIndex]['title']}</h1>
 `
 header.innerHTML = contentHTML
}

function checkAnswer() {
 if (input.value == questions[questionIndex]['key']) {
  questionIndex++

  input.value = ''

  showQuestion()
 } else if (input.value == '') {
  input.value = ''
  input.placeholder = "Введи пароль!"
 } else {
  input.value = ''
  input.placeholder = 'Неправильно!'
 }
}