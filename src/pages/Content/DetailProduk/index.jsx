import React from 'react'
import { Col, Container, Image, Row, Button, Form, Breadcrumb, Card } from 'react-bootstrap'

const DetailProduk = () => {
  return (
    <Container className="py-5">
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/">
          Produk
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Detail Produk</Breadcrumb.Item>
      </Breadcrumb>
      <Row>
        <Col md={4}>
          <Image src="https://images.tokopedia.net/img/cache/700/VqbcmM/2021/8/3/5d979db5-0f91-4cb0-b660-abfccf4279f6.jpg" alt="gambar-1" className="img-fluid rounded" />
        </Col>
        <Col md={8}>
          <div className="detail-produk">
            <div>
              <div className="title-detail-produk">
                <h4>Sandal Grizle Sendal Pria Wanita Import Keren Terbaru Kekinian</h4>
                <span>Rp 10.000</span>
              </div>
              <p className="mt-4">Tersedia <strong>10 stok barang</strong></p>
              <hr />
              <ul className="info-detail-produk">
                <li>
                  <Row>
                    <Col md="2">Kondisi</Col>
                    <Col md="10"><strong>Baru</strong></Col>
                  </Row>
                </li>
                <li>
                  <Row>
                    <Col md="2">Berat</Col>
                    <Col md="10"><strong>400 Gram</strong></Col>
                  </Row>
                </li>
                <li>
                  <Row>
                    <Col md="2">Kategori</Col>
                    <Col md="10"><strong>Sandal Pria</strong></Col>
                  </Row>
                </li>
                <li>
                  <Row>
                    <Col md="2">Etalase</Col>
                    <Col md="10"><strong>Sandal</strong></Col>
                  </Row>
                </li>
              </ul>
            </div>
            <Row>
              <Col md="2" className="d-flex">
                <Button variant="light" size="sm" className="btn-count">-</Button>
                <Form.Control size="sm" type="text" placeholder="Small text" value="1" className="mx-2 border-0 text-center" />
                <Button variant="primary" size="sm" className="btn-count">+</Button>
              </Col>
              <Col md="6">
                <Button variant="primary" size="sm" className="px-4">Add to Cart</Button>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <Card className="border-0 rounded mt-5">
        <Card.Body className="p-4">
          <h6 style={styles.textTitle}>Deskripsi Produk</h6>
          <hr />
          <p style={styles.textBody}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam obcaecati explicabo voluptatibus, voluptate iusto esse minima at quod quis, quisquam quaerat. Cum sequi eaque earum, aperiam eveniet ut odit tempora. <br />
            Vero et maiores suscipit sunt quia culpa molestiae sint, veniam iste quasi! Quisquam, fugiat excepturi. Nobis, totam natus enim fuga voluptate sunt ea architecto quia eaque cumque eveniet pariatur ducimus!<br />
            In dolore itaque voluptate minus velit voluptatum pariatur alias harum! Sed impedit, enim iste, facilis nesciunt id neque commodi corporis magni dolorum in adipisci, atque tenetur voluptates! Velit, itaque quo.<br />
            Reprehenderit quis expedita tempore magni voluptas excepturi ipsum quisquam quam, aut est nostrum praesentium quae ea placeat neque minima rerum laudantium aliquid nobis commodi quia? Perspiciatis saepe corporis assumenda non!<br />
            Ratione perspiciatis reprehenderit a illo fugiat quaerat, at sit vero perferendis ex suscipit sequi sint voluptatem ullam impedit molestiae asperiores quae sunt architecto maxime dolores amet iure ipsum rerum. Fugit.
          </p>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default DetailProduk

const styles = {
  textTitle: {
    fontSize: '14px',
    fontWeight: 'bold',
    marginBottom: '15px'
  },
  textBody: {
    fontSize: '14px',
    color: '#9c9999',
    lineHeight: '28px'
  }
}
