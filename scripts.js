// Carrossel de Fotos
let carouselIndex = 0;
const images = document.querySelectorAll('.carousel-container img');

function showNextImage() {
  carouselIndex = (carouselIndex + 1) % images.length;
  document.querySelector('.carousel-container').style.transform = `translateX(-${carouselIndex * 100}%)`;
}
setInterval(showNextImage, 3000);

// Contador de Tempo
function timeCounter() {
  const startDate = new Date("2022-10-20"); // Coloque a data em que vocês se conheceram
  const now = new Date();
  const diff = now - startDate;
  
  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
  const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("timeCounter").innerText = 
    `${years} anos, ${months} meses, ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;

  setTimeout(timeCounter, 1000);
}
timeCounter();
