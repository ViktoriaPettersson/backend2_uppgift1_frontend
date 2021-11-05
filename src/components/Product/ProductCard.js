import React from "react";

const ProductCard = () => {
  return (
    <div>
      {/* card start */}
      <div className="product_card">
        <div className="mb-2">Products - Phones</div>
        <div className="card card-ecommerce">
          <div className="view zoom product_image">
            <img
              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/13.jpg"
              className="img-fluid"
              alt="sample"
            />
          </div>

          <div className="card-body">
            <h5 className="card-title mb-1">
              <strong>
                <div className="dark-grey-text">Asus CT-567</div>
              </strong>
            </h5>

            <div className="white card-footer pb-0">
              <div className="row mb-0">
                <span className="float-left">
                  <strong>1439$</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* card end */}
    </div>
  );
};

export default ProductCard;
