var cards = document.querySelectorAll('.card');

var hasFlipped = false;
var lockBoard = false;
var firstCard, secondCard;
var score = 0
document.getElementById("result").innerHTML = score;


function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return; 
    this.classList.add('flip');

    if (hasFlipped === false) {
        hasFlipped = true;
        firstCard = this;

        return
    }
    
    secondCard = this;
    counter();
    checkForMatch();
    }

function counter() {
    score += 1 
    document.getElementById("result").innerHTML = score;
}

function checkForMatch() {
    if (firstCard.dataset.person === secondCard.dataset.person) {
        theyMatch();
    }
    else {
        theyDontMatch(); 
}
}

function theyMatch() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function theyDontMatch() {
    lockBoard = true; 
    setTimeout(() => { 
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        
        resetBoard();
        }, 1500); 
}

function resetBoard () {
    hasFlipped = false;
    lockBoard = false; 
    firstCard = null;
    secondCard = null;
}

(function randomCards () {
    cards.forEach(flipping => {
        var randomPosition = Math.floor(Math.random() * 24);
        flipping.style.order = randomPosition;
    });
})();

cards.forEach(flipping => flipping.addEventListener('click', flipCard))