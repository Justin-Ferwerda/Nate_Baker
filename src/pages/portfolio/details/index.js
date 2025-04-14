import React, {Fragment} from 'react';
import SideHeader from "../../../components/SideHeader";
import useGetParams from "../../../hooks/useGetParams";
import Header from "../../../components/header/HeaderOne";
import FooterThree from "../../../components/footer/FooterThree";
import TemplatePortfolioDetails from "../../../templates/portfolio/details";

const portfolios = [
      {
        "id": 1,
        "title": "Nate Baker Reel",
        "slug": "my-reel",
        "category": "",
        "thumb": "my-reel.jpg",
        "description": "Covering mostly my time before working in baseball, I shot everything in my reel, created all the animations, and edited all sequences. I also acted as Director or Assistant Director for everything included. Some restrictions prohibit me from including my work with the Washington Nationals but please see my portfolio page for some of my complete work in sports.",
        "previewImages": [
          "Pr61tH5oU2E"
        ]
      },
      {
        "id": 2,
        "title": "Nate Baker Reel",
        "slug": "my-reel",
        "category": "",
        "thumb": "my-reel.jpg",
        "description": "Covering mostly my time before working in baseball, I shot everything in my reel, created all the animations, and edited all sequences. I also acted as Director or Assistant Director for everything included. Some restrictions prohibit me from including my work with the Washington Nationals but please see my portfolio page for some of my complete work in sports.",
        "previewImages": [
          "Pr61tH5oU2E"
        ]
      }
    ]

const PortfolioDetailsPage = () => {
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

export default PortfolioDetailsPage;
