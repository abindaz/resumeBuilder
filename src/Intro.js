import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useHistory } from 'react-router-dom'
import './Intro.css'

export default () => {
    const history = useHistory()
    return (
        <div className="intro">
            <Container>
                <Card className="intro_card">
                    <Card.Title>Let's Create a resume for free</Card.Title>
                </Card>
                <Row>
                    <Col>
                    </Col>
                    <Col>
                        <Button className="intro_next" onClick={() => { history.push("/basic") }}>Next</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}