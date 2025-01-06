document.getElementById('checkButton').addEventListener('click', () => {
  // Play the click sound
  const clickSound = document.getElementById('clickSound');
  clickSound.play();

  // Leap year logic
  const year = parseInt(document.getElementById('yearInput').value);
  const resultElement = document.getElementById('result');

  // Reset animation
  resultElement.style.animation = 'none';
  void resultElement.offsetWidth; // Trigger reflow
  resultElement.style.animation = 'result-bounce 1s ease-out';

  if (isNaN(year)) {
    resultElement.textContent = "Please enter a valid year.";
    resultElement.style.color = "red";
    return;
  }

  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  if (isLeapYear) {
    resultElement.textContent = `${year} is a leap year!`;
    resultElement.style.color = "green";
  } else {
    resultElement.textContent = `${year} is not a leap year.`;
    resultElement.style.color = "red";
  }
});
