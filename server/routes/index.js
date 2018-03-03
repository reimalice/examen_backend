const docenteController = require('../controllers').docente;
const materiaController = require('../controllers').materia;
const aulaController = require('../controllers').aula;
const horarioController = require('../controllers').horario;

module.exports = (app) => {

/**
 * @api {GET} / Permite obtener el estado de la aplicación
 * 
 * @apiName Obtener el estado del serivicio
 * @apiGroup Estado
 * @apiVersion 1.0.0
 * 
 * @apiParamExample {text} Obtener el estado del servicio (CURL)
 * curl -X GET \
 * 
 *  'http://127.0.0.1.4000'
 * 
 * 
 * @apiSuccess (Respuesta Exitosa) {String} respuesta de servicio
 * 
 * 
 * 
 * 
 * @apiSuccessExample {json} Respuesta existosa
 * 
 * HTTP/1.1 200 OK
 * 
 *  ***Welcome to the examen API!\n
 * 
 */


//Siguiendo con la configuración de Express, agregamos el middleware
app.get('/', (req, res) => res.status(200).send({
  message: 'Welcome to the examen API!',
}));


/**
	 * @api {GET} /docentes?limite=:limite&intervalo=:intervalo Listado
	 *
	 * @apiName Obtener listado de docentes
	 * @apiGroup Docentes
	 * @apiVersion 1.0.0
	 *
	 * @apiParam {String} limite Cantidad de datos que devolverá la solicitud
	 * @apiParam {String} intervalo Registro desde el cuál inicia la cantidad de datos que se devolverá
	 *
	 * @apiSuccess {Object[]} . Array de datos de respuesta del servicio.
	 * @apiSuccess {String} .id Identificador del docente.
   * apiSuccess {String} .paterno apellido paterno del docente.
   * @apiSuccess {String} .materno apellido materno del docente.
	 * @apiSuccess {String} .nombres Nombres del docente.
	 * @apiSuccess {String} .createdAt Creado en.
	 * @apiSuccess {String} .updatedAt Actualizado en.
	 *
	 * @apiParamExample  {text} Listado de docentes (CURL)
	 * curl -X GET \
	 *    'http://127.0.0.1:4000/docentes'
	 *
	 * @apiSuccessExample {json} Respuesta exitosa
	 *  HTTP/1.1  200  OK
	 * [
   * {
   *     "id": 1,
   *     "paterno": "apaza",
   *     "materno": "molina",
   *     "nombres": "reynaldo",
   *     "createdAt": "2018-03-03T16:00:06.599Z",
   *     "updatedAt": "2018-03-03T16:00:06.599Z"
   * }
	 * ] *
	 */


app.get('/api/v1/docentes', docenteController.list);

/**
* @api {POST} /api/v1/docentes Registro
*
* @apiName Registro de un docente
* @apiGroup Docente
* @apiVersion 1.0.0
*
* @apiParam {String} paterno apellido paterno del docente
* @apiParam {String} materno apellido materno del docente
* @apiParam {String} nombres nombres del docente
*
* @apiSuccess {Integer} id Identificador del docente.
* @apiSuccess {String} paterno apellido paterno del docente
* @apiSuccess {String} materno apellido materno del docente
* @apiSuccess {String} nombres nombres del docente
* @apiSuccess {Date} createdAt Creado en.
* @apiSuccess {Date} updatedAt Actualizado en.
*
* @apiParamExample  {text} Registro de un docente (CURL)
* curl -X POST \
*   http://127.0.0.1:4000//api/v1/docentes \
*   -H 'content-type: application/json' \
*   -d '{
*       "paterno": "apaza",
*      "materno": "molina",
*      "nombres": "reynaldo"
*   }'
*
* @apiSuccessExample {json} Respuesta exitosa
*  HTTP/1.1  201  CREATED
*[
*   {
*       "id": 1,
*       "paterno": "apaza",
*       "materno": "molina",
*       "nombres": "reynaldo",
*       "createdAt": "2018-03-03T16:00:06.599Z",
*       "updatedAt": "2018-03-03T16:00:06.599Z"
*   }
* ]

*/
app.post('/api/v1/docentes', docenteController.create);


/**
	 * @api {GET} /docentes?limite=:limite&intervalo=:intervalo Listado
	 *
	 * @apiName Obtener listado de docentes
	 * @apiGroup Docentes
	 * @apiVersion 1.0.0
	 *
	 * @apiParam {String} limite Cantidad de datos que devolverá la solicitud
	 * @apiParam {String} intervalo Registro desde el cuál inicia la cantidad de datos que se devolverá
	 *
	 * @apiSuccess {Object[]} . Array de datos de respuesta del servicio.
	 * @apiSuccess {String} .id Identificador del docente.
   * apiSuccess {String} .paterno apellido paterno del docente.
   * @apiSuccess {String} .materno apellido materno del docente.
	 * @apiSuccess {String} .nombres Nombres del docente.
	 * @apiSuccess {String} .createdAt Creado en.
	 * @apiSuccess {String} .updatedAt Actualizado en.
	 *
	 * @apiParamExample  {text} Listado de docentes (CURL)
	 * curl -X GET \
	 *    'http://127.0.0.1:4000/docentes'
	 *
	 * @apiSuccessExample {json} Respuesta exitosa
	 *  HTTP/1.1  200  OK
	 * [
   * {
   *     "id": 1,
   *     "paterno": "apaza",
   *     "materno": "molina",
   *     "nombres": "reynaldo",
   *     "createdAt": "2018-03-03T16:00:06.599Z",
   *     "updatedAt": "2018-03-03T16:00:06.599Z"
   * }
	 * ] *
	 */


  app.get('/api/v1/materias', materiaController.list);

  /**
  * @api {POST} /api/v1/docentes Registro
  *
  * @apiName Registro de un docente
  * @apiGroup Docente
  * @apiVersion 1.0.0
  *
  * @apiParam {String} paterno apellido paterno del docente
  * @apiParam {String} materno apellido materno del docente
  * @apiParam {String} nombres nombres del docente
  *
  * @apiSuccess {Integer} id Identificador del docente.
  * @apiSuccess {String} paterno apellido paterno del docente
  * @apiSuccess {String} materno apellido materno del docente
  * @apiSuccess {String} nombres nombres del docente
  * @apiSuccess {Date} createdAt Creado en.
  * @apiSuccess {Date} updatedAt Actualizado en.
  *
  * @apiParamExample  {text} Registro de un docente (CURL)
  * curl -X POST \
  *   http://127.0.0.1:4000//api/v1/docentes \
  *   -H 'content-type: application/json' \
  *   -d '{
  *       "paterno": "apaza",
  *      "materno": "molina",
  *      "nombres": "reynaldo"
  *   }'
  *
  * @apiSuccessExample {json} Respuesta exitosa
  *  HTTP/1.1  201  CREATED
  *[
  *   {
  *       "id": 1,
  *       "paterno": "apaza",
  *       "materno": "molina",
  *       "nombres": "reynaldo",
  *       "createdAt": "2018-03-03T16:00:06.599Z",
  *       "updatedAt": "2018-03-03T16:00:06.599Z"
  *   }
  * ]
  
  */
  app.post('/api/v1/materias', materiaController.create);




  app.get('/api/v1/aulas', aulaController.list);


  app.post('/api/v1/aulas', aulaController.create);


  app.get('/api/v1/horarios', horarioController.list);

  app.post('/api/v1/horarios', horarioController.create);

};