import React from 'react'
import { Alert, Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { selectData } from './store/formReducer'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Resume.css'
import { useHistory } from 'react-router-dom'

export default () => {
    const data = useSelector(selectData)
    const history = useHistory()

    return (
        <div className="resume">
            <h2>Resume</h2>
            <Container>
                <Card>
                    <Card.Body>
                        <h3 className="resume_title">{`${data.firstName} ${data.lastName}`}</h3>
                        <Row>
                            <Col>
                                <Card.Subtitle>Experiance</Card.Subtitle>
                                {data.work.map(({ company, designation, startDate, endDate }, i) => {
                                    const workDurationYear = endDate.getFullYear() - startDate.getFullYear()
                                    const workDurationMonth = endDate.getMonth() - startDate.getMonth()

                                    return (
                                        <Card key={i} className="resume_exCard">
                                            <Card.Title>{designation}</Card.Title>
                                            <Card.Subtitle>{company}</Card.Subtitle>
                                            <Card.Text>{`Duration: ${workDurationYear !== 0 && workDurationYear}${workDurationMonth !== 0 && '.'}${workDurationMonth !== 0 && Math.abs(workDurationMonth)} ${workDurationYear > 1 ? `Years` : `Year`}`}</Card.Text>
                                        </Card>
                                    )
                                })}
                            </Col>
                            <Col>
                                <Card.Subtitle>Education</Card.Subtitle>
                                {data.education.map(({ institution, digree, startDate, endDate }, i) => {
                                    const educationDurationYear = endDate.getFullYear() - startDate.getFullYear()
                                    const educationDurationMonth = endDate.getMonth() - startDate.getMonth()

                                    return (
                                        <Card key={i} className="resume_exCard">
                                            <Card.Title>{digree}</Card.Title>
                                            <Card.Subtitle>{institution}</Card.Subtitle>
                                            <Card.Text>{`Duration: ${educationDurationYear !== 0 && educationDurationYear}${educationDurationMonth !== 0 && '.'}${educationDurationMonth !== 0 && Math.abs(educationDurationMonth)} ${educationDurationYear > 1 ? `Years` : `Year`}`}</Card.Text>
                                        </Card>
                                    )
                                })}
                            </Col>
                        </Row>
                        <Card.Subtitle>Skills</Card.Subtitle>
                        <Card className="resume_skillCard">
                            {data.skills.map((item, i) => (
                                <Alert variant="secondary" key={i}>{item}</Alert>
                            ))}
                        </Card>
                        <Card.Subtitle>About</Card.Subtitle>
                        <Card className="resume_about">
                            <Card.Text>{data.email}</Card.Text>
                            <Card.Text>{data.phone}</Card.Text>
                            <Card.Text>{data.address}</Card.Text>
                        </Card>
                    </Card.Body>
                </Card>
                <Row>
                    <Col>
                        <Button className="resume_back" onClick={() => history.push("/skills")}>Back</Button>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}