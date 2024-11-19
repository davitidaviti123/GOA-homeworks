const products = [
    {
        title: 'კომპიუტერი',
        price: '1200₾',
        imageUrl: 'https://via.placeholder.com/250',
        buttonText: 'ყიდვა'
    },
    {
        title: 'სმარტფონი',
        price: '800₾',
        imageUrl: 'https://via.placeholder.com/250',
        buttonText: 'ყიდვა'
    },
    {
        title: 'ტელევიზორი',
        price: '1500₾',
        imageUrl: 'https://via.placeholder.com/250',
        buttonText: 'ყიდვა'
    }
];

const productContainer = document.querySelector('.product-container');

products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    productCard.innerHTML = `
        <img src="${product.imageUrl}" alt="${product.title}">
        <div class="product-info">
            <div class="product-title">${product.title}</div>
            <div class="product-price">${product.price}</div>
            <button class="product-button">${product.buttonText}</button>
        </div>
    `;

    productContainer.appendChild(productCard);
});
