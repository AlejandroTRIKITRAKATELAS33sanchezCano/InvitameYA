import Carousel from "nuka-carousel"

const MainSection = () => {
    return (
        <Carousel 
            autoplay = {true} 
            autoplayInterval = {3000}
            cellAlign = "center"
            enableKeyboardControls = {true}
            withoutControls = {true}
            >

            <img className="Carrousel_IMG" src="./IMG/Carrousel/1.png" alt="1"/>
            <img className="Carrousel_IMG" src="./IMG/Carrousel/2.png" alt="2"/>
            <img className="Carrousel_IMG" src="./IMG/Carrousel/3.png" alt="3" />
            <img className="Carrousel_IMG" src="./IMG/Carrousel/4.png" alt="4" />
            <img className="Carrousel_IMG" src="./IMG/Carrousel/5.png" alt="5" />

        </Carousel>
    );
}

export default MainSection;
