// Create a new Vue app
const app = Vue.createApp({
    // The data function returns the reactive data properties used in the app
    data() {
        return {
            // Number of items in the cart
            cart: 0,
            // Name of the product
            product: 'Socks',
            // Path to the product image
            image: './assets/images/socks_blue.jpg',
            // Boolean indicating whether the product is in stock
            inStock: true,
            // Array containing the product details (materials and other information)
            details: ['50% cotton', '30% wool', '20% polyester'],
            // Array of product variants (different colors of socks)
            variants: [
                // Variant 1: Green socks with corresponding image
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },   
                // Variant 2: Blue socks with corresponding image
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
            ]
        }
    },
    // The methods section contains functions for handling actions in the app
    methods: {
        // Adds one item to the cart when called
        addToCart() {
            this.cart += 1;
        },
        // Updates the product image based on the selected variant
        updateImage(variantImage) {
            this.image = variantImage;
        },
        // Removes one item from the cart when called (if the cart has items)
        removeFromCart() {
            if (this.cart > 0) {
                this.cart -= 1;
            }
        }
    }
});
