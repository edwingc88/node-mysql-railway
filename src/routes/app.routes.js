import {Router} from 'express'
import { users } from '../controllers/app.controller.js'

const router = Router()

router.get('/',users)

/*router.get('/ping',ping)

router.get('/create',createUser)*/


export default router