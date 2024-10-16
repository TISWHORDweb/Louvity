import React from "react"
import BannerThree from "../section/banner/BannerThree"
import ServiceThree from "../section/service/ServiceThree"
import ReviewOne from "../section/review/ReviewOne"
import { FeatureTwoAlt } from "../section/feature/FeatureTwo"
import FactsOne from "../section/facts/FactsOne"
import FooterThree from "../section/footer/FooterThree"



const IndexThree = (props) =>{
    return(
        <div className="nk-main">
            <BannerThree className="has-header-main-s1 next-overlap-3x" id="#home" />
            <ServiceThree className="section-service py-0" id="#service"/>
            <FeatureTwoAlt className="section-feature pb-0" id="#about"/>
            <FactsOne className="section-facts" id="#blog"/>
            <ReviewOne className="section-review " id="#testimonial"/>
            <FooterThree className=" foot is-dark section section-sm" id="#footer" />
        </div>
    )
}

export default IndexThree
