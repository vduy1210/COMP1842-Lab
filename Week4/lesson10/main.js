// Create a new Vue application instance
const app = Vue.createApp({
    // Define the data properties for the Vue instance
    data() {
        return {
            cart: [], // Array to hold the IDs of items in the cart
            premium: true // Premium status
        }
    },
    // Define the methods for the Vue instance
    methods: {
        // Method to add an item to the cart
        updateCart(id) {
            this.cart.push(id) // Add the item ID to the cart array
        },
        // Method to remove an item from the cart
        removeCart(id) {
            const index = this.cart.indexOf(id) // Find the index of the item ID in the cart array
            if (index > -1) {
                this.cart.splice(index, 1) // Remove the item ID from the cart array if it exists
            }
        }
    },
})