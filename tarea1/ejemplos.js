import db from '../db_conection/db_conection.js'

export const informacionEstudiantes = async (req, res) => {
  try {
    let result = await db({ p: 'db_empresa.productos' })
      .innerJoin({ m: 'db_empresa.marca' }, 'm.idMarca', 'p.idMarca')
    res.status(200).render('../views/index', { productos: result });
  } catch (error) {
    res.status(500).json(error)
  }
}

export const formularioAddEstudiante = async (req, res) => {
  try {
    let result = await db('db_empresa.marca')
    res.status(200).render('../views/add', { marcas: result });
  } catch (error) {
    res.status(500).json(error)
  }
}

export const endpointEstudiante = async (req, res) => {
  try {
    let idEstudiante;
    if (req.body?.create) {
      idEstudiante = createEstudianteFun(req.body)
    } else if (req.body?.update) {
      idEstudiante = updateEstudianteFun(req.body)
    } else if (req.body?.delete) {
      idEstudiante = deleteEstudianteFun(req.body)
    }

    res.status(200).redirect('/')
  } catch (error) {
    res.status(500).redirect('/')
  }
}

const createEstudianteFun = async (informacion) => {
  try {

    await db.transaction(async trx => {
      let { producto, idMarca, descripcion, precio_costo, precio_venta, existencia } = informacion;
      let valores = { producto, idMarca, descripcion, precio_costo, precio_venta, existencia }
      return await trx('db_empresa.productos')
        .insert(valores, ['idProducto'])
    })
  } catch (error) {
    throw error;
  }
}

const updateEstudianteFun = async (informacion) => {
  try {
    await db.transaction(async trx => {
      let { producto, idMarca, descripcion, precio_costo, precio_venta, existencia } = informacion;
      let valores = { producto, idMarca, descripcion, precio_costo, precio_venta, existencia }
      return await trx('db_empresa.productos')
        .update(valores, 'idProducto')
        .where('idProducto', informacion.idProducto)
    })
  } catch (error) {
    throw error;
  }
}

const deleteEstudianteFun = async (informacion) => {
  try {
    await db.transaction(async trx => {
      return await trx('db_empresa.productos')
        .delete()
        .where('idProducto', informacion.idProducto)
    })
  } catch (error) {
    throw error;
  }
}