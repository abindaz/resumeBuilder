import React, { useEffect, useState } from 'react'
import { Container, Form, Row, Col, Button, Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { work } from './store/formAction'
import { selectData } from './store/formReducer'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Work.css'
import ReactDatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

export default () => {
    const initialState = useSelector(selectData)
    const [data, setData] = useState([{ company: '', designation: '', startDate: new Date(), endDate: new Date() }])
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        if (initialState.work.length !== 0) {
            setData(initialState.work)
        }
    }, [initialState.work])

    return (
        <div className="work">
            <Container>
                <h2>Work History</h2>
                {data.map(({ company, designation, startDate, endDate }, i) => {
                    return (
                        <Card className="work_card">
                            <Form key={i}>
                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <Card className="work_group">
                                                <Form.Label>Company</Form.Label>
                                                <Form.Control
                                                    type='text'
                                                    value={company}
                                                    onChange={(event) => setData(prev => {
                                                        prev[i].company = event.target.value
                                                        return [...prev]
                                                    })}
                                                />
                                                <Form.Text>Please enter the company name</Form.Text>
                                            </Card>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Card className="work_group">
                                                <Form.Label>designation</Form.Label>
                                                <Form.Control
                                                    type='text'
                                                    value={designation}
                                                    onChange={(event) => {
                                                        setData(prev => {
                                                            prev[i].designation = event.target.value
                                                            return [...prev]
                                                        })
                                                    }}
                                                />
                                                <Form.Text>Please enter your job role</Form.Text>
                                            </Card>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <Card className="work_group">
                                                <Form.Label>Start Date</Form.Label>
                                                <ReactDatePicker selected={startDate} onChange={date =>
                                                    setData(prev => {
                                                        prev[i].startDate = date
                                                        return [...prev]
                                                    })} />
                                            </Card>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Card className="work_group">
                                                <Form.Label>End Date</Form.Label>
                                                <ReactDatePicker selected={endDate} onChange={date =>
                                                    setData(prev => {
                                                        prev[i].endDate = date
                                                        return [...prev]
                                                    })} />
                                            </Card>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                        </Card>
                    )
                })}
                <Button className="work_addMore" onClick={() => {
                    setData([...data, { company: '', designation: '', startDate: new Date(), endDate: new Date() }])
                }}>Add More</Button>
                <Row>
                    <Col>
                        <Button className="work_back" onClick={() => history.push("/basic")}>Back</Button>
                    </Col>
                    <Col>
                        <Button className="work_next" onClick={() => {
                            dispatch(work(data));
                            history.push("/education");
                        }}>Next</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}