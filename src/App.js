import React, {Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AboutPage from "./pages/about";
import ErrorPage from "./pages/404Error";
import HomeThreeColumn from "./pages/home/HomeThreeColumn";
import Portfolio from './pages/portfolio/grid/two-column';
import PortfolioDetailsPage from "./pages/myReel";
import PhotoThreeColumnPage from './pages/photography/three-column';
import VideoDetailsPage from './pages/portfolio/details';
import AllPhotosPage from './pages/photography/all-photos';

const App = () => {
    return (
        <Fragment>
            <Router>
                <Switch>
                     <Route path={`${process.env.PUBLIC_URL + "/photography"}`}
                           component={PhotoThreeColumnPage}/>
                     <Route path={`${process.env.PUBLIC_URL + "/my-reels/:slug"}`}
                           component={PortfolioDetailsPage}/>
                     <Route path={`${process.env.PUBLIC_URL + "/portfolio/:slug"}`}
                           component={VideoDetailsPage}/>
                     <Route path={`${process.env.PUBLIC_URL + "/about"}`}
                           component={AboutPage}/>
                     <Route path={`${process.env.PUBLIC_URL + "/portfolio"}`}
                           component={Portfolio}/>
                     <Route path={`${process.env.PUBLIC_URL + "/all-photos"}`}
                           component={AllPhotosPage}/>
                     <Route exact path={`${process.env.PUBLIC_URL + "/"}`}
                           component={HomeThreeColumn}
                     />
                     <Route exact component={ErrorPage}/>
                </Switch>
            </Router>
        </Fragment>
    );
};

export default App;
