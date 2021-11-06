import React from "react";
import { Link } from "react-router-dom";
// Tar emot product
const ProductCard = ({ product }) => {
  return (
    // SKickar med id till respektive id i url
    <Link to={`/products/${product.id}`}>
      <div>
        {/* <div className="row"> */}
        {/* grid column start */}
        <div className="col mb-4 d-flex align-items-stretch">
          {/* card start */}
          <div className="product_card">
            <div className="mb-2 text-dark">
              Products - {product.subCategoryId}
            </div>
            <div className="card card-ecommerce">
              <div className="view zoom product_image">
                <img
                  src={product.imageUrl}
                  className="img-fluid"
                  alt="sample"
                />
              </div>

              <div className="card-body">
                <h5 className="card-title mb-1">
                  <strong>
                    <div className="dark-grey-text">{product.productName}</div>
                  </strong>
                </h5>
                <p className="py-2 text-dark">{product.shortDescription}</p>
                <div className="white card-footer pb-0">
                  <div className="row mb-0">
                    <span className="float-left text-dark">
                      <strong>{product.price}$</strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* card end */}
        </div>
        {/* grid column end */}
        {/* </div> */}
      </div>
    </Link>
  );
};

export default ProductCard;
