/*import { pool } from '../db.js'*/


export const users = async (req,res)=>{
    res.send("Bienvenido a la API de Empleados : GET & POST /api/employees --- GET & PATCH & DELETE /api/employees/:id ")
}

/*export const ping= async (req,res)=>{
    const [result] = await pool.query(`SELECT "Pong" as RESULT`);
    console.log(result[0])
    res.json(result[0])
}

export const createUser= async (req,res)=>{
    const result = await pool.query(`INSERT INTO users(name) VALUES ("John")`);
    console.log(result)
    res.json(result)
}*/