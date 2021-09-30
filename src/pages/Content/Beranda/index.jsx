import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ProdukItem } from '../../../components'

const Beranda = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col md="2" sm="2">
          <ProdukItem />
        </Col>
        <Col md="2" sm="2">
          <ProdukItem />
        </Col>
        <Col md="2" sm="2">
          <ProdukItem />
        </Col>
        <Col md="2" sm="2">
          <ProdukItem />
        </Col>
        <Col md="2" sm="2">
          <ProdukItem />
        </Col>
        <Col md="2" sm="2">
          <ProdukItem />
        </Col>
        <Col md="2" sm="2">
          <ProdukItem />
        </Col>
        <Col md="2" sm="2">
          <ProdukItem />
        </Col>
        <Col md="2" sm="2">
          <ProdukItem />
        </Col>
        <Col md="2" sm="2">
          <ProdukItem />
        </Col>
        <Col md="2" sm="2">
          <ProdukItem />
        </Col>
        <Col md="2" sm="2">
          <ProdukItem />
        </Col>
      </Row>
      <div className="d-flex align-items-center justify-content-center">
        <nav>
          <ul className="pagination">
            <li className="page-item disabled">
              <span className="page-link">Previous</span>
            </li>
            <li className="page-item active">
              <Link to="#" className="page-link">1</Link>
            </li>
            <li className="page-item">
              <span className="page-link">2</span>
            </li>
            <li className="page-item">
               <Link to="#" className="page-link">3</Link>
            </li>
            <li className="page-item">
               <Link to="#" className="page-link">Next</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Container>
  )
}

export default Beranda
