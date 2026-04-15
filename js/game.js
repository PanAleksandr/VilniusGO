
// +1 -> NUO 1 IKI 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

const MAX_ATTEMPTS = 10;


let attempts = 0;


let finished = false;


// pagal id
const input = document.getElementById("guessInput");     
const button = document.getElementById("guessBtn");     
const message = document.getElementById("message");     
const attemptsSpan = document.getElementById("attempts"); // span/try
const leftSpan = document.getElementById("left");       
const history = document.getElementById("history");     

leftSpan.textContent = MAX_ATTEMPTS;

//  Guess
button.addEventListener("click", () => {
  if (finished) return;
  // Number() to number
  const guess = Number(input.value);

  // 1-100
  if (!guess || guess < 1 || guess > 100) {
    message.textContent = "Enter a number from 1 to 100.";
    return; 
  }
  attempts++;//+1

  // update
  attemptsSpan.textContent = attempts;
  leftSpan.textContent = MAX_ATTEMPTS - attempts;

  
  let hintText = "";

  
  if (guess === secretNumber) {
    // luck
    hintText = "Correct ✅";
    message.textContent = `🎉 You won! Number was ${secretNumber}.`;

    // end game
    finished = true;
    button.disabled = true; 
    input.disabled = true;  

  } else if (guess < secretNumber) {
    // <<
    hintText = "Higher ⬆";
    message.textContent = "⬆ Try a bigger number";

  } else {
    // >>
    hintText = "Lower ⬇";
    message.textContent = "⬇ Try a smaller number";
  }

  // element
  const li = document.createElement("li");

  // write
  li.textContent = `${attempts}) ${guess} → ${hintText}`;

  
  history.appendChild(li);

  // attemp10
  if (!finished && attempts >= MAX_ATTEMPTS) {
    message.textContent = `❌ You lost. Number was ${secretNumber}.`;

    finished = true;
    button.disabled = true;
    input.disabled = true;
  }

  
  input.value = "";

 
});
