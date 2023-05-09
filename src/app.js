import express from 'express'
import employeesRoutes from './routes/employees.routes.js'
import appRoutes from './routes/app.routes.js'

const app = express()
app.use(express.json())

app.use(appRoutes)
app.use('/api',employeesRoutes)

app.use((req,res,next)=>{
    res.status(404).json({
        message: 'ENDPOINT Not found'
    })
})

export default app;

/*console.log("Server  GG  port 3000")*/
