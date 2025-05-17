const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hello World! I am learning about Horizontal Scaling and Load Balancing in AWS.");
});
app.get('/product', (req, res) => {
    res.json({
        product: {
            name: "Laptop",
            price: 37000,
            brand: "Lenovo",
        }
    });
})
app.get('/health', (req, res) => {
    res.json({message: "EC2 is Healthy :)"});
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
});