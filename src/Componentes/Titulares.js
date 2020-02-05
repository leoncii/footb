import React from "react";
import { connect } from "react-redux";

const Titulares = ({ titulares, quitarTitular }) => (
	<section>
		<h2>Titulares</h2>
		<div className="titulares">
			{titulares.map(t => (
				<article key={t.id} className="titular">
					<div>
						<img src={t.foto} alt="foto titular" />
						<button onClick={() => quitarTitular(t)}>X</button>
					</div>
					<p>{t.nombre}</p>
				</article>
			))}
		</div>
	</section>
);

const mapStateToProps = state => ({
	titulares: state.titulares
});

const mapDispatchToProps = dispatch => ({
	quitarTitular(jugador) {
		dispatch({
			type: "QUITAR_TITULAR",
			jugador
		});
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Titulares);
