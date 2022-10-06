// I'm going to need a random word generator
// text field connected to dictionary
// const url = "https://random-word-api.herokuapp.com/word"
const url = "https://random-word-api.herokuapp.com/word";
let div = document.createElement("div");
let wordGenerator = document.querySelector(".wordButton");
wordGenerator.addEventListener("click", handleRandomWord);
document.body.appendChild(div);

// split method used to break a word 
// 1:1 comparison to check against letters 
// keyboard event listener



function handleRandomWord() {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data[0].split(""))
      
    })
  
  }
  console.log(wordGenerator.innerHTML)



//   function randomLetters(min, max) {
//     let numOfLetters = max - min + 1;
//     console.log(numOfLetters);
//   }

// randomLetters()