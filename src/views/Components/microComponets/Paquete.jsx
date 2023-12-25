import { Link } from "react-router-dom";

const Paquete = () => {
    return (
        <div className="PaqueteBasico">
            <h3>Basico</h3>
            <b>Lorem ipsum dolor sit amet.</b>
            <div className="precioAnterior">
                <s>MX $1000</s>
            </div>
            <h2>$MX <span>599</span></h2>
            <Link to="/" className="MuestrasLink">
                Muestras
            </Link>
        </div>
    );
}

export default Paquete;
