import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useDispatch } from 'react-redux'
import { basic } from './store/formAction'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectData } from './store/formReducer'
import './Basic.css'

export default () => {
    const initialState = useSelector(selectData)
    const [fName, setFName] = useState(initialState.firstName)
    const [lName, setLName] = useState(initialState.lastName)
    const [email, setEmail] = useState(initialState.email)
    const [phone, setPhone] = useState(initialState.phone)
    const [address, setAddress] = useState(initialState.address)
    const dispatch = useDispatch()
    const history = useHistory()

    return (
        <div className="basic">
            <Container>
                <h2>Basic Details</h2>
                <Card className="basic_card">
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Card className="basic_group">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type='text' value={fName} onChange={(event) => setFName(event.target.value)} />
                                        <Form.Text>Please enter your first name</Form.Text>
                                    </Card>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Card className="basic_group">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type='text' value={lName} onChange={(event) => setLName(event.target.value)} />
                                        <Form.Text>Please enter your last name</Form.Text>
                                    </Card>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Card className="basic_group">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type='email' value={email} onChange={(event) => setEmail(event.target.value)} />
                                        <Form.Text>Please enter your email</Form.Text>
                                    </Card>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Card className="basic_group">
                                        <Form.Label>Phone</Form.Label>
                                        <Form.Control type='text' value={phone} onChange={(event) => setPhone(event.target.value)} />
                                        <Form.Text>Please enter your phone number</Form.Text>
                                    </Card>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group>
                            <Card className="basic_group">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type='text' value={address} onChange={(event) => setAddress(event.target.value)} />
                                <Form.Text>Please enter your current address</Form.Text>
                            </Card>
                        </Form.Group>
                    </Form>
                </Card>
                <Row>
                    <Col>
                        <Button className="basic_back" onClick={() => { history.push("/") }}>Back</Button>
                    </Col>
                    <Col>
                        <Button className="basic_next" onClick={() => {
                            dispatch(basic({ fName, lName, email, phone, address }));
                            history.push("/work");
                        }}>Next</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}