import React from "react"
import { Container, Row, Col, Card } from "reactstrap"
import { Paragraph, TextBlock, TitleH2 } from "../../components/textBlock/TextBlock"
import { Ovm } from "../../layout/ovm/Ovm"
import { Section } from "../../layout/section/Section"

const FactsOne = (props) =>{
    return(
        <Section className={props.className && props.className} id={props.id && props.id}>
            <Container>
                <Row className="g-gs align-items-center">
                    <Col lg="5">
                        <TextBlock className="is-dark pe-xl-5">
                            <TitleH2>Our Mission</TitleH2>
                            <Paragraph className="lead">To provide innovative and customized digital solutions that empower small and medium-sized enterprises (SMEs) to achieve operational excellence and enhance their competitive edge in the marketplace.</Paragraph>
                        </TextBlock>
                    </Col>
                    <Col lg="7">
                        <Row className="justify-center text-center g-gs">
                            <Col sm="4" xs="6">
                                <Card className="card-full round-xl">
                                    <div className="card-inner card-inner-md">
                                        <div className="h1 fw-bold text-purple">7 +</div>
                                        <div className="h6 text-base">Years<br/> in business</div>
                                    </div>
                                </Card>
                            </Col> 
                            <Col sm="4" xs="6">
                                <Card className="card-full round-xl">
                                    <div className="card-inner card-inner-md">
                                        <div className="h1 fw-bold text-success">6 +</div>
                                        <div className="h6 text-base">Analytics <br/> Concept</div>
                                    </div>
                                </Card>
                            </Col>
                            <Col sm="4" xs="6">
                                <Card className="card-full round-xl">
                                    <div className="card-inner card-inner-md">
                                        <div className="h1 fw-bold text-pink">28 +</div>
                                        <div className="h6 text-base">Business <br/> Promoted</div>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Ovm className="shape-b shape-cover" />
        </Section>
    )
}

export default FactsOne