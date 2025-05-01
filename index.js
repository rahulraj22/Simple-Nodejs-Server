const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Rahul Raj: Hello World, I'm learning AWS-EC2");
});
app.get('/health', (req, res) => {
    res.json({message: "EC2 is Healthy :)"});
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
});