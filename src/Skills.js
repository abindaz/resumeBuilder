import React, { useState } from 'react'
import { Alert, Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { skills } from './store/formAction'
import { selectData } from './store/formReducer'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Skills.css'

const dummySkills = ['React', 'React Native', 'Angular', 'Python', 'Javascript', 'Typescript', 'PHP', 'Laravel', 'Java', 'Android', 'Swift', 'IOS', 'Flutter']

export default () => {
    const initialState = useSelector(selectData)
    const [sugessions, setSugessions] = useState(dummySkills.filter(state => initialState.skills.map(item => item !== state)))
    const [selected, setSelected] = useState(initialState.skills)
    const dispatch = useDispatch()
    const history = useHistory()

    return (
        <div className="skills">
            <Container>
                <h2>Skills</h2>
                <Card className="skills_container">
                    <Row>
                        <Col>
                            <h4>Sugesstions</h4>
                            <Card className="skills_card">
                                {sugessions.map((item, i) => (
                                    <Button
                                        className="skills_sugesstion"
                                        key={i}
                                        onClick={() => {
                                            setSelected(prev => [...prev, sugessions[i]])
                                            setSugessions(prev => prev.filter((state) => (state !== item)))
                                        }}>{item}</Button>
                                ))}
                            </Card>
                        </Col>
                        <Col>
                            <h4>Selected</h4>
                            <Card className="skills_card">
                                {selected.map((item, i) => (
                                    <Alert
                                    className="skills_alert"
                                        variant='primary'
                                        key={i}
                                        onClick={() => { setSelected(prev => prev.filter(state => (state !== prev[i]))) }}
                                    >{item}</Alert>
                                ))}
                            </Card>
                        </Col>
                    </Row>
                </Card>
                <Row>
                    <Col>
                        <Button className="skills_back" onClick={() => history.push("/education")}>Back</Button>
                    </Col>
                    <Col>
                        <Button className="skills_next" onClick={() => {
                            dispatch(skills(selected));
                            history.push("/resume");
                        }}>Next</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}