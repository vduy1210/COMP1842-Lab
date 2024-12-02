// Create a new Vue app
const app = Vue.createApp({
    // The data function returns the reactive data properties used in the app
    data() {
        return {
            // Name of the product
            product: 'Socks',
            // Path to the product image
            image: './assets/images/socks_blue.jpg',
            // Boolean indicating whether the product is in stock
            inStock: true,
            // Array containing the product details (materials and other information)
            details: ['50% cotton', '30% wool', '20% polyester', 'Lê Nguyễn Vũ Duy', 'GCD220076'],
            // Array of product variants (different colors of socks)
            variants: [
                { id: 2234, color: 'green' },  // Variant 1 (Green)
                { id: 2235, color: 'blue' },   // Variant 2 (Blue)
            ],
            // Array of available sizes for the product
            sizes: ['S', 'M', 'L', 'XL'],
        }
    }
})
