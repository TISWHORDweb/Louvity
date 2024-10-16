import React from "react"
import { Container, Row, Col, Card } from "reactstrap"
import { Service, ServiceIcon, ServiceText } from "../../components/service/Service"
import { Section, SectionContant } from "../../layout/section/Section"

const ServiceThree = (props) => {
    return (
        <Section className={props.className && props.className} id={props.id && props.id}>
            <Container>
                <SectionContant>
                    <Row className="justify-content-start text-start g-gs">
                        <Col md="6" lg="4">
                            <Card className="card-shadow">
                                <div className="card-inner card-inner-lg" style={{background:"#EEFFDF"}}>
                                    <Service>
                                        <ServiceIcon className="service-icon styled-icon styled-icon-6x text-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                                                <circle cx="24" cy="24" r="22" stroke="#4A90E2" stroke-width="2" fill="none" />
                                                <path d="M12 24h24" stroke="#4A90E2" stroke-width="2" />
                                                <path d="M24 12v24" stroke="#4A90E2" stroke-width="2" />
                                                <path d="M20 20c-1.5 0-2.5 1-2.5 2s1 2 2.5 2 2.5-1 2.5-2-1-2-2.5-2z" fill="#4A90E2" />
                                            </svg>
                                        </ServiceIcon>
                                        <ServiceText>
                                            <h4 className="title" style={{color:"#085864"}}>AIPowered Burnout Analytics</h4>
                                            <p style={{color:"#000"}}>Employee burnout is a growing concern in today’s fast-paced corporate world. Our AI-Powered Burnout Analytics analyzes workforce patterns and detects early signs of burnout, providing HR teams with actionable insights to foster a healthier workplace culture.</p>
                                        </ServiceText>
                                    </Service>
                                </div>
                            </Card>
                        </Col>
                        <Col md="6" lg="4">
                            <Card className="card-shadow">
                                <div className="card-inner card-inner-lg" style={{background:"#EEFFDF"}}>
                                    <Service>
                                        <ServiceIcon className="service-icon styled-icon styled-icon-6x text-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                                                <circle cx="24" cy="24" r="22" stroke="#7ED321" stroke-width="2" fill="none" />
                                                <path d="M24 12v24M12 24h24" stroke="#7ED321" stroke-width="2" />
                                                <path d="M20 15c0 5 4 5 4 0" stroke="#7ED321" stroke-width="2" fill="none" />
                                            </svg>
                                        </ServiceIcon>
                                        <ServiceText>
                                            <h4 className="title" style={{color:"#085864"}}>Wellness Monitoring</h4>
                                            <p style={{color:"#000"}}>Our Wellness Monitoring tools track employee well-being through real-time feedback and health metrics. By integrating with existing HR systems, we offer a comprehensive view of employee health, enabling tailored wellness programs that promote mental and physical well-being.</p>
                                        </ServiceText>
                                    </Service>
                                </div>
                            </Card>
                        </Col>
                        <Col md="12" lg="4">
                            <Card className="card-shadow">
                                <div className="card-inner card-inner-lg"style={{background:"#EEFFDF"}}>
                                    <Service>
                                        <ServiceIcon className="service-icon styled-icon styled-icon-6x text-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                                                <circle cx="24" cy="24" r="22" stroke="#F5A623" stroke-width="2" fill="none" />
                                                <path d="M12 24l10-10 8 8 10-10" stroke="#F5A623" stroke-width="2" fill="none" />
                                                <path d="M12 24h24" stroke="#F5A623" stroke-width="2" fill="none" />
                                            </svg>
                                        </ServiceIcon>
                                        <ServiceText>
                                            <h4 className="title" style={{color:"#085864"}}>Predictive Insights for HR</h4>
                                            <p style={{color:"#000"}}>Transform your HR operations with our Predictive Insights. Utilizing advanced AI technology, we deliver actionable predictions that help HR anticipate burnout and implement effective interventions, enhancing employee satisfaction and retention.</p>
                                        </ServiceText>
                                    </Service>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </SectionContant>
            </Container>
        </Section>
    )
}

export default ServiceThree
