// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos con la letra y su tiempo de aparición en segundos
var lyricsData = [
  { text: "I'm findin' ways to articulate", time: 28 },
  { text: "The feeling I'm goin' through", time: 31 },
  { text: "I just can't say I don't love you", time: 33 },
  { text: "Cause I love you", time: 38 },
  { text: "It's hard for me to communicate", time: 43 },
  { text: "The thoughts that I hold", time: 44 },
  { text: "But tonight, I'm gon' let you know", time: 45 },
  { text: "Let me tell the truth", time: 49 },
  { text: "Baby, let me tell the truth", time: 52 },
  { text: "You know what I'm thinkin'", time: 56 },
  { text: "See it in your eyes", time: 58 },
  { text: "You hate that you want me", time: 60 },
  { text: "Hate it when you cry", time: 62 },
  { text: "You're scared to be lonely", time: 64 },
  { text: "Specially in the night", time: 65 },
  { text: "I'm scared that I'll miss you", time: 67 },
  { text: "Happens every time", time: 69 },
  { text: "I don't want this feelin'", time: 71 },
  { text: "I can't afford love", time: 72 },
  { text: "I try to find reason to pull us apart", time: 74 },
  { text: "It ain't workin' cause you're perfect", time:78 },
  { text: "And I know that you're worth it", time: 80 },
  { text: "I can't walk away", time: 82 },
];

// Animar las letras con mayor precisión
function updateLyrics() {
  var time = audio.currentTime; // Obtiene el tiempo exacto del audio
  var currentLine = lyricsData.find((line) => time >= line.time && time < line.time + 3.5);

  if (currentLine) {
    var fadeInDuration = 0.5; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);
    
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }

  requestAnimationFrame(updateLyrics); // Llamada recursiva con más precisión
}

// Iniciar la sincronización al reproducir el audio
audio.addEventListener("play", () => requestAnimationFrame(updateLyrics));

// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  if (titulo) {
    titulo.style.animation = "fadeOut 3s ease-in-out forwards";
    setTimeout(() => {
      titulo.style.display = "none";
    }, 3000);
  }
}

setTimeout(ocultarTitulo, 216000);
