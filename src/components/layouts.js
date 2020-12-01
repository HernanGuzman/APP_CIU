import {Nav, Navbar, Image } from 'react-bootstrap';

import imagenUNAHUR from "../images/logo-unahur.png";
//COMO SOLO DEVUELVO UN COMPONENTE SIMPLE SOLO SE RETORNO
const Layouts = ({children}) => (
    <>
    <Navbar bg="primary" variant="dark">
<Navbar.Brand href="/">Inicio</Navbar.Brand>
<Nav className="mr-auto">
  <Nav.Link href="/marcas">Marca</Nav.Link>
  <Nav.Link href="/provincias">Provincias</Nav.Link>
  
  
</Nav>
<div style={{textAlign:'right'}}>
<a href="http://www.unahur.edu.ar/" target="_blank"><Image src={imagenUNAHUR} style={{textAlign:'right', width:150, height:40, marginRight:10}} rounded  /></a>
</div>

</Navbar>

<div>
{children}
</div>
    </>
    
);

export default Layouts;

