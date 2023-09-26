import React from 'react';

const QuickContact = ({email}) => {
    return (
        <div className="contact-info">
            <h3>Contact</h3>
            <ul>
                <li>
                    <a href={`mailto:${email}`}>{email}</a>
                </li>
            </ul>
        </div>
    );
};

export default QuickContact;
