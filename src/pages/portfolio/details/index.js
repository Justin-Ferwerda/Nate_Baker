import React, {Fragment} from 'react';
import SideHeader from "../../../components/SideHeader";
import portfolios from "../../../data/portfolios"
import useGetParams from "../../../hooks/useGetParams";
import Header from "../../../components/header/HeaderOne";
import FooterThree from "../../../components/footer/FooterThree";
import TemplatePortfolioDetails from "../../../templates/portfolio/details";

const VideoDetailsPage = () => {
    const {slug} = useGetParams();
    const portfolio = portfolios?.find(portfolio => portfolio.slug === slug);

    return (
        <Fragment>
            <Header classes={'position-static'}/>
            <SideHeader mobile={true}/>
            <TemplatePortfolioDetails portfolio={portfolio}/>
            <FooterThree position='fixed'/>
        </Fragment>
    );
};

export default VideoDetailsPage;
