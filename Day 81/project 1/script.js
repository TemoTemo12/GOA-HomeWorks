function generateRandomNumber() {
    let randomNumber = Math.random() * 10;
    document.getElementById('result').textContent = randomNumber.toFixed(2);
}

// generateRandomNumber()

//############################

// function generateRandomNumber() {
//     const randomNumber = Math.random() * 10;
//     const resultElement = document.getElementById('result');
//     resultElement.textContent = randomNumber.toFixed(2);
//     resultElement.style.animation = 'none';
//     setTimeout(() => resultElement.style.animation = '', 10); // Restart animation
// }