import React from "react"
import { Container, Row, Col, Card } from "reactstrap"
import { Service, ServiceIcon, ServiceText } from "../../components/service/Service"
import { Levels, Target, PencilCase, Vision, Analytics } from "../../components/svg/Icon"
import { Section, SectionContant } from "../../layout/section/Section"

const ServiceThree = (props) =>{
    return(
        <Section className={props.className && props.className} id={props.id && props.id}>
            <Container>
                <SectionContant>
                    <Row className="justify-content-start text-start g-gs">
                        <Col md="6" lg="4">
                            <Card className="card-shadow">
                                <div className="card-inner card-inner-lg">
                                    <Service>
                                        <ServiceIcon className="service-icon styled-icon styled-icon-6x text-primary">
                                            <Levels />
                                        </ServiceIcon>
                                        <ServiceText>
                                            <h4 className="title">Business Process Optimization Tools</h4>
                                            <p>Streamline operations and improve efficiency with tools that automate routine tasks and enhance workflow management.</p>
                                        </ServiceText>
                                    </Service>
                                </div>
                            </Card>
                        </Col>
                        <Col md="6" lg="4">
                            <Card className="card-shadow">
                                <div className="card-inner card-inner-lg">
                                    <Service>
                                        <ServiceIcon className="service-icon styled-icon styled-icon-6x text-primary">
                                            <PencilCase />
                                        </ServiceIcon>
                                        <ServiceText>
                                            <h4 className="title">Financial Management Solutions</h4>
                                            <p>Simplify budgeting and financial forecasting with user-friendly platforms that provide real-time financial insights.</p>
                                        </ServiceText>
                                    </Service>
                                </div>
                            </Card>
                        </Col>
                        <Col md="12" lg="4">
                            <Card className="card-shadow">
                                <div className="card-inner card-inner-lg">
                                    <Service>
                                        <ServiceIcon className="service-icon styled-icon styled-icon-6x text-primary">
                                            <Analytics />
                                        </ServiceIcon>
                                        <ServiceText>
                                            <h4 className="title">Data Analytics Services</h4>
                                            <p>Empower decision-making with data-driven insights that help SMEs track performance, identify trends, and optimize strategies.</p>
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
