import Paquete from "./microComponets/Paquete";

const Paquetes = () => {
    return (
        <section className='PaquetesGeneral'>
            <h2>¡Descubre los Paquetes Perfectos para Ti!</h2>
            <div className="Paquetes">
                <Paquete />
            </div>
            <div className="Quetienen">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Basico</th>
                            <th>Plus</th>
                            <th>Premium</th>
                            <th>Deluxe</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                <td>Logo</td>
                <td><span class="checkmark"></span></td>
                <td><span class="checkmark"></span></td>
                <td><span class="checkmark"></span></td>
                <td><span class="checkmark"></span></td>
            </tr>
            <tr>
                <td>Envios Ilimitados</td>
                <td><span class="checkmark"></span></td>
                <td><span class="checkmark"></span></td>
                <td><span class="checkmark"></span></td>
                <td><span class="checkmark"></span></td>
            </tr>
            <tr>
                <td>Ubicación con GPS</td>
                <td></td>
                <td><span class="checkmark"></span></td>
                <td><span class="checkmark"></span></td>
                <td><span class="checkmark"></span></td>
            </tr>
            <tr>
                <td>Calendario</td>
                <td></td>
                <td><span class="checkmark"></span></td>
                <td><span class="checkmark"></span></td>
                <td><span class="checkmark"></span></td>
            </tr>
            <tr>
                <td>Itinerario</td>
                <td></td>
                <td><span class="checkmark"></span></td>
                <td><span class="checkmark"></span></td>
                <td><span class="checkmark"></span></td>
            </tr>
            <tr>
                <td>Hospedaje</td>
                <td></td>
                <td><span class="checkmark"></span></td>
                <td><span class="checkmark"></span></td>
                <td><span class="checkmark"></span></td>
            </tr>
            <tr>
                <td>DressCode</td>
                <td></td>
                <td><span class="checkmark"></span></td>
                <td><span class="checkmark"></span></td>
                <td><span class="checkmark"></span></td>
            </tr>
            <tr>
                <td>Mesa de regalos</td>
                <td></td>
                <td><span class="checkmark"></span></td>
                <td><span class="checkmark"></span></td>
                <td><span class="checkmark"></span></td>
            </tr>
            <tr>
                <td>Link A redes Sociales</td>
                <td></td>
                <td><span class="checkmark"></span></td>
                <td><span class="checkmark"></span></td>
                <td><span class="checkmark"></span></td>
            </tr>
            <tr>
                <td>Musíca</td>
                <td></td>
                <td></td>
                <td><span class="checkmark"></span></td>
                <td><span class="checkmark"></span></td>
            </tr>
            <tr>
                <td>Video Presentación</td>
                <td></td>
                <td></td>
                <td><span class="checkmark"></span></td>
                <td><span class="checkmark"></span></td>
            </tr>
            <tr>
                <td>Galería de fotos</td>
                <td></td>
                <td></td>
                <td></td>
                <td><span class="checkmark"></span></td>
            </tr>
            <tr>
                <td>Personalizada</td>
                <td></td>
                <td></td>
                <td></td>
                <td><span class="checkmark"></span></td>
            </tr>
            
            <tr>
                <td>Confirmación de asitencia</td>
                <td></td>
                <td></td>
                <td></td>
                <td><span class="checkmark"></span></td>
            </tr>
            <tr>
                <td>Cuenta Regresiva</td>
                <td></td> 
                <td></td>
                <td></td>
                <td><span class="checkmark"></span></td>
            </tr>
            <tr>
                <td>Trivia</td>
                <td></td>
                <td></td>
                <td></td>
                <td><span class="checkmark"></span></td>
            </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default Paquetes;
