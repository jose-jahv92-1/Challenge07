const express   = require('express');
const app       = express()
const port      = 8080;
const server    = app.listen(port, () =>{
    console.log(`Servidor activo en el puerto ${port}`);
})

server.on("error", err => console.log(err))


app.get('/items', (req,res) => {
    res.json({msg:'items'})
})

app.get('/item-random', (req,res) => {
    res.json({msg:'item random'})
})

app.get('/visitas', (req,res) => {
    res.json({msg:'visitas'})
})
