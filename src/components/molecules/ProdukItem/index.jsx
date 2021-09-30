import React from 'react'
import { Link } from 'react-router-dom'
import {Button} from '../../../components'

const ProdukItem = () => {
  return (
    <Link to="/detail-produk" className="text-decoration-none">
      <div className="card-produk">
        <div className="card-img-produk">
          <img src="https://images.tokopedia.net/img/cache/700/VqbcmM/2021/8/3/5d979db5-0f91-4cb0-b660-abfccf4279f6.jpg" className="img-fluid" alt="gambar-1" />
        </div>
        <div className="card-body-produk">
          <p>Sandal Grizle Sendal Pria Wanita Import Keren Terbaru Kekinian</p>
          <h6>Rp 10.000</h6>
        </div>
        <div className="card-footer-produk">
          <Button title="Add to Cart" />
        </div>
      </div>
    </Link>
  )
}

export default ProdukItem
