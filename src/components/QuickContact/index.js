import React from 'react';
import socialIcons from '../../data/social-networks'

const QuickContact = ({info}) => {
    return (
        <>
            <div className="contact-info">
            <h3>Contact</h3>
            <ul>
                <li>
                    <a href={`mailto:${info}`}>{info}</a>
                </li>
            </ul>
        </div>
        <div className="contact-info">
            <h3>Socials</h3>
            <div className="header-social d-flex col-lg-2 col-6">
                
                {socialIcons.map(social => (
                    <a key={social?.id}
                    href={social?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        <i className={`fa fa-${social?.media}`}/>
                    </a>
                ))}
            </div>
        </div>
        </>
    );
};

export default QuickContact;
