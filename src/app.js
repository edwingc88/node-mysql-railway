import express from 'express'
import { pool } from './db.js'
import { PORT } from './config.js'

const app = express()

app.get('/',async (req,res)=>{
    const [rows]= await pool.query('SELECT * from users')
    res.send(rows)
})

app.get('/ping',async (req,res)=>{
    const [result] = await pool.query(`SELECT "hello world" as RESULT`);
    console.log(result[0])
    res.json(result[0])
})

app.get('/create',async (req,res)=>{
    const result = await pool.query(`INSERT INTO users(name) VALUES ("John")`);
    console.log(result)
    res.json(result)
})

app.get('/employess',(req,res)=>res.send('obteniendo empleados'))
app.post('/employess',(req,res)=>res.send('creando empleados'))
app.put('/employess',(req,res)=>res.send('actualizando empleados'))
app.delete('/employess',(req,res)=>res.send('eliminando empleados'))

app.listen(PORT)

/*console.log("Server  GG  port 3000")*/
