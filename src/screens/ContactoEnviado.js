import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function HeaderAndFooterExample() {
    return (
        <Card className="text-center">
            <Card.Body>
                <Card.Title>¡Enviado con exito!</Card.Title>
                <Card.Text>
                    Nos pondremos en contacto con vos lo antes posible.
                </Card.Text>
                <Button variant="primary" href="/Home">Volver a la Home</Button>
            </Card.Body>
            <br></br>
            <br></br>
        </Card>
    );
}

export default HeaderAndFooterExample;