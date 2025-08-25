setTimeout(() => {
    document.getElementById("phase1").style.display = "none";
    document.getElementById("phase2").style.display = "flex";
}, 5000);

// Phase 2: Password Check
document.getElementById("submitBtn").addEventListener("click", () => {
    const password = document.getElementById("passwordInput").value;
    if (password.toLowerCase() === "president") { // Password = "president"
        document.getElementById("phase2").style.display = "none";
        document.getElementById("phase3").style.display = "flex";
        startCountdown(); // Use ONLY this countdown function
    } else {
        document.getElementById("errorMsg").style.display = "block";
    }
});

// Phase 3: Countdown (3→2→1→Phase 5)
function startCountdown() {
    let count = 3;
    const countdownElement = document.getElementById("countdown");
    const countdownInterval = setInterval(() => {
        countdownElement.textContent = count;
        count--;
        if (count < 0) {
            clearInterval(countdownInterval);
            document.getElementById("phase3").style.display = "none";
            document.getElementById("phase5").style.display = "flex"; // Use display:flex (not classList)
        }
    }, 1000);
}

document.querySelector(".nxtBtn").addEventListener("click", () => {
  document.getElementById("phase5").style.display = "none";
  
  // Show Phase 6 after 3 seconds
  setTimeout(() => {
    document.getElementById("phase6").style.display = "flex";
  }, 3000);
});

document.querySelector("#phase6 .nxtBtn").addEventListener("click", () => {
  // Hide Phase 6
  document.getElementById("phase6").style.display = "none";
  
  // Show Phase 7 with romantic message
  document.getElementById("phase7").style.display = "flex";
  
  // Optional: Start floating hearts
  startHeartsAnimation();
});

// Optional: Floating hearts effect
function startHeartsAnimation() {
  const colors = ["#ff6b8b", "#ffb6c1", "#ff8fab"];
  setInterval(() => {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animation = `floatUp ${Math.random() * 3 + 2}s linear`;
    heart.style.color = colors[Math.floor(Math.random() * colors.length)];
    document.body.appendChild(heart);
    
    // Remove heart after animation
    setTimeout(() => heart.remove(), 5000);
  }, 300);
}