import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
    return <footer>
        <div class="position-relative p-3 text-center text-muted bg-body border border-dashed rounded-5">

    <svg class="bi mt-1 mb-6" width="100px" height="5px"><use href="#check2-circle"></use></svg>
    <Container>
      <Row className="justify-content-center">
        <Col xs={4}>
          <Toast>
            <Toast.Header>
              <strong className="me-auto">Contáctanos</strong>
              <small><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
</svg></small>
            </Toast.Header>
            <Toast.Body className="d-flex justify-content-center align-items-center">
              .............Llama al 987679087................
         <br></br>Creado por Sanchez Castro Giampiero
            </Toast.Body>
          </Toast>
        </Col>
      </Row>
    </Container>
  </div>
    </footer>;
}

export default Footer;