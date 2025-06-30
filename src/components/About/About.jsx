import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import portrait from '../../assets/images/portrait.jpg';
import CPPlogo from '../../assets/icons/icons8-c-48.svg';
import Javalogo from '../../assets/icons/icons8-java-48.svg';
import Pythonlogo from '../../assets/icons/icons8-python-48.svg';
import SQLlogo from '../../assets/icons/icons8-mysql-48.svg';
import VSlogo from '../../assets/icons/icons8-visual-studio-48.svg';
import Jiralogo from '../../assets/icons/icons8-jira-48.svg';
import './About.css';

const About = () => {
    return (
        <Container className="about-section content-section" style={{paddingTop: "10vh", paddingRight: "6rem", paddingLeft: "6rem"}}>
            <Row className="text-center">
                <Col>
                    <h1>About</h1>
                </Col>
            </Row>
            <Row className="text-center">
                <Col>
                    <Image
                        src={portrait}
                        alt="Portrait of Henry"
                        fluid
                        className="about-image"
                    />
                </Col>
            </Row>
            <Row className="text-center" style={{ paddingTop: "1rem"}}>
                <Col>
                    <p>
                        I'm a Junior Software Engineer with a passion for creative problem solving and continuous learning. When I'm not tackling code, you'll likely find me biking with friends, exploring nature trails, or crafting new music playlists. I'm always looking to expand my skills and make an impact through everyday technology.
                    </p>
                </Col>
            </Row>

            <Row className="skills-section justify-content-center">
                {[CPPlogo, Javalogo, Pythonlogo, SQLlogo, VSlogo, Jiralogo].map((icon, index) => (
                    <Col xs={6} sm={4} md={3} lg={2} key={index} className="d-flex justify-content-center mb-4">
                        <Card className="skill-card">
                            <Card.Img src={icon} alt="Skill Icon" className="icon" />
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default About;
