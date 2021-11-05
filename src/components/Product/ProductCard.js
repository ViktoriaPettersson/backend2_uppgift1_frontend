import React from "react";

// Tar emot product
const ProductCard = ({ product }) => {
  return (
    <div>
      {/* <div className="row"> */}
      {/* grid column start */}
      <div className="col mb-4 d-flex align-items-stretch">
        {/* card start */}
        <div className="product_card">
          <div className="mb-2">Products - {product.subCategoryId}</div>
          <div className="card card-ecommerce">
            <div className="view zoom product_image">
              <img src={product.imageUrl} className="img-fluid" alt="sample" />
            </div>

            <div className="card-body">
              <h5 className="card-title mb-1">
                <strong>
                  <div className="dark-grey-text">{product.productName}</div>
                </strong>
              </h5>
              <p className="py-2">{product.shortDescription}</p>
              <div className="white card-footer pb-0">
                <div className="row mb-0">
                  <span className="float-left">
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
  );
};

export default ProductCard;
