import './styles.css';

import ProductImg from 'assets/images/car-catalog.svg';

const ProductCard = () => {
  return (
    <>
      <div className="base-card product-card">
        <div className="card-top-container">
          <img src={ProductImg} alt="Nome do produto" />
          <h6>Audi Supra TT</h6>
        </div>
        <div className="btn-container-catalogo">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate, nisi
          </p>
          <button className="btn">
            <h6>Comprar</h6>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
