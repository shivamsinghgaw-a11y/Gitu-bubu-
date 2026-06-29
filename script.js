// Typing Animation
const typingText = "You mean the world to me ❤️";
const typingElement = document.getElementById("typing");
let index = 0;

function typeWriter() {
  if (index < typingText.length) {
    typingElement.textContent += typingText.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}

typeWriter();

// Falling Hearts Animation
function createHearts() {
  const heartsContainer = document.getElementById("hearts");
  const hearts = ["❤️", "💕", "💖", "💗", "💝"];

  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 100 + "%";
    heart.style.top = "-50px";

    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 3000);
  }, 300);
}

createHearts();

// Open and Close Letter Popup
function openLetter() {
  const popup = document.getElementById("popup");
  popup.classList.add("show");
}

function closeLetter() {
  const popup = document.getElementById("popup");
  popup.classList.remove("show");
}

// Close popup when clicking outside the box
window.addEventListener("click", (e) => {
  const popup = document.getElementById("popup");
  if (e.target === popup) {
    closeLetter();
  }
});

// Forever Counter (Days, Hours, Minutes, Seconds)
function updateTimer() {
  // Set your relationship start date here
  const startDate = new Date("2023-01-01").getTime(); // Change this to your actual date
  const now = new Date().getTime();
  const difference = now - startDate;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  const timerElement = document.getElementById("timer");

  if (timerElement) {
    timerElement.innerHTML = `
      <div class="time-box">
        ${days}
        <div class="time-label">Days</div>
      </div>
      <div class="time-box">
        ${hours}
        <div class="time-label">Hours</div>
      </div>
      <div class="time-box">
        ${minutes}
        <div class="time-label">Minutes</div>
      </div>
      <div class="time-box">
        ${seconds}
        <div class="time-label">Seconds</div>
      </div>
    `;
  }
}

// Update timer on page load and every second
updateTimer();
setInterval(updateTimer, 1000);

// Cake wish interaction
const cake = document.querySelector(".cake");
if (cake) {
  cake.addEventListener("click", () => {
    alert("🎂 Make a wish! I wish you all the happiness in the world! ❤️");
  });
}