import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/Product/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  // Funktion som hämtar produkter från databasen via WepApi
  const getProducts = async () => {
    const res = await axios.get("https://localhost:44323/api/Products");
    // hämtar upp produkterna sparar i products
    const _products = await res.data;
    // skickar in i setProducts
    setProducts(_products);
  };
  // Körs direkt när komponenten laddas
  useEffect(() => {
    //kör funktionen
    return getProducts();
  });

  return (
    <div>
      <div className="container">
        <h1 className="d-flex justify-content-center mt-5 font-weight-bold h1_color">
          Products
        </h1>

        {/* row start */}
        <div className="row row-cols-1 row-cols-md-3">
          {/* kör en map på product */}
          {/* Rendera ut productCard och skicka med id som key och product som en product */}
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {/* row end */}
      </div>
    </div>
  );
};

export default Products;
