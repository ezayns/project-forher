const reasons = [
  "You're hella smart 🤓💡 — way smarter than me!",
  "You're fun to talk to even when I don’t have a story 😂🗣️",
  "I love your cute little smile 😍😊",
  "You're really beautiful 💖, hot 🔥, and have so many redeeming qualities 🌟",
  "You really just feel right to have around — you’re like home 🏡❤️",
  "To be honest, I think you’re perfect… or the closest to it 💫✨",
  "You also have pretty big eyes filya 🦋 ",
  "I also think youre madly attractibe 😩 with a beautiful mind 🥰",
  "Also, I’m not giving up on you, ine 🙏💪 — regardless of the odds",
  "Lastly, have an amazing day with the sisterhood 💃👭 — I wanted to get you something but I’m cooked today 🥲🫶"
];

let currentIndex = 0;

function updateReason() {
  document.getElementById("reason-text").textContent = reasons[currentIndex];
  document.getElementById("counter").textContent = `${currentIndex + 1} / ${reasons.length}`;
}

function nextReason() {
  if (currentIndex < reasons.length - 1) {
    currentIndex++;
    updateReason();
  }
}

function prevReason() {
  if (currentIndex > 0) {
    currentIndex--;
    updateReason();
  }
}

function startLove() {
  const landing = document.getElementById("landing-screen");
  const main = document.getElementById("main-screen");
  const music = document.getElementById("bg-music");

  // Start music
  music.play().catch(e => console.log("Autoplay blocked"));

  // Transition screens
  landing.classList.remove("active");
  landing.classList.add("hidden");

  main.classList.remove("hidden");
  main.classList.add("active");

  updateReason(); // Show first reason
}
