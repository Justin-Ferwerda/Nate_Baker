import React from 'react';

const Photo = ({thumb, classes, title, category}) => {
    return (
        <div className={`portfolio-item ${classes ? classes : ' '}`}>
                <div>
                        <img src={require(`../../assets/images/photos/${category}/${thumb}`)} alt={title}/>
                </div>
        </div>
    );
};

export default Photo;
