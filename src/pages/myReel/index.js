import React, {Fragment} from 'react';
import SideHeader from "../../components/SideHeader";
import Header from "../../components/header/HeaderOne";
import FooterThree from "../../components/footer/FooterThree";
import TemplatePortfolioDetails from "../../templates/portfolio/details";

const MyReelPage = () => {
    const portfolio = {
      "id": 10,
      "title": "Nate Baker Reel",
      "slug": "my-reel",
      "category": "",
      "thumb": "my-reel.jpg",
      "description": "Check out my reel",
      "previewImages": [
        "Pr61tH5oU2E"
      ],
      "meta": {
        "role":"Manager of Video Production"
      }
    }

    return (
        <Fragment>
            <Header classes={'position-static'}/>
            <SideHeader mobile={true}/>
            <TemplatePortfolioDetails portfolio={portfolio}/>
            <FooterThree position='fixed'/>
        </Fragment>
    );
};

export default MyReelPage;
