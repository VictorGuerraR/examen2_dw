import db from '../db_conection/db_conection.js'

export const informacionEstudiantes = async (req, res) => {
  try {
    let result = await db({ e: 'db_empresa.estudiantes' })
      .innerJoin({ ts: 'db_empresa.tipos_sangre' },
        'e.id_tipo_sangre', 'ts.id_tipo_sangre'
      )
    res.status(200).render('../views/index', { estudiantes: result });
  } catch (error) {
    res.status(500).json(error)
  }
}

export const formularioAddEstudiante = async (req, res) => {
  try {
    let result = await db('db_empresa.tipos_sangre')
    res.status(200).render('../views/add', { tiposDeSangre: result });
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
      let { carne, nombres, apellidos, direccion, telefono, correo_electronico, id_tipo_sangre, fecha_nacimiento } = informacion;
      let valores = { carne, nombres, apellidos, direccion, telefono, correo_electronico, id_tipo_sangre, fecha_nacimiento }
      return await trx('db_empresa.estudiantes')
        .insert(valores, ['id_estudiante'])
    })
  } catch (error) {
    throw error;
  }
}

const updateEstudianteFun = async (informacion) => {
  try {
    await db.transaction(async trx => {
      let { carne, nombres, apellidos, direccion, telefono, correo_electronico, id_tipo_sangre, fecha_nacimiento } = informacion;
      let valores = { carne, nombres, apellidos, direccion, telefono, correo_electronico, id_tipo_sangre, fecha_nacimiento }
      return await trx('db_empresa.id_estudiante')
        .update(valores, 'id_estudiante')
        .where('id_estudiante', informacion.id_estudiante)
    })
  } catch (error) {
    throw error;
  }
}

const deleteEstudianteFun = async (informacion) => {
  try {
    await db.transaction(async trx => {
      return await trx('db_empresa.estudiantes')
        .delete()
        .where('id_estudiante', informacion.id_estudiante)
    })
  } catch (error) {
    throw error;
  }
}