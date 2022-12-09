import axios from "axios";

// Aca deben declarar las variables donde tengan el action types.
export const GET_ALL_TEAMS = "GET_ALL_TEAMS";
export const GET_TEAM_DETAIL = "GET_TEAM_DETAIL";
export const CREATE_TEAM = "CREATE_TEAM";
export const DELETE_TEAM = "DELETE_TEAM";
// Esten atentos a que los nombres de las variables coincidan.

// Fijarse que la sintaxis de nuestra Action creator es distinta a lo que venimos haciendo. Esto es
// debido al uso del middleware "thunk", el cual nos permite trabajar con acciones asincrónicas.
// Necesitamos hacer uso de este middleware ya que nuestras peticiones al back siempre son asincrónicas,
// por lo tanto, necesitamos ese "delay" para despachar nuestra action hasta que la data nos llegue.
// Vas a tener que usar la funcion "dispatch" recibida en la funcion interna para despachar la action que
// va a llegar a nuestro reducer.
// Acá pueden ver un poco mejor la explicación y algunos ejemplos: https://github.com/reduxjs/redux-thunk

// Usar ruta 'http://localhost:3001/teams' para buscar todas los teams en nuestro back.
// Esto lo vas a poder hacer utilizando fetch.

export const getAllTeams = () => async (dispatch) => {
  // Tu código acá
  const teams = await axios.get("http://localhost:3001/teams");
  dispatch({ type: GET_ALL_TEAMS, payload: teams.data });
};

// Usar ruta 'http://localhost:3001/teams/:id' para buscar un team por el id pasado
// como parámetro de la action creator.
// Donde :id, el id recibido como argumento de la action creator.
// Ojo, hacer un console.log de la respuesta desde el back. En nuestro reducer esperamos un objeto;
// export const getTeam = () => dispatch => {};
export const getTeamDetail = (id) => async (dispatch) => {
  // Tu código acá
  const team = await axios.get(`http://localhost:3001/teams/${id}`);
  dispatch({ type: GET_TEAM_DETAIL, payload: team.data });
};

// Inicializamos id en 5, para que nuestros próximos ID's no se pisen con los existentes.
// La vas a usar en la funcion createTeam, descomentala cuando te haga falta;

let id = 5;

// Desde el componente ejecutamos la action creator, pasandole como argumento los values que vamos a utilizar para crear un team.
export const createTeam = (payload) => {
  // Tu código acá
  id++;
  return { type: CREATE_TEAM, payload: { ...payload, id } };
};

// Desde el componente ejecutamos la action creator, pasandole como argumento el id del team que queremos eliminar.
export const deleteTeam = (id) => {
  // Tu código acá
  return { type: DELETE_TEAM, payload: id };
};
