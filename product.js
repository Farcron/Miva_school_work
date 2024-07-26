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
            imageUrl: 'assets/man-2.png',
            name: 'Classic Gentleman',
            sizes: ['S', 'M', 'L', 'XL']
        },

        '2': {
            imageUrl: 'assets/men-3.png',
            name: 'Dynamic Movement',
            sizes: ['S', 'M', 'L', 'XL']
        },

        '3': {
            imageUrl: 'assets/men-4.png',
            name: 'City Style',
            sizes: ['S', 'M', 'L', 'XL']
        },

        '4': {
            imageUrl: 'assets/men-1.png',
            name: 'Business Ready',
            sizes: ['S', 'M', 'L', 'XL']
        },

        '5': {
            imageUrl: 'assets/men-5.png',
            name: 'Grunge Guys',
            sizes: ['S', 'M', 'L', 'XL']
        },

        '6': {
            imageUrl: 'assets/men-6.png',
            name: 'Street Style Kings',
            sizes: ['S', 'M', 'L', 'XL']
        },

        '7': {
            imageUrl: 'assets/men-7.png',
            name: 'Sporty Retro',
            sizes: ['S', 'M', 'L', 'XL']
        },

        '8': {
            imageUrl: 'assets/men-8.png',
            name: 'Casual Cool',
            sizes: ['S', 'M', 'L', 'XL']
        },

        '9': {
            imageUrl: 'assets/men-9.png',
            name: 'Denim Dudes',
            sizes: ['S', 'M', 'L', 'XL']
        },

        '10': {
            imageUrl: 'assets/men-10.png',
            name: 'Hip-Hop Heritage',
            sizes: ['S', 'M', 'L', 'XL']
        },

        '11': {
            imageUrl: 'assets/men-12.png',
            name: 'Grunge Guys',
            sizes: ['S', 'M', 'L', 'XL']
        },

        '12': {
            imageUrl: 'assets/image-4.png',
            name: 'Plaid & Patterns',
            sizes: ['S', 'M', 'L', 'XL']
        },

        '13': {
            imageUrl: 'assets/women-3.png',
            name: 'Elegant Evening',
            sizes: ['S', 'M', 'L', 'XL']
        },

        '14': {
            imageUrl: 'assets/women-5.png',
            name: 'Floral Femme',
            sizes: ['S', 'M', 'L', 'XL']
        },

        '15': {
            imageUrl: 'assets/women-6.png',
            name: 'Minimalist Muse',
            sizes: ['S', 'M', 'L', 'XL']
        },

        '16': {
            imageUrl: 'assets/women-1.png',
            name: 'Chic Autumn Look',
            sizes: ['S', 'M', 'L', 'XL']
        },

        '17': {
            imageUrl: 'assets/women-7.png',
            name: 'Retro Glam',
            sizes: ['S', 'M', 'L', 'XL']
        },

        '18': {
            imageUrl: 'assets/women-8.png',
            name: 'Boho Beauty',
            sizes: ['S', 'M', 'L', 'XL']
        },

        '19': {
            imageUrl: 'assets/women-2.png',
            name: 'Modern Minimalism',
            sizes: ['S', 'M', 'L', 'XL']
        },

        '20': {
            imageUrl: 'assets/women-9.png',
            name: 'Power Dressing',
            sizes: ['S', 'M', 'L', 'XL']
        },

        '21': {
            imageUrl: 'assets/women-10.png',
            name: 'Chic & Sleek',
            sizes: ['S', 'M', 'L', 'XL']
        },

        '22': {
            imageUrl: 'assets/women-4.png',
            name: 'Timeless Beauty',
            sizes: ['S', 'M', 'L', 'XL']
        },

        '23': {
            imageUrl: 'assets/women-11.png',
            name: 'Eclectic Elegance',
            sizes: ['S', 'M', 'L', 'XL']
        },

        '24': {
            imageUrl: 'assets/women-12.png',
            name: 'Retro Glam',
            sizes: ['S', 'M', 'L', 'XL']
        },

        '25': {
            imageUrl: 'assets/kids-2.png',
            name: 'Joyful Moments',
            sizes: ['S', 'M', 'L', 'XL']
        },

        '26': {
            imageUrl: 'assets/kids-3.png',
            name: 'Urban Beats',
            sizes: ['S', 'M', 'L', 'XL']
        },

        '27': {
            imageUrl: 'assets/kids-1.png',
            name: 'Daydreaming',
            sizes: ['S', 'M', 'L', 'XL']
        },

        '28': {
            imageUrl: 'assets/kids-4.png',
            name: 'Street Sass',
            sizes: ['S', 'M', 'L', 'XL']
        },

        '29': {
            imageUrl: 'assets/kids-6.png',
            name: 'Mini Grunge',
            sizes: ['S', 'M', 'L', 'XL']
        },

        '30': {
            imageUrl: 'assets/kids-7.png',
            name: '90s Cutie',
            sizes: ['S', 'M', 'L', 'XL']
        },

        '31': {
            imageUrl: 'assets/kids-5.png',
            name: 'Retro Kiddo',
            sizes: ['S', 'M', 'L', 'XL']
        },

        '32': {
            imageUrl: 'assets/image-6.png',
            name: 'Lil Trendsetter',
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