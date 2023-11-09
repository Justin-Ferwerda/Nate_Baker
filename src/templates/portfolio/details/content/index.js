import React from 'react';
import {Link} from "react-router-dom";

const PortfolioDetailsContent = ({title, slug, category, description, meta}) => {
    return (
        <div className="portfolio-details-content">
            <Link to={`/portfolio/${slug}`} className="category">{category}</Link>
            <h1 className="title">{title}</h1>
            <p>{description}</p>
            <ul className="project-info">
                {meta ? <li><span>Role:</span> {meta?.role}</li> : ''}
            </ul>
        </div>
    );
};

export default PortfolioDetailsContent;
