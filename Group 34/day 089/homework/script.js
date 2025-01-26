const cards = [
    { title: "Card 1", rating: 7, image: "https://via.placeholder.com/280x150" },
    { title: "Card 2", rating: 5, image: "https://via.placeholder.com/280x150" },
    { title: "Card 3", rating: 9, image: "https://via.placeholder.com/280x150" },
    { title: "Card 4", rating: 4, image: "https://via.placeholder.com/280x150" },
    { title: "Card 5", rating: 6, image: "https://via.placeholder.com/280x150" },
    { title: "Card 6", rating: 8, image: "https://via.placeholder.com/280x150" },
    { title: "Card 7", rating: 3, image: "https://via.placeholder.com/280x150" },
    { title: "Card 8", rating: 10, image: "https://via.placeholder.com/280x150" },
    { title: "Card 9", rating: 2, image: "https://via.placeholder.com/280x150" },
    { title: "Card 10", rating: 1, image: "https://via.placeholder.com/280x150" },
];

const container = document.getElementById("card-container");
const filterBtn = document.getElementById("filter-btn");
const sortAscBtn = document.getElementById("sort-asc-btn");
const sortDescBtn = document.getElementById("sort-desc-btn");
const sortRandomBtn = document.getElementById("sort-random-btn");

function renderCards(cardList) {
    container.innerHTML = "";
    cardList.forEach(card => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.innerHTML = `
            <img src="${card.image}" alt="${card.title}">
            <h3>${card.title}</h3>
            <p>Rating: ${card.rating}</p>
        `;
        container.appendChild(cardElement);
    });
}

function filterAboveAverage() {
    const average = cards.reduce((sum, card) => sum + card.rating, 0) / cards.length;
    const filtered = cards.filter(card => card.rating > average);
    renderCards(filtered);
}

function sortAscending() {
    const sorted = [...cards].sort((a, b) => a.rating - b.rating);
    renderCards(sorted);
}

function sortDescending() {
    const sorted = [...cards].sort((a, b) => b.rating - a.rating);
    renderCards(sorted);
}

function sortRandomly() {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    renderCards(shuffled);
}

filterBtn.addEventListener("click", filterAboveAverage);
sortAscBtn.addEventListener("click", sortAscending);
sortDescBtn.addEventListener("click", sortDescending);
sortRandomBtn.addEventListener("click", sortRandomly);

renderCards(cards);
