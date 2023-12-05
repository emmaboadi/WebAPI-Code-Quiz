var startButton = document.querySelector("#start");

function startGame() {
    isWin = false;
    timerCount = 80;

    startButton.disabled = true;
    renderBlanks()
    startTimer()
}

document.addEventListener("click", function(event))
