import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Section, SectionHead } from "../../layout/section/Section"
import Img1 from "../../images/1.jpeg"
import Img2 from "../../images/2.jpg"

const Statistic = (props) => {
    return (
        <Section className={props.className && props.className} id={props.id && props.id}>
            <Container>
                <Row>
                    <Col xs="10" sm="9" md="7" xl="6">
                        <SectionHead>
                            <h3 className="title" style={{ color: "#085864" }}>Key Statistics on Workplace Burnout</h3>
                        </SectionHead>
                    </Col>
                </Row>
                <Row className="gx-gs gy-5 justify-center">
                    <Col md="6" lg="6">
                        <img src={Img2} alt="" />
                    </Col>
                    <Col md="6" lg="6">
                        <img src={Img1} alt="" />
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}

export default Statistic