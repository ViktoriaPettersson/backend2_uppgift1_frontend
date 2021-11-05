import React from "react";

const ProductDetail = () => {
  return (
    <div className="container my-5 py-2">
      <div className="mb-2">Products - Phone - Sony Headphones</div>
      <div class="z-depth-1">
        <section class="text-center">
          <div class="row">
            <div class="col-lg-6">
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/17.jpg"
                alt="First slide"
                class="img-fluid"
              />
            </div>

            <div class="col-lg-5 text-center text-md-left mt-5">
              <h2 class="h2-responsive text-center text-md-left product-name font-weight-bold dark-grey-text mb-1 ml-xl-0 ml-4">
                <strong>Sony headphones</strong>
              </h2>
              <h3 class="h3-responsive text-center text-md-left mb-5 ml-xl-0 ml-4">
                <span class=" font-weight-bold">
                  <strong>$49</strong>
                </span>
              </h3>
              <div>
                <h3>Description</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus sed tincidunt urna. Morbi tortor mauris, porta nec mi
                  et, accumsan egestas quam. Vivamus ut nisi interdum,
                  sollicitudin lectus at, lacinia augue. Aenean vel orci
                  pretium, ultrices neque sed, sodales dui. Morbi mattis est sed
                  hendrerit eleifend. Vestibulum in enim non turpis vulputate
                  fermentum. Suspendisse at nisl quis felis tristique vestibulum
                  tempor id lorem. Suspendisse nec erat quis tortor pharetra
                  euismod. Donec hendrerit pharetra sagittis.
                </p>
              </div>
              <section class="color">
                <div class="mt-5">
                  <div class="row mt-3">
                    <div class="col-md-12 text-center text-md-left text-md-right">
                      <button class="btn btn-outline theme_color btn-rounded text-white">
                        <i class="fas fa-cart-plus mr-2" aria-hidden="true"></i>{" "}
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;
