import pool from "../config/db.js";
import jwt from "jsonwebtoken";

const JWT_SECRET = "mi_clave_super_secreta";

export const login = async (req, res) => {
  try {
    const { Usuario, Contrasenia } = req.body;

    if (!Usuario || !Contrasenia) {
      return res.status(400).json({ error: "Usuario y Contraseña son requeridos" });
    }

    const [rows] = await pool.query("CALL OBTENER_ACCESO(?, ?)", [Usuario, Contrasenia]);
    const user = rows[0][0];

    if (!user) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }

    const token = jwt.sign(
      { id: user.id, usuario: user.usuario },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.json({ token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error en el servidor" });
  }
};