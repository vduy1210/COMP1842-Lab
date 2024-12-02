// Create a new Vue application instance
const app = Vue.createApp({
    // Define the data function which returns an object containing the app's data properties
    data() {
        return {
            // Define a product property with the value 'Socks'
            product: 'Socks',
            // Define an image property with the path to the image file
            image: './assets/images/socks_green.jpg',
            // Define a url property with the link to a YouTube video
            url: 'https://www.youtube.com/watch?v=eW4AM1539-g&ab_channel=Wxrdie'
        }
    }
})