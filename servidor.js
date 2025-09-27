//servodpr.js
const express = require ('express');
const app = express();

app.use (express.json());

 // array de jugador del torneo (sera la base de datos temporal)
 let jugadores = [
    {id : 1, nickname : "DragonSlayer", juego : "league of Legends", nivel : "Pro", pais :"Colombia" },
    {id : 2, nickname : "ShadowNinja", juego : "CS:GO", nivel : "Semi-Pro", pais :"Mexico" },
    {id : 3, nickname : "FireMage", juego : "Valorant", nivel : "Amateur", pais :"Argentina" }
 ];

 //Obtener jugador por ID
 app.get ('/jugador/:id', (req,res) =>{
    const id = parseInt(req.params.id );
    const jugador = jugadores.find (j => j.id === id);
    if (!jugador) {
        return res.status(404).json ({error: "Jugador no encontrado en el torneo"});
    }
    res.json(jugador);

 });

 app.listen (3000, () => {
    console.log ('API Torneo Gaming en http://localhost:3000')
 })

 