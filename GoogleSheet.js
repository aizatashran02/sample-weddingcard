const scriptURL = 'https://script.google.com/macros/s/AKfycbyWd1z0R_MwZBvCOd6q9DbWPEsQ0KCpi6chw32kW0pkFzwcgwuDVt7wA-FPn23MfnoZ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})


//---------------------------TIME COUNTDOWN-----------------------//
// Set the target wedding date (YYYY, MM (0-based), DD, HH, MM, SS)
const weddingDate = new Date("2025-06-01T00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = weddingDate - now;

    if (timeLeft < 0) {
        document.querySelector(".countdown").innerHTML = "<h3>It's Wedding Time!</h3>";
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();

//---------------------------PICTURE FRAME SLIDESHOW-----------------------//
const slider = document.querySelector(".image-slider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0; // Track the current image index
const images = document.querySelectorAll(".image-slider img");
const imageWidth = images[0].clientWidth + 10; // Image width + gap

nextBtn.addEventListener("click", () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Loop back to first image
    }
    slider.scrollTo({ left: imageWidth * currentIndex, behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = images.length - 1; // Loop to last image
    }
    slider.scrollTo({ left: imageWidth * currentIndex, behavior: "smooth" });
});

//---------------------------BUTTON LAGU -----------------------//

let music = document.getElementById("background-music");
let musicIcon = document.getElementById("music-icon");
let isPlaying = true;

// Cuba autoplay selepas halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        music.muted = false; // Pastikan ia tidak dimute
        music.play().then(() => {
            console.log("Muzik autoplay berjaya!");
        }).catch(error => {
            console.log("Autoplay masih disekat oleh browser:", error);
        });
    }, 2000); // Delay autoplay dalam 2 saat untuk elak sekatan
});

// Jika autoplay gagal, mainkan muzik selepas user klik atau scroll
document.addEventListener("click", playMusicOnce, { once: true });
document.addEventListener("scroll", playMusicOnce, { once: true });

function playMusicOnce() {
    if (music.paused) {
        music.play().catch(error => console.log("Autoplay masih disekat:", error));
    }
}

// Toggle muzik dengan butang
function toggleMusic() {
    if (isPlaying) {
        music.pause();
        musicIcon.textContent = "🔇";
    } else {
        music.play();
        musicIcon.textContent = "🎵";
    }
    isPlaying = !isPlaying;
}

function openWeddingCard() {
    document.getElementById("intro").style.display = "none"; // Sembunyikan intro
    document.querySelector(".button-container").style.display = "flex"; // Tunjukkan navigation bar
}








