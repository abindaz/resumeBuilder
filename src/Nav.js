import React, { useEffect, useState } from 'react'
import { Breadcrumb, Col, Row } from 'react-bootstrap'
import { useHistory, useLocation } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Nav.css'

export default () => {
    const [selected, setSelected] = useState('intro')
    const history = useHistory()
    const location = useLocation()

    useEffect(() => {
        setSelected(location.pathname)
    }, [location.pathname])

    return (
        <div className="nav">
            <Row className='nav_row'>
                <Col>
                    <h1 className="nav_title">Resume Builder</h1>
                </Col>
                <Breadcrumb>
                    <Breadcrumb.Item active={selected === '/'} onClick={() => {
                        history.push("/")
                    }}
                    >Introduction</Breadcrumb.Item>
                    <Breadcrumb.Item active={selected === '/basic'} onClick={() => {
                        history.push("/basic")
                    }}>Basic Details</Breadcrumb.Item>
                    <Breadcrumb.Item active={selected === '/work'} onClick={() => {
                        history.push("/work")
                    }}>Work History</Breadcrumb.Item>
                    <Breadcrumb.Item active={selected === '/education'} onClick={() => {
                        history.push("/education")
                    }}>Education</Breadcrumb.Item>
                    <Breadcrumb.Item active={selected === '/skills'} onClick={() => {
                        history.push("/skills")
                    }}>Skills</Breadcrumb.Item>
                    <Breadcrumb.Item active={selected === '/resume'} onClick={() => {
                        history.push("/resume")
                    }}>Resume</Breadcrumb.Item>
                </Breadcrumb >
            </Row >
        </div >
    )
}