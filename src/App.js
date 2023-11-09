import React, {Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

/*
* @ Component Imported
* */
import AboutPage from "./pages/about";
import ErrorPage from "./pages/404Error";
import HomeThreeColumn from "./pages/home/HomeThreeColumn";
import MyReelPage from "./pages/myReel";
import PhotoThreeColumnPage from './pages/photography/three-column';
import PortfolioDetailsPage from './pages/portfolio/details';
import Portfolio from './pages/portfolio/grid/two-column';
import AllPhotosPage from './pages/photography/all-photos';

const App = () => {
    return (
        <Fragment>
            <Router>
                <Switch>
                     <Route path={`${process.env.PUBLIC_URL + "/photography"}`}
                           component={PhotoThreeColumnPage}/>
                     <Route path={`${process.env.PUBLIC_URL + "/my-reel"}`}
                           component={MyReelPage}/>
                     <Route path={`${process.env.PUBLIC_URL + "/portfolio/:slug"}`}
                           component={PortfolioDetailsPage}/>
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
