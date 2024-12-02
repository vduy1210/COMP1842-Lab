// Create a new Vue app instance
const app = Vue.createApp({
    // The 'data' function returns an object containing the app's data properties
    data() {
        return {
            // 'product' is the name of the product to be displayed
            product: 'Socks', 
            // 'image' stores the path to the image for the product
            image: './assets/images/socks_blue.jpg', 
            // 'inventory' is the number of items available in stock
            inventory: 100, 
            // 'onSale' is a boolean indicating if the product is on sale
            onSale: true, 
        }
    }
})
