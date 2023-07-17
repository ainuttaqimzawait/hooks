import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Col, Row } from "react-bootstrap";
import "./style.css";


const GetData = () => {
    const [input, setInput] = useState('tesla')
    const [data, setData] = useState([]);
    // const [loading, setLoading]= useState(false);
    // const [error, setError]= useState(null);

    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=' + input + '&from=2023-06-17&sortBy=publishedAt&apiKey=c56d3ebd78ad41bda54d2e67785a08ca')
            .then(response => response.json())
            .then(response => {
                console.log('respose:', response)
                setData(response.articles)
            })
            .finally(() => document.querySelector('.loading').innerHTML = "");
    },
        [input]
    )

    const handleInput = (e) => {
        setInput(e.target.value)
    }
    if (input === '') {
        setInput('tesla')
    }
    return (
        <div>
            <input type="text" className="myInput" onChange={handleInput} placeholder="Search for names.."
                title="Type in a name" />
            <Row>
                {data.map((m) => {
                    return <Col md={4}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={m.urlToImage} />
                            <Card.Body>
                                <Card.Title>{m.title}</Card.Title>
                                <Card.Text>{m.description}</Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </Col>
                })}
            </Row>
        </div>
    )
}
export default GetData;