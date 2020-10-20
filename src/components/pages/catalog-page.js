import React from 'react';
import CatalogCategory from '../catalog-category';
import CatalogList from '../catalog-list';
import {Container, Col, Row} from 'react-bootstrap';

const CatalogPage = () => {

    return (
        <Container fluid className="catalog-page">
        <Row>
            <Col className="col-category" xs={4}>
                {<CatalogCategory/>}
            </Col>
            <Col className="col-items" xs={8}>
                {<CatalogList/>}
            </Col>
        </Row>
        </Container>
    )
}

export default CatalogPage;