const url = "https://random-word-api.herokuapp.com/word";
let wordGenerator = document.querySelector(".wordbutton");
wordGenerator.addEventListener("click", handleRandomWord);


function handleRandomWord() {
  fetch(url)
  .then(res => res.json())
  .then(data => {
    let splitWord = data[0].split("")
    
    console.log(splitWord)
    //--------------------SPLITTING THE WORD-------------------- 
    for (let i = 0; i < splitWord.length; i++) {
      console.log(splitWord[i])
      let div = document.createElement("div");
      div.classList.add("randomword")
      div.style.width = '80px'
      div.style.height = '20px'
      div.innerHTML = splitWord[i]
      // below works just fine
      document.body.appendChild(div);
    }
    })
  }
// -------------------KEYBOARD EVENT-----------------------------








//   function randomLetters(min, max) {
//     let numOfLetters = max - min + 1;
//     console.log(numOfLetters);
//   }

// randomLetters(1, 5)

// ---------------GAME CONSTRUCTOR-------------

player = function () {
  wordHold = document.querySelector("wordhold");
  positive = document.createElement("ul");
}

for (let i = 0; i < word.length; i++) {

}