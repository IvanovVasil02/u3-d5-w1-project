import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ContainerExample(props) {
  return (
    <Container fluid className={props.className}>
      <Row>
        <Col className='d-flex align-items-center'>
          <h1 className='mb-md-3 flex-nowrap'>TV Shows</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default ContainerExample;
