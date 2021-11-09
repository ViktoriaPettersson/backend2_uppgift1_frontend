import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

const ProductDetail = ({}) => {
  // Tomt object
  const { id } = useParams();
  const [product, setProduct] = useState({});
  // Funktion som hämtar en produkt
  const getOneProduct = async () => {
    const res = await axios.get(`https://localhost:44323/api/Products/${id}`);
    setProduct(res.data);
  };

  // Hämta subCategories för att lopa ut i rätt subCategory till en product
  const [subCategories, setSubCategories] = useState([]);
  // Funktion som hämtar produkter från databasen via WepApi
  const getSubCategories = async () => {
    const res = await axios.get("https://localhost:44323/api/SubCategories");
    // hämtar upp produkterna sparar i products
    const _subCategories = await res.data;
    // skickar in i setProducts
    setSubCategories(_subCategories);
  };
  // Hämta category för att lopa ut i rätt category till en product
  const [categories, setCategories] = useState([]);
  // Funktion som hämtar produkter från databasen via WepApi
  const getCategories = async () => {
    const res = await axios.get("https://localhost:44323/api/Categories");
    // hämtar upp produkterna sparar i products
    const _categories = await res.data;
    // skickar in i setProducts
    setCategories(_categories);
  };

  useEffect(() => {
    getOneProduct(); // eslint-disable-next-line
    getSubCategories(); // eslint-disable-next-line
    getCategories(); // eslint-disable-next-line
  }, []);

  return (
    <div className="container my-5">
      <div className="mb-2">
        {categories.map((category) =>
          category.id === product.subCategoryId ? category.categoryName : ""
        )}{" "}
        /{" "}
        {subCategories.map((subCategory) =>
          subCategory.id === product.subCategoryId
            ? subCategory.subCategoryName
            : ""
        )}{" "}
        / {product.productName}
      </div>
      <div className="z-depth-1">
        <section className="text-center">
          <div className="row">
            <div className="col-lg-6">
              <img
                src={product.imageUrl}
                alt="First slide"
                className="img-fluid px-3 mt-5 py-5"
              />
            </div>

            <div className="col-lg-5 text-center text-md-left mt-5">
              <h2 className="h2-responsive text-center text-md-left product-name font-weight-bold dark-grey-text mb-1 ml-xl-0 ml-4">
                <strong>{product.productName}</strong>
              </h2>
              <h3 className="h3-responsive text-center text-md-left mb-5 ml-xl-0 ml-4">
                <span className=" font-weight-bold">
                  <strong>${product.price}</strong>
                </span>
              </h3>
              <div>
                <h3>Description</h3>
                <p>{product.longDescription}</p>
              </div>
              <section className="color">
                <div className="mt-5">
                  <div className="row mt-3">
                    <div className="col-md-12 text-center text-md-left text-md-right">
                      <button className="btn btn-outline theme_color btn-rounded text-white mb-4">
                        <i
                          className="fas fa-cart-plus mr-2"
                          aria-hidden="true"
                        ></i>{" "}
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
