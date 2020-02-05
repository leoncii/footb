import React from "react";
import { connect } from "react-redux";

const Suplentes = ({ suplentes, quitarSuplente }) => (
	<section>
		<h2>Suplentes</h2>
		<div className="suplentes">
			{suplentes.map(s => (
				<article key={s.id} className="suplente">
					<div>
						<img src={s.foto} alt="foto suplente" />
						<button onClick={() => quitarSuplente(s)}>X</button>
					</div>
					<p>{s.nombre}</p>
				</article>
			))}
		</div>
	</section>
);

const mapStateToProps = state => ({
	suplentes: state.suplentes
});

const mapDispatchToProps = dispatch => ({
	quitarSuplente(jugador) {
		dispatch({
			type: "QUITAR_SUPLENTE",
			jugador
		});
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Suplentes);
