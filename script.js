const lyrics = [
  { time: 0, text: "Tabola bale tabola bale" },
  { time: 4, text: "Tabola bale bale bale" },
  { time: 8, text: "Ana satu anak mudana" },
  { time: 12, text: "Ana satu nama anak muda" },
  { time: 16, text: "Seng pernah tabola bale" },
  { time: 20, text: "Deng kita pung bini orang" },
  { time: 24, text: "Seng pernah tabola bale" },
  { time: 28, text: "Deng orang pu laki bini" },
  { time: 32, text: "Son tabola bale" },
  { time: 36, text: "Seng tabola bale" },
  { time: 40, text: "Seng tabola bale" },
  { time: 44, text: "Seng tabola bale bale" },
  { time: 48, text: "Tabola bale" },
  { time: 52, text: "Tabola bale" },
  { time: 56, text: "Tabola bale" },
  { time: 60, text: "Bale bale bale" },
  { time: 64, text: "Ana satu nama anak muda" },
  { time: 68, text: "Seng tabola bale bale bale" },
  { time: 72, text: "Deng orang pu bini" },
  { time: 76, text: "Deng orang pu laki" },
  { time: 80, text: "Jadi seng bisa dia bale" },
  { time: 84, text: "Karena dia tabola" },
  { time: 88, text: "Bale bale bale bale" },
  { time: 92, text: "Son tabola bale" },
  { time: 96, text: "Seng tabola bale" },
  { time: 100, text: "Seng tabola bale" },
  { time: 104, text: "Tabola bale bale" },
];

const audio = document.getElementById("audio");
const lyricsContainer = document.getElementById("lyrics");

let currentIndex = -1;

audio.addEventListener("timeupdate", () => {
  const currentTime = audio.currentTime;

  if (currentIndex + 1 < lyrics.length && currentTime >= lyrics[currentIndex + 1].time) {
    currentIndex++;
    displayLyric(lyrics[currentIndex].text);
  }
});

function displayLyric(text) {
  lyricsContainer.innerHTML = `<div class="fade-in-up">${text}</div>`;
}
