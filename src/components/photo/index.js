import React from 'react';
import {Link} from 'react-router-dom';

const Photo = ({slug, thumb, classes, title, category, variant, path}) => {
    return (
        <div className={`portfolio-item ${classes ? classes : ' '}`}>
            <Link
                className={'d-block'}
                to={`/photography/${slug}`}
            >
                {variant === 'column' ? (
                    <div className="portfolio-image">
                        <img src={require(`../../assets/images/photos/${path}/${thumb}`)} alt={title}/>
                    </div>

                ) : (
                    <div
                        className="portfolio-image"
                        style={{backgroundImage: `url(${require('../../assets/images/photos/allStarWeekend/' + thumb)})`}}
                    />
                )}
                <div className="portfolio-content">
                    <h4 className="title">{title}</h4>
                    <div className="category"><span>{category}</span></div>
                </div>
            </Link>
        </div>
    );
};

export default Photo;
