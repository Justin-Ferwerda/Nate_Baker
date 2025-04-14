import React,{Fragment} from 'react';
import {Link} from "react-router-dom";
// Logo
import LogoDark from '../../assets/images/logo.png'

const Logo = ({sideHeader}) => {
    return (
        <Fragment>
            {sideHeader?(
                <Link to={`${process.env.PUBLIC_URL + '/'}`}>
                    <img src={LogoDark} alt="logo"/>
                </Link>
            ):(
                <div className="header-logo col-lg-2 col-6 mt-40 mb-40">
                    <Link to={`${process.env.PUBLIC_URL + '/'}`}>
                        <img src={LogoDark} alt="logo"/>
                    </Link>
                </div>
            )}
        </Fragment>
    );
};

export default Logo;
