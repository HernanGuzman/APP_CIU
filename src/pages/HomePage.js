import {Container, Row, Col, Image, Table } from 'react-bootstrap';
import imagenInicio from "../images/CIU.jpg";
function HomePage(){
    return (
        <div className="App">
     

  <Container>
  <Row>
    <Col xs={12} md={12} style={{textAlign:'center'}}>
      <a href="https://unahur.github.io/ciu/" target="_blank"><h2>Materia: Construcción de interfaces de usuario</h2></a>
    </Col>
    
  </Row>
  <Row>
    <Col xs={12} md={12} style={{textAlign:'center'}}>
      <Image src={imagenInicio} rounded style={{width:500, height: 300, marginTop:10}} />
    </Col>
    
  </Row>
  <Row>
    <Col xs={6} md={6} style={{textAlign:'left', paddingTop:40}}>
      <h3>Profesor: Javier Castrillo</h3>
    </Col>
    <Col xs={6} md={6} style={{textAlign: 'right', paddingTop:40}}>
      <h4>Alumno: Hernán Guzmán</h4>
    </Col>
    
  </Row>
  
</Container>

  
    </div>
    );
}

export default HomePage;
