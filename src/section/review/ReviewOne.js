import React from "react"
import { Container, Row, Col } from "reactstrap"
import Rating from "../../components/rating/Rating"
import { RatingText, Review, ReviewContent, ReviewRating, ReviewText } from "../../components/review/Review"
import { Section, SectionHead } from "../../layout/section/Section"
import {ReviewOneIcon} from './ReviewData'
import User from "../../components/user/User"
import UserIcon from "../../images/219983.png"

const ReviewOne = (props) =>{
    return(
        <Section className={props.className && props.className} id={props.id && props.id}>
            <Container>
                <Row>
                    <Col xs="10" sm="9" md="7" xl="6">
                        <SectionHead>
                            <h2 className="title">Testimonials</h2>
                        </SectionHead>
                    </Col>
                </Row>
                <Row className="gx-gs gy-5 justify-center">
                    <Col md="12" lg="12">
                        <Review>
                            <ReviewContent className="card card-shadow round-xl">
                                <div className="card-inner card-inner-lg">
                                <User className="review-user user-s1" src={UserIcon} name="Amanda Harris" role="CEO of Harris Tech Solutions" /> <br />
                                    <ReviewRating className="rating rating-sm">
                                        <Rating data={ReviewOneIcon} />  
                                        <RatingText>(4.5/5)</RatingText>  
                                    </ReviewRating> 
                                    <ReviewText>
                                        <p>Working with Ijao Business Venture has been a pivotal turning point for Harris Tech Solutions. Before partnering with them, we struggled to implement a cohesive digital strategy that would allow us to scale effectively. The team at Ijao provided customized digital transformation solutions, including cloud computing integration and advanced data analytics, that drastically improved our operational efficiency. We’ve experienced a 40% increase in productivity, and our ability to deliver projects on time has significantly improved. Their expertise in technology and scalability has enabled us to streamline our workflows and handle more clients, allowing us to grow our business faster than we ever imagined. Ijao Business Venture's strategic approach is unlike anything we've experienced. Their solutions aren’t just about technology—they're about driving real business results.</p>
                                    </ReviewText>   
                                </div>
                            </ReviewContent>
                        </Review>
                    </Col>
                    <Col md="12" lg="12">
                        <Review>
                            <ReviewContent className="card card-shadow round-xl">
                                <div className="card-inner card-inner-lg">
                                <User className="review-user user-s1" src={UserIcon} name="Mark Dunlap" role="Owner of Dunlap Manufacturing" /> <br />
                                    <ReviewRating className="rating rating-sm">
                                        <Rating data={ReviewOneIcon} />  
                                        <RatingText>(4.5/5)</RatingText>  
                                    </ReviewRating> 
                                    <ReviewText>
                                        <p>Ijao Business Venture has been a game-changer for my company. As a small manufacturer, we were finding it increasingly difficult to keep up with the fast pace of digital transformation. Their team came in and implemented AI-based solutions and automated many of our outdated processes, which helped us reduce costs and improve our production cycle by 25%. Beyond that, they introduced us to new software that allowed us to manage customer orders and inventory more effectively. Not only have we seen an increase in customer satisfaction, but we’ve also been able to expand our reach to new markets due to the efficiencies we’ve gained. I cannot overstate how beneficial Ijao Business Venture’s solutions have been to our growth. Thanks to their efforts, we are now looking to hire additional staff, further boosting our capacity to serve more clients.</p>
                                    </ReviewText>   
                                </div>
                            </ReviewContent>
                        </Review>
                    </Col>
                    <Col md="12" lg="12">
                        <Review>
                            <ReviewContent className="card card-shadow round-xl">
                                <div className="card-inner card-inner-lg">
                                <User className="review-user user-s1" src={UserIcon} name=" Sarah Collins" role="Founder of Green Wave Enterprises" /> <br />
                                    <ReviewRating className="rating rating-sm">
                                        <Rating data={ReviewOneIcon} />  
                                        <RatingText>(4.5/5)</RatingText>  
                                    </ReviewRating> 
                                    <ReviewText>
                                        <p>Ijao Business Venture helped transform Green Wave Enterprises from a struggling small business to a competitive player in our industry. We were initially hesitant to invest in digital transformation due to limited resources, but Ijao worked closely with us to develop a cost-effective strategy that met our needs. Their expertise in digital marketing and cloud-based solutions has allowed us to attract more clients and streamline our internal processes. Since implementing their recommended tools and strategies, we’ve seen a 30% increase in revenue over the past year, and our team has become much more efficient in delivering our services. What sets Ijao Business Venture apart is their deep understanding of the challenges faced by small businesses like ours. They provided us with not just the technology, but the strategic direction we needed to grow. We are grateful for the tremendous value they've brought to our business.</p>
                                    </ReviewText>   
                                </div>
                            </ReviewContent>
                        </Review>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}

export default ReviewOne