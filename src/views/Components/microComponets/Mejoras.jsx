import { mejoras } from "../../../Constants";

const Mejoras = () => {
    return (
        <>
        <section className="itemsMejoras">
        {mejoras.map((mejoras) => (
                <div className="mejoras">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox={mejoras.viewBox}><path d={mejoras.d} fill={mejoras.fill} /></svg>
                    <h4>{mejoras.title}</h4>
                </div>
            ))}
        </section>

        </>

    );
}

export default Mejoras;
