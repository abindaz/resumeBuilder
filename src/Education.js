import React, { useEffect, useState } from 'react'
import { Container, Form, Row, Col, Button, Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { education } from './store/formAction'
import { selectData } from './store/formReducer'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Education.css'
import ReactDatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

export default () => {
    const initialState = useSelector(selectData)
    const [data, setData] = useState([{ institution: '', digree: '', startDate: new Date(), endDate: new Date() }])
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        if (initialState.education.length !== 0) {
            setData(initialState.education)
        }
    }, [initialState.education])

    return (
        <div className="education">
            <Container>
                <h2>Education History</h2>
                {data.map(({ institution, digree, startDate, endDate }, i) => (
                    <Card className="education_card">
                        <Form key={i}>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Card className="education_group">
                                            <Form.Label>Institution</Form.Label>
                                            <Form.Control
                                                type='text'
                                                value={institution}
                                                onChange={(event) => {
                                                    setData(prev => {
                                                        prev[i].institution = event.target.value
                                                        return [...prev]
                                                    })
                                                }}
                                            />
                                            <Form.Text>Please enter the name of institution</Form.Text>
                                        </Card>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Card className="education_group">
                                            <Form.Label>Digree</Form.Label>
                                            <Form.Control
                                                type='text'
                                                value={digree}
                                                onChange={(event) => {
                                                    setData(prev => {
                                                        prev[i].digree = event.target.value
                                                        return [...prev]
                                                    })
                                                }}
                                            />
                                            <Form.Text>Please enter the digree</Form.Text>
                                        </Card>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Card className="education_group">
                                            <Form.Label>Start Date</Form.Label>
                                            <ReactDatePicker
                                                selected={startDate}
                                                onChange={(date) => {
                                                    setData(prev => {
                                                        prev[i].startDate = date
                                                        return [...prev]
                                                    })
                                                }}
                                            />
                                        </Card>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Card className="education_group">
                                            <Form.Label>End Date</Form.Label>
                                            <ReactDatePicker
                                                selected={endDate}
                                                onChange={(date) => {
                                                    setData(prev => {
                                                        prev[i].endDate = date
                                                        return [...prev]
                                                    })
                                                }}
                                            />
                                        </Card>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                    </Card>
                ))}
                <Button className="education_addMore" onClick={() => {
                    setData(prev => [...prev, { institution: '', digree: '', startDate: new Date(), endDate: new Date() }])
                }}>Add More</Button>
                <Row>
                    <Col>
                        <Button className="education_back" onClick={() => history.push("/work")}>Back</Button>
                    </Col>
                    <Col>
                        <Button className="education_next" onClick={() => {
                            dispatch(education(data));
                            history.push("/skills");
                        }}>Next</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}