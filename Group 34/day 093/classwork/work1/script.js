let count = 0;

function updateCounterDisplay() {
  const counterElement = document.getElementById('counter');
  counterElement.textContent = count;

  if (count > 0) {
    counterElement.className = 'positive';
  } else if (count < 0) {
    counterElement.className = 'negative';
  } else {
    counterElement.className = 'neutral';
  }
}

function increment() {
  count++;
  updateCounterDisplay();
}

function decrement() {
  count--;
  updateCounterDisplay();
}

function resetCounter() {
  count = 0;
  updateCounterDisplay();
}
