// Smooth scroll for Apology Page
document.querySelector(".cta-button").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector("#apology").scrollIntoView({ behavior: "smooth" });
});

const rain = document.getElementById("rain");
const numDrops = 100; // Number of raindrops

for (let i = 0; i < numDrops; i++) {
  const drop = document.createElement("div");
  drop.classList.add("drop");
  drop.style.left = `${Math.random() * 100}vw`;
  drop.style.animationDuration = `${Math.random() * 1 + 0.5}s`;
  drop.style.animationDelay = `${Math.random() * 2}s`;
  rain.appendChild(drop);
}

// Get the button and audio elements
const playButton = document.getElementById("play-button");
const audio = document.getElementById("background-music");

// Add an event listener for the button click
playButton.addEventListener("click", function () {
  // Play the audio when the button is clicked
  audio.play();

  // Optionally change the button text after it's clicked
  playButton.textContent = "Now Playing...";
  playButton.disabled = true; // Disable the button after it's clicked
});
