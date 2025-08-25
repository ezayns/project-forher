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
  document.getElementById("phase6").style.display = "flex";
  
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
// Video error handling and management
document.addEventListener('DOMContentLoaded', function() {
    // Function to handle video loading
    function setupVideo() {
        const video = document.getElementById('birthdayVideo');
        
        if (video) {
            // Reset the video source when phase changes
            video.load();
            
            video.addEventListener('error', function() {
                console.error('Video loading error:', video.error);
                
                // Try different extensions if available
                const extensions = ['.mp4', '.webm', '.mov', '.avi'];
                let currentSrc = video.querySelector('source').src;
                let baseSrc = currentSrc.substring(0, currentSrc.lastIndexOf('.')) || currentSrc;
                
                // Remove current sources
                while (video.firstChild) {
                    video.removeChild(video.firstChild);
                }
                
                // Add all extension options
                extensions.forEach(ext => {
                    const source = document.createElement('source');
                    source.src = baseSrc + ext;
                    source.type = 'video/' + ext.substring(1);
                    video.appendChild(source);
                });
                
                // Reload video
                video.load();
            });
        }
    }
    
    // Set up video when phase 6 is shown
    const phase6Btn = document.querySelector('#phase5 .nxtBtn');
    if (phase6Btn) {
        phase6Btn.addEventListener('click', function() {
            // Setup video after a short delay to ensure phase 6 is visible
            setTimeout(setupVideo, 100);
        });
    }
    
    // Also set up video when the page loads if already on phase 6
    setupVideo();
});

