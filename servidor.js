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

  app.get ('/jugadores/:id', (req,res) => {
    const limite = pareInt (req.query.limite);
    const juego = req.query.juego;
    const nivel = req.query.nivel;
    const pais = req.query.pais;
    const buscar = req.query.buscar;

    let resultado = jugadores;

    // Filtrar por juego

    if (juego) {
        resultado = resultado.filter (j => 
            j.juego.toLowerCase().includes(juego.toLoWerCase())
        );
    }

})


