import React from "react"
import { Col, Row, Container } from "reactstrap"
import Footer from "../../layout/footer/Footer"
import { SocialIcon } from "../../components/icon/Icon"
import { LinkInline } from "../../components/styledList/StyledList"
import { SocialIconOne, LinkDataFour } from './FooterData'


const FooterThree = (props) =>{
    return(
        <Footer className={props.className && props.className} id={props.id && props.id}>
            <Container>
                <Row className="g-3 align-items-center">
                    <Col md="3">
                        <div className="footer-logo">
                        <h4 className='' style={{color:"rgb(101, 118, 255)"}}>IJAO VENTURE</h4>
                        </div>
                    </Col>
                    <Col md="9" className="d-flex justify-content-md-end">
                        <LinkInline className="gx-4" data={LinkDataFour} />
                    </Col>
                </Row>
                <Row className="g-3 align-items-center pt-3">
                    <Col md="8">
                        <div className="text-base">&copy; 2024 Ijao business venture.
                        </div>
                    </Col>
                    <Col md="4" className="d-flex justify-content-md-end">
                        <SocialIcon data={SocialIconOne} />
                    </Col>
                </Row>
            </Container>
        </Footer>
    )
}

export default FooterThree
