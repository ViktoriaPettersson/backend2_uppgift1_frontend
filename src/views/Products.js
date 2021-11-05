import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <div className="container">
        <h1 className="d-flex justify-content-center mt-5 font-weight-bold h1_color">
          Products
        </h1>

        {/* row start */}
        <div className="row">
          {/* grid column start */}
          <div className="col-lg-4 col-md-12 mb-4 d-flex align-items-stretch">
            {/* card start */}
            <div className="product_card">
              <Link to="/details">
                <div className="mb-2 text-dark">Products - Phones</div>
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
                    <div className="text-dark py-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus sed tincidunt urna. Morbi tortor mauris, porta nec
                      mi
                    </div>
                    <div className="white card-footer pb-0">
                      <div className="row mb-0">
                        <span className="float-left">
                          <strong className="text-dark">1439$</strong>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            {/* card end */}
          </div>
          {/* grid column end */}
        </div>
        {/* row end */}
      </div>
    </div>
  );
};

export default Products;
