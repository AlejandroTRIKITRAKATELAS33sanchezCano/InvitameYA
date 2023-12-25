import { Link } from "react-router-dom";

const Paquete = () => {
    return (
        <div>
            <h3>Titulo</h3>
            <b>Una Breve Descripción</b>
            <div className="precioAnterior">
                <s>$MX 1000</s>
                <div className="Descuento">
                    <b>AHORRA <span>70%</span></b>
                </div>
            </div>
            <h2>$MX <span>599</span></h2>
            <b>Interactiva</b>
            <Link to="/">
                Muestras
            </Link>
        </div>
    );
}

export default Paquete;
