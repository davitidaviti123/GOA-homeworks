const plusBtn = document.querySelector('.plus-btn');
const minusBtn = document.querySelector('.minus-btn');
const quantityDisplay = document.querySelector('.quantity-display');
let quantity = 1;

plusBtn.addEventListener('click', () => {
  quantity++;
  quantityDisplay.textContent = quantity;
});

minusBtn.addEventListener('click', () => {
  if (quantity > 1) {
    quantity--;
    quantityDisplay.textContent = quantity;
  }
});
