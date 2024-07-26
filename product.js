document.addEventListener('DOMContentLoaded', function() {
    // Get the product ID from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // Fetch product data
    fetchProductData(productId).then(product => {
        document.getElementById('product-image').src = product.imageUrl;
        document.getElementById('product-name').textContent = product.name;

        const sizeList = document.getElementById('size-list');
        product.sizes.forEach(size => {
            const li = document.createElement('li');
            li.textContent = size;
            sizeList.appendChild(li);
        });
    });
});

function fetchProductData(productId) {
    // This is a placeholder. Replace with your actual data fetching logic
    const products = {
        '1': {
            imageUrl: 'assets/women-3.png',
            name: 'Elegant Evening',
            sizes: ['S', 'M', 'L', 'XL']
        },

        '2': {
            imageUrl: 'assets/women-1.png',
            name: 'Chic Autumn Look',
            sizes: ['S', 'M', 'L', 'XL']
        },

        '3': {
            imageUrl: 'assets/women-2.png',
            name: 'Modern Minimalism',
            sizes: ['S', 'M', 'L', 'XL']
        },

        '4': {
            imageUrl: 'assets/man-2.png',
            name: 'Classic Gentleman',
            sizes: ['S', 'M', 'L', 'XL']
        },

        '5': {
            imageUrl: 'assets/kids-2.png',
            name: 'Joyful Moments',
            sizes: ['S', 'M', 'L', 'XL']
        },

        '6': {
            imageUrl: 'assets/men-3.png',
            name: 'Dynamic Movement',
            sizes: ['S', 'M', 'L', 'XL']
        },

        '7': {
            imageUrl: 'assets/kids-3.png',
            name: 'Urban Beats',
            sizes: ['S', 'M', 'L', 'XL']
        },

        '8': {
            imageUrl: 'assets/men-4.png',
            name: 'City Style',
            sizes: ['S', 'M', 'L', 'XL']
        },

        '9': {
            imageUrl: 'assets/men-1.png',
            name: 'Business Ready',
            sizes: ['S', 'M', 'L', 'XL']
        },

        '10': {
            imageUrl: 'assets/kids-1.png',
            name: 'Daydreaming',
            sizes: ['S', 'M', 'L', 'XL']
        },

        '11': {
            imageUrl: 'assets/women-4.png',
            name: 'Timeless Beauty',
            sizes: ['S', 'M', 'L', 'XL']
        },

        '12': {
            imageUrl: 'assets/kids-4.png',
            name: 'Street Sass',
            sizes: ['S', 'M', 'L', 'XL']
        },
        // Add more products here
    };

    return Promise.resolve(products[productId] || {
        imageUrl: 'path/to/default-image.jpg',
        name: 'Product Not Found',
        sizes: []
    });
}