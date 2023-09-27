import React, {Fragment} from 'react';
import Loading from "../../components/loading";
import {Container, Row, Col} from 'react-bootstrap'
import Photo from "../../components/photo";
import PageContainer from "../../container/CustomPage";

const PhotoGridThreeColumn = ({photos, loading, fullWidth, path}) => {

    return (
        <Fragment>
            <PageContainer classes={'bg-grey'} fullWidth={fullWidth}>
                <Container fluid={!!fullWidth} className={fullWidth ? 'p-0' : null}>
                    <Row className={'row-7 portfolio-column-three'}>
                        {photos.map(portfolio => (
                            <Col key={portfolio.id} md={6} lg={4} className={'mb-15'}>
                                <Photo
                                    id={portfolio.id}
                                    variant={'column'}
                                    slug={portfolio.slug}
                                    title={portfolio.title}
                                    thumb={portfolio.thumb}
                                    category={portfolio.category}
                                    path={path}
                                />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </PageContainer>

            {loading ? <Loading/> : null}
        </Fragment>
    );
};

export default PhotoGridThreeColumn;
