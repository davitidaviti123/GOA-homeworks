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

function getStepValue() {
  const stepInput = document.getElementById('step-input').value;
  const step = parseInt(stepInput, 10);
  if (isNaN(step) || step <= 0 || step > 100) {
    alert("Please enter a valid number between 1 and 100.");
    return null;
  }
  return step;
}

function increment() {
  const step = getStepValue();
  if (step !== null) {
    count += step;
    updateCounterDisplay();
  }
}

function decrement() {
  const step = getStepValue();
  if (step !== null) {
    count -= step;
    updateCounterDisplay();
  }
}

function resetCounter() {
  count = 0;
  updateCounterDisplay();
}
