import Accordion from 'react-bootstrap/Accordion';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from "react-router-dom";
import Hidrogel from './data/hidrogel.json'

const feather = require('feather-icons');

setTimeout(() => {
    feather.replace();
}, 1000);



const Main = () => {
    const navigate = useNavigate();

    const handleClick = (slug) => {
        navigate("/detalle/" + slug);
    }

    return <main>
        <Carousel>
            {
                Hidrogel.map(it => {
                    return (<Carousel.Item onClick={(e) => {
                        e.preventDefault(); handleClick(it.slug)
                    }}>
                        <img className='w-100 dark-image' src={it.picture}></img>
                        <Carousel.Caption>
                            <h3>{it.name}</h3>
                            <button className="btn btn-primary" >Ver detalle</button>
                        </Carousel.Caption>
                    </Carousel.Item>);
                })
            }
        </Carousel>
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Deseo saber más</Accordion.Header>
        <Accordion.Body>
        🚨LLEGO LA DIVERSIÓN PARA LOS GRANDES Y CHICOS!🚨 ⭐No 
        hay nada como la aventura de correr con tus amigos, probar tus habilidades 
        y sobre todo tener la seguridad de estar usando un juguete que no causara d
        año a personas u objetos. 
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    </main >;
}

export default Main;