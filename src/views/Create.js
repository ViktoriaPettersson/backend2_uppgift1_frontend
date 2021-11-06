import React from "react";

const Create = () => {
  return (
    <div>
      <h1 className="d-flex justify-content-center mt-5 font-weight-bold h1_color">
        Create
      </h1>
      <div className="container my-5 py-5 z-depth-1 theme_color rounded">
        <section className="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">
          <div className="row d-flex justify-content-center">
            <div className="col-md-8">
              <form className="text-center">
                <p className="h4 mb-4 text-white mb-5">Create a new product</p>

                <div className="form-row mb-4">
                  <div className="col">
                    <input
                      type="text"
                      id="productName"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      id="productPrice"
                      className="form-control"
                      placeholder="Price"
                    />
                  </div>
                </div>
                <div className="form-row mb-4">
                  <div className="col">
                    <input
                      type="text"
                      id="productImage"
                      className="form-control"
                      placeholder="Image"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <textarea
                    className="form-control rounded-rounded"
                    id="shortDesc"
                    rows="3"
                    placeholder="Short Description"
                  ></textarea>
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control rounded-rounded"
                    id="longDesc"
                    rows="10"
                    placeholder="Long Description"
                  ></textarea>
                </div>
                <select className="browser-default custom-select">
                  <option value="1">Computer</option>
                  <option value="2">Phone</option>
                  <option value="3">Tv</option>
                </select>
                <button
                  className="btn btn-outline-light my-4 btn-block"
                  type="submit"
                >
                  CREATE
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Create;
