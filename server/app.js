const express = require('express');
const {getPosts, agregarPost} = require('./consultas');
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, world')
});

app.get("/posts", async(req, res) => {
    const result = await getPosts()
    res.json(result)
})

app.post("/posts", async(req, res) => {
    const {titulo, img, descripcion, likes} = req.body
    const result = await agregarPost(titulo, img, descripcion, likes)
    res.send('Post agregado')
})

app.listen(PORT, (req, res) => {
    console.log(`Server listening on port${PORT}`);
});