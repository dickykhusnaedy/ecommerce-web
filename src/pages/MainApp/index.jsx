import React from 'react'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { Beranda, DetailProduk } from '..'

const MainApp = () => {
  return (
    <div className="d-flex justify-content-between flex-column" style={styles.body}>
      <Router>
        <div>
          <Navbar bg="white" expand="lg">
            <Container>
              <Navbar.Brand href="/" className="nav-brand">EcommerceWeb</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                  <Link to="/" className="nav-link active">Beranda</Link>
                  <Link to="#" className="nav-link">Produk</Link>
                  <Link to="#" className="nav-link">Kategori</Link>
                  <Link to="#" className="nav-link">Toko</Link>
                </Nav>
                <Link to="#" style={styles.cart}><FontAwesomeIcon icon={faCartPlus} /></Link>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Switch>
            <Route exact path="/">
              <Beranda />
            </Route>
            <Route path="/detail-produk">
              <DetailProduk />
            </Route>
          </Switch>
        </div>
        <footer>
          <p>Copyright &copy; {new Date().getFullYear()} EcommerceWeb</p>
        </footer>
      </Router>
    </div>
  )
}

export default MainApp

const styles = {
  body: {
    backgroundColor: '#F6F8FD',
    minHeight: '100vh'
  },
  cart: {
    color: '#11b01c'
  }
}