import { Router } from 'express';
import * as ejemplos from './ejemplos.js'

const routes = new Router()

routes.get('/', ejemplos.informacionEstudiantes)
routes.get('/add', ejemplos.formularioAddEstudiante)
routes.post('/add', ejemplos.endpointEstudiante)

export default routes;