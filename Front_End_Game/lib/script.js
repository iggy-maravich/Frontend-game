const url = "https://random-word-api.herokuapp.com/word";
let wordGenerator = document.querySelector(".wordbutton");
wordGenerator.addEventListener("click", handleRandomWord);
let wordHold = document.querySelector("wordhold");
let positive = document.createElement("ul");
let guess = document.createElement("li");
let strikes = [];
strikes.push(guess);

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
        document.body.appendChild(div);
      }
    })
    
  // ---------------GAME CONSTRUCTOR-------------
  
  
  player = function () {
    if (splitWord[i] === "-") {
      wordHold.innerHTML = "-";
    } else {
      
    }
  }
}