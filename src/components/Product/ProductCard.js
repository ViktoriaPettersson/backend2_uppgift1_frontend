import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// Tar emot product
const ProductCard = ({ product }) => {
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

  // Körs direkt när komponenten laddas
  useEffect(() => {
    //kör funktionen
    getSubCategories(); // eslint-disable-next-line
    getCategories();
  }, []);
  // console.log(product.id);
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
              {categories.map((category) =>
                category.id === product.subCategoryId
                  ? category.categoryName
                  : ""
              )}{" "}
              /{" "}
              {subCategories.map((subCategory) =>
                subCategory.id === product.subCategoryId
                  ? subCategory.subCategoryName
                  : ""
              )}
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
