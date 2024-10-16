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
                            <h3 className="title" style={{color:"#085864"}}>Testimonials</h3>
                        </SectionHead>
                    </Col>
                </Row>
                <Row className="gx-gs gy-5 justify-center">
                    <Col md="6" lg="6">
                        <Review>
                            <ReviewContent className="card card-shadow round-xl">
                                <div className="card-inner card-inner-lg">
                                <User className="review-user user-s1" src={UserIcon} name="Amanda Harris" role="CEO of Harris Tech Solutions" /> <br />
                                    <ReviewRating className="rating rating-sm">
                                        <Rating data={ReviewOneIcon} />  
                                        <RatingText>(4.5/5)</RatingText>  
                                    </ReviewRating> 
                                    <ReviewText>
                                        <p>Since implementing the AI-Powered Burnout Analytics, our team has seen a remarkable shift in workplace morale. The early insights have allowed us to address burnout before it escalates, and our employees feel more supported than ever. This tool has truly transformed our approach to wellness</p>
                                    </ReviewText>   
                                </div>
                            </ReviewContent>
                        </Review>
                    </Col>
                    <Col md="6" lg="6">
                        <Review>
                            <ReviewContent className="card card-shadow round-xl">
                                <div className="card-inner card-inner-lg">
                                <User className="review-user user-s1" src={UserIcon} name="Mark Dunlap" role="Owner of Dunlap Manufacturing" /> <br />
                                    <ReviewRating className="rating rating-sm">
                                        <Rating data={ReviewOneIcon} />  
                                        <RatingText>(4.5/5)</RatingText>  
                                    </ReviewRating> 
                                    <ReviewText>
                                        <p>The Wellness Toolkit provided by this company has been a game-changer for us. It’s filled with practical resources that have helped us foster a culture of wellness. Our employees are more engaged, and the feedback has been overwhelmingly positive</p>
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