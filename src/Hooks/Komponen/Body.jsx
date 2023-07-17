import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import GetData from './Data';
const Body = () => {
    return (
        <Container style={{ marginTop: "40px" }}>
            <Row>
                <Col>
                    {/* <input type="text" className="myInput" onChange={e => this.setState({ input: e.target.value }, () => console.log(this.state.input))} placeholder="Search for names.."
                        title="Type in a name" /> */}
                    {/* <button onClick={this.handleSubmit}>search</button> */}

                    <h1 style={{ display: "flex", justifyContent: "center" }}>Berita Hari Ini</h1>
                    <div className="loading">
                        <div className="loader2">Loading..</div>
                    </div>
                </Col>
            </Row>

            <GetData />
        </Container>
    );
}
export default Body;