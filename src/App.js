import React from "react";
import Jugadores from "./Componentes/Jugadores";
import EquipoSeleccionado from "./Componentes/EquipoSeleccionado";
import { Provider} from 'react-redux';
import store from "./store";


const App = () => (
	<Provider store= {store}>
		<main>
			<h1>Equipo nooob</h1>
			<Jugadores />
			<EquipoSeleccionado />
		</main>
	</Provider>
);

export default App;
