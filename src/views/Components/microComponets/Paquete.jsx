import { Link } from "react-router-dom";
import { paquetes } from "../../../Constants";

const Paquete = () => {
    return (
        <>
            {
                paquetes.map((paquete) => (
                    <>
                        <div className="PaqueteBasico">
                            <h3>{paquete.nombre}</h3>
                            <b>{paquete.descripcion}</b>
                            <div className="precioAnterior">
                                <s>MX ${paquete.precioAnterior}</s>
                            </div>
                            <h2>MX <span>${paquete.precio}</span></h2>
                            <Link to={`/${paquete.linkMuestras}`} className="MuestrasLink">
                                Muestras
                            </Link>
                        </div>
                    </>
                ))
            }
        </>
    );
}

export default Paquete;
