document.addEventListener('DOMContentLoaded', () => {
    const diceContainer = document.getElementById('diceContainer');
    const rollButton = document.getElementById('rollButton');
    const diceCountInput = document.getElementById('diceCount');

    function createDice(value) {
        const dice = document.createElement('div');
        dice.classList.add('dice');
        dice.textContent = value;
        return dice;
    }

    function rollDice() {
        return Math.floor(Math.random() * 6) + 1;
    }

    function displayDice() {
        diceContainer.innerHTML = '';
        const numDice = parseInt(diceCountInput.value);
        for (let i = 0; i < numDice; i++) {
            const value = rollDice();
            const dice = createDice(value);
            diceContainer.appendChild(dice);
        }
    }

    rollButton.addEventListener('click', displayDice);

    // Initial display
    displayDice();
});