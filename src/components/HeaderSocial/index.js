import React from 'react';

const HeaderSocial = () => {
    const openSideMenu = () => {
        const sideMenuWrap = document.querySelector(".side-header");
        const overlay = document.querySelector('.side-menu-overlay');
        sideMenuWrap.classList.add('side-menu-open');
        overlay.classList.add('overlay-show');
    };

    return (
        <div className="header-social d-flex align-items-center justify-content-end col-lg-2 col-6">
                <button
                className="side-header-toggle d-block d-lg-none order-12 ml-20"
                onClick={openSideMenu}
            >
                <span/>
            </button>
        </div>
    );
};

export default HeaderSocial;
