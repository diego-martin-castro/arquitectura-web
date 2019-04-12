# arquitectura-web
Repositorio para la materia arquitectura web dictada en la Universidad de Palermo (UP)

**Grupo**: (individual) xJuego (nombre a definir)

**Integrante**: Diego Martín Castro

**Negocio**: Api REST y aplicación frontend que facilita la gestion interna de un video juego (xJuego). Está planeado para que sea utilizado por usuarios internos de la compania creadora del video juego con la finalidad dr facilitar administración del mismo.

## Restful API

### Endpoints

#### Administración de jugadores

| HTTP          |  Ruta                          | Descripción                                                                      |
| ------------- |--------------------------------| ---------------------------------------------------------------------------------|
| `GET`         | `/players`                     | Obtener listado de jugadores                                                     |
| `GET`         | `/players/{playerId}`          | Obtener información básica sobre un jugador por su ID                            |
| `GET`         | `/players/{playerId}/gamelog`  | Obtener el historial de partidas jugadas durante los ultimos 30 días             |
| `GET`         | `/players/{playerId}/fighters` | Obtener informacion de los personajes con los que el usuario ha jugador          |
| `GET`         | `/players/{playerId}/stats`    | Obtener las estadísticas generales del jugador                                   |
| `POST`        | `/players`                     | Dar de alta a un jugador                                                         |
| `PUT`         | `/players/{playerId}`          | Modificar datos de un jugador                                                    |
| `DELETE`      | `/players/{playerId}`          | Eliminar un jugador                                                              |

#### Administración de escenarios

| HTTP          |  Ruta                          | Descripción                                                                      |
| ------------- |--------------------------------| ---------------------------------------------------------------------------------|
| `GET`         | `/stages`                      | Obtener listado de escenarios                                                    |
| `GET`         | `/stages/{stageId}`            | Obtener información básica sobre un escenario por su ID                          |
| `POST`        | `/stages`                      | Dar de alta un escenario                                                         |
| `PUT`         | `/stages/{stageId}`            | Modificar datos de un escenario                                                  |
| `DELETE`      | `/stages/{stageId}`            | Eliminar un escenario                                                            |

#### Administración de personajes

| HTTP          |  Ruta                          | Descripción                                                                      |
| ------------- |--------------------------------| ---------------------------------------------------------------------------------|
| `GET`         | `/fighters`                    | Obtener listado de personajes                                                    |
| `GET`         | `/fighters/{fighterId}`        | Obtener información básica sobre un personaje por su ID                          |
| `POST`        | `/fighters`                    | Dar de alta un personaje                                                         |
| `PUT`         | `/fighters/{fighterId}`        | Modificar datos de un personaje                                                  |
| `DELETE`      | `/fighters/{fighterId}`        | Eliminar un personaje                                                            |

#### Códigos de errores para todas las peticiones

| Código HTTP   |  Descripción                                                 |
| ------------- |--------------------------------------------------------------|
| `400`         | El cliente ha provisto parámetros inválidos en la petición   |
| `404`         | No se ha encontrado el recurso solicitado por el cliente     |
| `500`         | Error desconocido (servidor)                                 |
