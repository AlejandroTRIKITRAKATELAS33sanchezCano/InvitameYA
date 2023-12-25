import { Link } from "react-router-dom";
import { tiposEventos } from "../../../Constants";

const MuestrasGenerales = () => {
    return (
        <section className="ContenedorMuestras">
            {tiposEventos.map((tiposEventos) => (
                <div className="Evento">
                    <div className="imagenEvento">
                        <img src={tiposEventos.imagen} alt={tiposEventos.nombre} />
                        <Link to={tiposEventos.link}>
                            <div class="hover-galeria">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox={tiposEventos.svgViewBox}><path d={tiposEventos.svgD} fill={tiposEventos.svgFill} /></svg>
                                <p>{tiposEventos.nombre}</p>
                            </div>
                        </Link>
                    </div>
                    <div className="desEvento">
                        <h4>{tiposEventos.nombre}</h4>
                        <p>{tiposEventos.descri}</p>
                        <Link to={tiposEventos.link} className="LinkEventos">
                            Ver <span>Más</span>
                        </Link>
                    </div>
                </div>
            ))}

        </section>
    );
}

export default MuestrasGenerales;
