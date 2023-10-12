document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".card");
    let currentCard = 0;
  
    function showCard(index) {
      cards.forEach(card => card.style.opacity = 0);
      cards[index].style.opacity = 1;
    }
  
    function nextCard() {
      currentCard = (currentCard + 1) % cards.length;
      showCard(currentCard);
    }
  
    showCard(currentCard);
    setInterval(nextCard, 5000);
  });