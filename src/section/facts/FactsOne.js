import React from "react"
import { Container, Row, Col } from "reactstrap"
import { TextBlock, TitleH3 } from "../../components/textBlock/TextBlock"
import { Section } from "../../layout/section/Section"
import ThumbImg1 from '../../images/bg/1.webp'
import ThumbImg2 from '../../images/bg/3.webp'
import ThumbImg3 from '../../images/bg/2.webp'


const FactsOne = (props) => {
    return (
        <Section className={props.className && props.className} id={props.id && props.id} style={{ background: "#EEFFDF" }}>
            <div className="py-5" style={{ background: "#EEFFDF" }}>
                <Container>
                <TitleH3>Blog Articles </TitleH3>
                <div className="m-5"></div>
                    <Row className=" justify-content-start text-start g-gs">
                        <Col md="6" lg="6">
                            <TextBlock className="is-dark ">
                                <div className="blog-des mb-3">
                                    <img src={ThumbImg1} alt="" />
                                    <h4>Let’s Use AI to Protect Workers from Themselves Before it’s Too Late</h4>
                                    <p >When did work stop being just work? When did it become this relentless grind, this marathon of emails, reports, and deadlines that somehow never seem to end? It’s like we’ve all signed up for this twisted game of “Who will die working faster?” And you know what the real kicker is? We’re not even surprised when the stress finally gets the best of us. We just shrug, accept it as the price of admission, and keep pushing. But we don’t have to. Trust me.</p>
                                    <a href="https://onyekaomose.medium.com/lets-use-ai-to-protect-workers-from-themselves-before-it-s-too-late-908c5d5fedc4" target="blank"><button>Read more</button></a>
                                </div>
                            </TextBlock>
                        </Col>
                        <Col lg="6">
                            <TextBlock className="is-dark ">
                                <div className="blog-des mb-3">
                                    <img src={ThumbImg3} alt="" />
                                    <h4>AI & Workplace Ergonomics — Promoting Positive Work Culture</h4>
                                    <p >AI technology has the potential to greatly aid in workplace ergonomics, promoting the health and well-being of employees by leveraging advanced algorithms and data analysis. The positive impact of workplace ergonomics and employee well-being is evident in several key areas.</p>
                                    <a href="https://onyekaomose.medium.com/ai-workplace-ergonomics-promoting-positive-work-culture-fea53bf8ba21" target="blank"><button>Read more</button></a>
                                </div>
                            </TextBlock>
                        </Col>
                        <Col lg="6">
                            <TextBlock className="is-dark ">
                                <div className="blog-des mb-3">
                                    <img src={ThumbImg2} alt="" />
                                    <h4>Building Healthier Companies: AI’s Role in Improving Employee Retention and Reducing Turnover</h4>
                                    <p >In today’s competitive employment market, employee retention has become a crucial issue for organizations across various industries. High levels of turnover, recent studies indicate, can have devastating bottom-line effects via increased recruitment costs and lower morale among remaining employees. With companies competing in the quest for finding new ways to retain talent, AI has emerged as a strong partner in building healthier work environments by establishing AI-driven wellness programs that ensure employee well-being before it gets to the crisis stage.</p>
                                    <a href="https://onyekaomose.medium.com/ais-role-in-improving-employee-retention-and-reducing-turnover-8dc7affb6498" target="blank"><button>Read more</button></a>
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