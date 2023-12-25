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
                            <th>Invitación</th>
                            <th>JPG o PNG</th>
                            <th>PDF</th>
                            <th>Video</th>
                            <th>Web</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Paquete 1</td>
                            <td><span class="checkmark"></span></td>
                            <td></td>
                            <td><span class="checkmark"></span></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Paquete 2</td>
                            <td></td>
                            <td><span class="checkmark"></span></td>
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
