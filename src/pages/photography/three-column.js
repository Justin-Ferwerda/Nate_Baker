import React, {Fragment, useState} from 'react';
import { useLocation } from 'react-router-dom';
import Header from "../../components/header/HeaderOne";
import SideHeader from "../../components/SideHeader";
import PhotoGridThreeColumn from "../../templates/photography";
import FooterTwo from "../../components/footer/FooterTwo";
import photoData from '../../data/photos'

const PhotoThreeColumnPage = () => {
    const [count, setCount] = useState(9);
    const [loading, setLoading] = useState(false);
    const photos = photoData.slice(0, count);

    const loadMore = () => {
        setLoading(true);
        setTimeout(() => {
            setCount(count + 3);
            setLoading(false);
        }, 200);
    };

    const allItems = count >= photoData.length;

    const location = useLocation();
    const pathArray = location.pathname.split("/")
    const path = pathArray[pathArray.length - 1]
    console.log(path)


    return (
        <Fragment>
            <Header classes={'position-static'}/>
            <SideHeader mobile={true}/>
            <PhotoGridThreeColumn photos={photos} loading={loading} path={path}/>
            <FooterTwo allItems={allItems} loadHandler={loadMore} />
        </Fragment>
    );
};

export default PhotoThreeColumnPage;
