import express from 'express';

const app = express();

app.get("/login", async (req, res) => {
  try {
    const { usuario, password } = req.query;

    const [rows] = await pool.query("CALL sp_login(?, ?)", [usuario, password]);

    res.json(rows[0]); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en el servidor" });
  }
});


app.listen (3001, () =>{
    console.log("Server listening on port 3001");
})