import Accordion from 'react-bootstrap/Accordion';

function BasicExample() {
    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>¿Quienes Somos?</Accordion.Header>
                <Accordion.Body>
                    SevenDreams es la compañía argentina, líder en distribución de accesorios y dispositivos móviles, con más de 15 años de trayectoria reconocida en el mercado. 
                    <br></br>
                    A través de contratos con los principales fabricantes y distribuidores del sector, SevenDreams ofrece a sus clientes la más amplia gama de accesorios y repuestos para smartphones y todo tipo de celulares móviles, abarcando servicios para todas las marcas, tales como: Samsung, Apple, LG, Motorola, Sony, Microsoft, Huawei, Sky Devices, Nokia, entre otros.
                    <br></br>
                    SevenDreams cuenta con un plantel fijo de especialistas en servicio técnico y recursos logísticos propios para abastecer en forma inmediata las necesidades de todos nuestros clientes.
                </Accordion.Body>
                
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Preguntas Frecuentes</Accordion.Header>
                <Accordion.Body>
                    ¿Dónde puedo recibir mi pedido?
                    <br></br>
                    Realizamos envíos a todo el país.
                    <br></br>
                    <br></br>
                    ¿Cuánto tarda en llegar el pedido?
                    <br></br>
                    El tiempo de entrega dependerá del tipo de envío seleccionado. En general la demora se encuentra entre 3 y 7 días hábiles luego de acreditado el pago.
                    <br></br>
                    <br></br>
                    ¿Cuál es el plazo para realizar un cambio?
                    <br></br>
                    Puedes solicitar un cambio sin cargo hasta 10 días luego de realizada la compra. Luego de ese periódo y hasta 60 dìas corridos posteriores a la compra, los costos de envío correrán a cargo del comprador.
                    <br></br>
                    <br></br>
                    ¿Qué debo hacer si el producto no llega en buen estado?
                    <br></br>
                    Ponte en contacto con nosotros a calidad@oncelular.com.ar y te enviaremos uno nuevo.
                </Accordion.Body>
            </Accordion.Item>
            <br></br>
            <br></br>

        </Accordion>
    );

}

export default BasicExample;