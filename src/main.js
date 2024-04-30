import Accordion from 'react-bootstrap/Accordion';
const Main = () => {
    return <main>
      <div id="myCarousel" class="carousel slide mb-6" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class="active" aria-current="true"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class=""></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item">
        <img class="bd-placeholder-img" width="100%" height="600px" src="https://gelsoftspain.com/wp-content/uploads/2023/04/IMG_5361.jpg"></img>
        <div class="container">
          <div class="carousel-caption text-start text-white">
            <h1>Totalmente realista</h1>
            <p><a class="btn btn-lg btn-primary" href="#">Reserva ya</a></p>
          </div>
        </div>
      </div>
      <div class="carousel-item active">
        <img class="bd-placeholder-img" width="100%" height="600px" src="https://adquiereya.com/cdn/shop/products/PISTOLAHIDROGELAK47.png?v=1679194036&width=600"></img>
        <div class="container">
        </div>
      </div>
      <div class="carousel-item">
        <img class="bd-placeholder-img" width="100%" height="600px" src="https://promart.vteximg.com.br/arquivos/ids/7712070-1000-1000/image-7c76bddf226e4f4683c629b1b0c2f006.jpg?v=638374857796500000"></img>
        <div class="container">
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
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
    </main>;
}

export default Main;