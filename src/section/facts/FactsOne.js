import React from "react"
import { Container, Row, Col } from "reactstrap"
import { TextBlock, TitleH3 } from "../../components/textBlock/TextBlock"
import { Section } from "../../layout/section/Section"
import ThumbImg1 from '../../images/bg/pexels-googledeepmind-18069423.jpg'
import ThumbImg2 from '../../images/bg/pexels-googledeepmind-18069495.jpg'
import ThumbImg3 from '../../images/bg/pexels-polina-tankilevitch-4723293.jpg'
import ThumbImg4 from '../../images/bg/unnamed.png'


const FactsOne = (props) => {
    return (
        <Section className={props.className && props.className} id={props.id && props.id} style={{ background: "#EEFFDF" }}>
            <div className="py-5" style={{ background: "#EEFFDF" }}>
                <Container>
                <TitleH3>Blog Articles </TitleH3>
                <div className="m-5"></div>
                    <Row className=" align-items-center">
                        <Col lg="5">
                            <TextBlock className="is-dark pe-xl-5">
                                <div className="blog-des mb-3">
                                    <img src={ThumbImg1} alt="" />
                                    <h4>The Role of AI in Enhancing Employee Well-Being</h4>
                                    <p >Artificial Intelligence is transforming the landscape of corporate wellness, offering innovative solutions to enhance employee well-being.</p>
                                    <button>Read more</button>
                                </div>
                            </TextBlock>
                        </Col>
                        <Col lg="5">
                            <TextBlock className="is-dark pe-xl-5">
                                <div className="blog-des mb-3">
                                    <img src={ThumbImg2} alt="" />
                                    <h4>Creating a Culture of Wellness: Best Practices for Organizations</h4>
                                    <p >A strong culture of wellness is essential for employee satisfaction and organizational success. Here are best practices to cultivate this culture.</p>
                                    <button>Read more</button>
                                </div>
                            </TextBlock>
                        </Col>
                        <Col lg="5">
                            <TextBlock className="is-dark pe-xl-5">
                                <div className="blog-des mb-3">
                                    <img src={ThumbImg3} alt="" />
                                    <h4> Understanding Burnout: Signs, Symptoms, and Solutions</h4>
                                    <p >Burnout is a significant challenge in today’s fast-paced work environment. Understanding its signs and symptoms is the first step toward prevention and recovery.</p>
                                    <button>Read more</button>
                                </div>
                            </TextBlock>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Section>
    )
}

export default FactsOne