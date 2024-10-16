import React, { useState, useEffect } from 'react'
import HeaderImg from '../../images/header/new.jpg'
import Menu from '../../layout/menu/Menu'
import MobileMenu from '../../layout/menu/MobileMenu'
import { Col, Container, Row, Badge } from "reactstrap"
import {Header, HeaderContent, HeaderMain, HeaderWrap} from "../../layout/header/Header"
import {Link} from "../../components/button/Button"
import { HeaderBadge, HeaderCaption, HeaderText, HeaderTitle } from '../../components/headerCaption/HeaderCaption'
import { HeaderImage } from '../../components/images/Images'
import {BannerOneData} from './BannerData'

const BannerThree = (props) =>{
    const [toggle, setToggle] = useState(false);
    const [offset, setOffset] = useState(0);
    const [mobileView, setMobileView] = useState(false);

    useEffect(() => {
        window.onscroll = () => {
        setOffset(window.pageYOffset)
        }
        window.scrollTo(0,0);
        viewChange();
        window.addEventListener("resize", viewChange);
        return () => {
            window.removeEventListener('resize', viewChange);
        };
    }, []);

    // function to change the design view under 1200 px
    const viewChange = () => {
        if (window.innerWidth < 992) {
        setMobileView(true);
        } else {
        setMobileView(false);
        }
    };

    
    return(
        <Header className={props.className && props.className} id={props.id && props.id} >
            <HeaderMain className={`header-main header-main-s1 is-sticky is-transparent on-dark ${offset > 0 ? "has-fixed" : ""}`}>
                <Container className='header-container'>
                    <HeaderWrap>
                        <div className="header-logo">
                            <h4 className='' style={{color:"#085864"}}>Louvity LLC</h4>
                        </div>
                        <div className="header-toggle" onClick={() => setToggle(!toggle)}>
                            <button className={`menu-toggler ${toggle === true ? "active" : ""}`}> 
                                <em className="menu-on icon ni ni-menu"></em>
                                <em className="menu-off icon ni ni-cross"></em>
                            </button>
                        </div>
                        <nav className={`header-menu menu ${toggle === true ? "active" : ""} ${mobileView ? "mobile-menu" : ""}`}> 
                            {!mobileView ? <Menu className="ms-lg-auto" data={BannerOneData} /> : <MobileMenu data={BannerOneData}/>}
                            <ul className="menu-btns">
                                {/* <li>
                                    <Link to="/" target="_blank" rel="noreferrer" className="btn-primary btn-lg">Get Started</Link>
                                </li> */}
                            </ul>
                        </nav>
                        {toggle && window.innerWidth < 992 && <div className="header-overlay" onClick={() => setToggle(!toggle)}></div>}
                    </HeaderWrap>
                </Container>
            </HeaderMain>
            <HeaderContent className="my-auto py-5 is-dark">
                <Container>
                    <Row className='flex-row-reverse align-items-center justify-content-between g-gs'>
                        <Col lg="5" className='mb-n3 mb-lg-0'>
                            <HeaderImage className="header-image-s3">
                                <img src={HeaderImg} alt="header-img" />
                            </HeaderImage>
                        </Col>
                        <Col lg="6">
                            <HeaderCaption>
                                <HeaderBadge>
                                    <div className="badge-pro">
                                        <Badge pill color="danger">NEW</Badge> <span className="badge-pro-text">Using AI and predictive analytics to improve corporate wellness</span>
                                    </div>
                                </HeaderBadge>
                                <HeaderTitle>Transforming Corporate Wellness with AIDriven Insights</HeaderTitle>
                                <HeaderText className="pe-5">
                                   <p>To revolutionize corporate wellness by leveraging AI-driven predictive analytics to prevent burnout, enhance employee well-being, and empower organizations with actionable insights for a healthier, more productive workforce.</p>
                                </HeaderText>
                                <ul className="header-action btns-inline">
                                    <li>
                                        <Link to="/" className="m-0" ><span className='btn-round btn-lg px-3 py-2 m-0' style={{background:"#085864",color:"white"}}>Get a Free Wellness Assessment</span></Link>
                                    </li>
                                </ul>
                            </HeaderCaption>
                        </Col>
                    </Row>
                </Container>
            </HeaderContent>
        </Header>
    )
}

export default BannerThree
