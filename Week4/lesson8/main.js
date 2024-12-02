const app = Vue.createApp({
    // Define the data properties for the Vue instance
    data() {
        return {
            cart: 0, // Cart item count
            product: 'Socks', // Product name
            brand: 'Vue Mastery', // Brand name
            selectedVariant: 0, // Index of the selected variant
            details: ['50% cotton', '30% wool', '20% polyester'], // Product details
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 }, // Green variant
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }, // Blue variant
            ],
            onSale: true // Sale status
        }
    },
    // Define the methods for the Vue instance
    methods: {
        // Method to add an item to the cart
        addToCart() {
            this.cart += 1
        },
        // Method to update the selected variant based on the index
        updateVariant(index) {
            this.selectedVariant = index
        }
    },
    // Define computed properties for the Vue instance
    computed: {
        // Computed property to get the full title of the product
        title() {
            return this.brand + ' ' + this.product
        },
        // Computed property to get the image of the selected variant
        image() {
            return this.variants[this.selectedVariant].image
        },
        // Computed property to check if the selected variant is in stock
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        // Computed property to get the sale message
        sale() {
            if (this.onSale) {
                return this.brand + ' ' + this.product + ' is on sale.'
            }
            return ''
        }
    }
})