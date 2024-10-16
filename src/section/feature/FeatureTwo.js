import React from "react"
import { Container, Col, Row } from "reactstrap"
import { ImageBlock } from "../../components/images/Images"
import { Section } from "../../layout/section/Section"
import { TextBlock, TitleH3 } from "../../components/textBlock/TextBlock"
import { Service, ServiceIcon, ServiceText } from "../../components/service/Service"
import { Sharing, Vision } from "../../components/svg/Icon"
import ThumbImg2 from '../../images/gfx/onyeka.jpg'

const FeatureTwoAlt = (props) => {
    return (
        <Section className={props.className && props.className} id={props.id && props.id}>
            <Container>
                <Row className="flex-row-reverse align-items-center justify-content-between g-gs mb-1" style={{ color: "#000" }}>
                    <Col lg="5">
                        <ImageBlock className="img-block-s3 right p-4">
                            <img src={ThumbImg2} alt="Thumb img" />
                        </ImageBlock>
                    </Col>
                    <Col lg="7">
                        <TextBlock>
                            <TitleH3>About Us</TitleH3>
                            <p><b>Onyeka Omose</b> is the visionary founder of Louvity, bringing a wealth of expertise in Human Resource Management, employee wellness, and organizational development. With a Master’s degree in Strategic Human Resources from the University of Denver and extensive experience across diverse industries, Onyeka is passionate about transforming how companies address corporate burnout and employee well-being. Her leadership at Louvity LLC leverages AI-driven predictive analytics to create innovative solutions for improving employee engagement, retention, and overall workplace satisfaction.</p>
                        </TextBlock>
                    </Col>
                </Row>
                <p style={{ color: "#000" }}>Our mission is to revolutionize corporate wellness by leveraging AI-driven predictive analytics to prevent burnout, enhance employee well-being, and empower organizations with actionable insights for a healthier, more productive workforce.</p>

                <TextBlock>
                    <Service className="service-s3">
                        <ServiceIcon className="styled-icon styled-icon-s3 text-primary">
                            <Vision />
                        </ServiceIcon>
                        <ServiceText>
                            <h4 className="title" style={{ color: "#085864" }}>Vision</h4>
                            <p style={{ color: "#000" }}>To be the leading provider of innovative wellness solutions that foster a thriving work environment where every employee can flourish, contributing to the overall success and sustainability of organizations.</p>
                        </ServiceText>
                    </Service>
                </TextBlock>

                <TextBlock>
                    <Service className="service-s3">
                        <ServiceIcon className="styled-icon styled-icon-s3 text-success">
                            <Sharing />
                        </ServiceIcon>
                        <ServiceText>
                            <h4 className="title" style={{ color: "#085864" }}>Core Values</h4>
                            <ul style={{ color: "#000" }}>
                                <li>- <b>Empathy</b>: We prioritize understanding the needs and challenges of employees and organizations alike.</li>
                                <li>- <b>Innovation</b>: We embrace cutting-edge technology to deliver effective, data-driven solutions for corporate wellness.</li>
                                <li>- <b>Collaboration</b>: We believe in working together with organizations to create tailored wellness programs that resonate with their workforce.</li>
                                <li>- <b>Integrity</b>: We maintain transparency and ethical practices in all our interactions and services.</li>
                                <li>- <b>Well-being</b>: We are committed to promoting the mental and physical health of employees, recognizing that their well-being drives organizational success.</li>
                            </ul>
                        </ServiceText>
                    </Service>
                </TextBlock>

            </Container>
        </Section>
    )
}


export { FeatureTwoAlt }
