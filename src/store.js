import { createStore } from "redux";

const INITIAL_STATE = {
	jugadores: [
		{
			id: 1,
			nombre: "leo",
			foto: undefined
		},
		{
			id: 2,
			nombre: "carmen",
			foto: undefined
		},
		{
			id: 3,
			nombre: "jsas",
			foto: undefined
		},
		{
			id: 4,
			nombre: "julieta",
			foto: undefined
		},
		{
			id: 5,
			nombre: "aalllll",
			foto: undefined
		}
	],
	titulares: [],
	suplentes: []
};

const reducerEntrenador = (state = INITIAL_STATE, action) => {
	if (action.type === "AGREGAR_TITULAR") {
		return {
			...state,
			titulares: state.titulares.concat(action.jugador),
			jugadores: state.jugadores.filter(
				titular => titular.id !== action.jugador.id
			)
		};
	}
	if (action.type === "AGREGAR_SUPLENTE") {
		return {
			...state,
			suplentes: state.suplentes.concat(action.jugador),
			jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
		};
	}
	if (action.type === "QUITAR_TITULAR") {
		return {
			...state,
			jugadores: state.jugadores.concat(action.jugador),
			titulares: state.titulares.filter(j => j.id !== action.jugador.id)
		};
	}
	if (action.type === "QUITAR_SUPLENTE") {
		return {
			...state,
			jugadores: state.jugadores.concat(action.jugador),
			suplentes: state.suplentes.filter(j => j.id !== action.jugador.id)
		};
	}
	return state;
};

export default createStore(reducerEntrenador);
