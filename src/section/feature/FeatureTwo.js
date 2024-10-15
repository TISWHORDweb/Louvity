import React from "react"
import { Container, Col, Row } from "reactstrap"
import { ImageBlock } from "../../components/images/Images"
import { Section } from "../../layout/section/Section"
import { TextBlock, TitleH2 } from "../../components/textBlock/TextBlock"
import { Service, ServiceIcon, ServiceText } from "../../components/service/Service"
import { Sharing, Vision } from "../../components/svg/Icon"
import ThumbImg2 from '../../images/gfx/image.jpg'

const FeatureTwoAlt = (props) => {
    return (
        <Section className={props.className && props.className} id={props.id && props.id}>
            <Container>
                <Row className="flex-row-reverse align-items-center justify-content-between g-gs mb-6">
                    <Col lg="4">
                        <ImageBlock className="img-block-s1 right p-4">
                            <img src={ThumbImg2} alt="Thumb img" />
                        </ImageBlock>
                    </Col>
                    <Col lg="6">
                        <TextBlock>
                            <TitleH2>About Ijao Business Venture</TitleH2>
                            <p>The journey of IJAO Business Venture began with a passionate vision from the founder, Ruth Oladimeji Abidemi. With a background in Finance, and Business and Technology, she has dedicated her career to supporting businesses in achieving their digital transformation goals. Drawing from her extensive experience in working with SMEs, financial analysis, or technology development], Ruth Oladimeji recognized the challenges faced by many small businesses in adopting technology to streamline operations and enhance growth. This insight sparked the creation of IJAO Business Venture, aimed at providing customized digital solutions that empower SMEs to optimize their processes, enhance customer engagement, and drive revenue growth.</p>
                            <div className="g-gs">
                                <Service className="service-s3">
                                    <ServiceIcon className="styled-icon styled-icon-s3 text-primary">
                                        <Vision />
                                    </ServiceIcon>
                                    <ServiceText>
                                        <h4 className="title">Customer Relationship Management (CRM) Systems</h4>
                                        <p>Manage customer interactions effectively to improve satisfaction and loyalty through personalized engagement.</p>
                                    </ServiceText>
                                </Service>
                                <Service className="service-s3">
                                    <ServiceIcon className="styled-icon styled-icon-s3 text-success">
                                        <Sharing />
                                    </ServiceIcon>
                                    <ServiceText>
                                        <h4 className="title">E-commerce Solutions</h4>
                                        <p>Establish a strong online presence and facilitate seamless transactions, allowing SMEs to reach a broader audience and increase sales.</p>

                                    </ServiceText>
                                </Service>
                            </div>
                        </TextBlock>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}


export { FeatureTwoAlt }
