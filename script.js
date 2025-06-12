 // 31 daily quotes
const quotes = [
  "Freedom is nothing but a chance to be better.",
  "And it's inside myself that I must create someone who will understand.",
  "The human heart has a tiresome tendency to label as fate only what crushes it.",
  "I have spent all my life resisting the desire to end it.",
  "I miss you deeply, unfathomably, senselessly, terribly.",
  "Breathe. You’re allowed to take up space.",
  "You don’t have to have it all figured out to move forward.",
  "Some days are heavy. That’s okay.",
  "Rest is also productive.",
  "Let your pace be kind, not cruel.",
  "The way you speak to yourself matters.",
  "You are not behind; you are on your path.",
  "Healing is not linear.",
  "It’s okay to start over.",
  "Your worth isn’t measured by output.",
  "Softness is not weakness.",
  "You are allowed to feel everything.",
  "Take up all the space you need.",
  "Keep going. You’re doing better than you think.",
  "You don’t need to earn rest.",
  "Trust the timing of your life.",
  "Be proud of how far you’ve come.",
  "Even on bad days, you are worthy.",
  "Let today be enough.",
  "Pause. Reflect. Realign.",
  "You are allowed to grow at your own pace.",
  "Celebrate small wins too.",
  "Peace is a practice.",
  "Choose progress over perfection.",
  "Kindness begins with you.",
  "You deserve the love you give."
];

// Display quote based on today's date
const today = new Date();
const quoteIndex = today.getDate() - 1;
document.getElementById("dailyQuote").innerText = quotes[quoteIndex];

// Load saved notes from local storage
window.onload = function () {
  document.getElementById('workInput').value = localStorage.getItem('work') || '';
  document.getElementById('healthInput').value = localStorage.getItem('health') || '';
  document.getElementById('selfCareInput').value = localStorage.getItem('selfCare') || '';
};

// Save function
function saveNote(section) {
  const inputId = section + 'Input';
  const inputValue = document.getElementById(inputId).value;
  localStorage.setItem(section, inputValue);
  alert("Saved!");
}
    }
}

