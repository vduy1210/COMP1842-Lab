const app = Vue.createApp({
    // The 'data' function returns an object that holds all reactive properties for the app
    data() {
        return {
            cart: 0, // Initializes the shopping cart to 0 items
            product: 'Socks', // The name of the product
            brand: 'Vue Mastery', // The brand of the product
            image: './assets/images/socks_blue.jpg', // The default product image
            inStock: false, // Sets the initial stock availability as false (out of stock)
            details: ['50% cotton', '30% wool', '20% polyester'], // Product details as an array
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' }, // Variant with green color and image
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' }, // Variant with blue color and image
            ]
        }
    },
    // Methods section: This holds the methods that will modify data or perform actions
    methods: {
        // Method to add an item to the cart
        addToCart() {
            this.cart += 1; // Increments the cart counter by 1
        },       
        // Method to update the product image based on the selected variant's image
        updateImage(variantImage) {
            this.image = variantImage; // Changes the 'image' property to the provided image
        }
    }
});
