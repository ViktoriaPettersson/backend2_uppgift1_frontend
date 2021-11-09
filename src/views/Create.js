import React, { useState, useEffect } from "react";
import axios from "axios";

const Create = () => {
  // Lägga till en produkt i databasen
  const url = "https://localhost:44323/api/Products";
  const [data, setData] = React.useState({
    productName: "",
    shortDescription: "",
    longDescription: "",
    price: "",
    imageUrl: "",
    subCategoryId: "",
  });

  // Funktion för submit
  const submit = (e) => {
    e.preventDefault();
    axios
      .post(url, {
        productName: data.productName,
        shortDescription: data.shortDescription,
        longDescription: data.longDescription,
        price: data.price,
        imageUrl: data.imageUrl,
        subCategoryId: data.subCategoryId,
      })
      .then((res) => {
        console.log(res.data);
      });
  };
  const handle = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    // console.log(newData);
  };
  // Hämta subCategories för att loopa ut i select -delen
  const [subCategories, setSubCategories] = useState([]);
  // Funktion som hämtar produkter från databasen via WepApi
  const getSubCategories = async () => {
    const res = await axios.get("https://localhost:44323/api/SubCategories");
    // hämtar upp produkterna sparar i products
    const _subCategories = await res.data;
    // skickar in i setProducts
    setSubCategories(_subCategories);
  };

  // Körs direkt när komponenten laddas
  useEffect(() => {
    //kör funktionen
    getSubCategories(); // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1 className="d-flex justify-content-center mt-5 font-weight-bold h1_color">
        Create
      </h1>
      <div className="container my-5 py-5 z-depth-1 theme_color rounded">
        <section className="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">
          <div className="row d-flex justify-content-center">
            <div className="col-md-8">
              <form onSubmit={(e) => submit(e)} className="text-center">
                <p className="h4 mb-4 text-white mb-5">Create a new product</p>

                <div className="form-row mb-4">
                  <div className="col">
                    <input
                      type="text"
                      id="productName"
                      className="form-control"
                      placeholder="Name"
                      onChange={(e) => handle(e)}
                      value={data.productName}
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      id="price"
                      className="form-control"
                      placeholder="Price"
                      onChange={(e) => handle(e)}
                      value={data.price}
                    />
                  </div>
                </div>
                <div className="form-row mb-4">
                  <div className="col">
                    <input
                      type="text"
                      id="imageUrl"
                      className="form-control"
                      placeholder="Image"
                      onChange={(e) => handle(e)}
                      value={data.imageUrl}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <textarea
                    className="form-control rounded-rounded"
                    id="shortDescription"
                    rows="3"
                    placeholder="Short Description"
                    onChange={(e) => handle(e)}
                    value={data.shortDescription}
                  ></textarea>
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control rounded-rounded"
                    id="longDescription"
                    rows="10"
                    placeholder="Long Description"
                    onChange={(e) => handle(e)}
                    value={data.longDescription}
                  ></textarea>
                </div>
                <select
                  value={data.subCategoryId}
                  id="subCategoryId"
                  onChange={(e) => handle(e)}
                  className="browser-default custom-select"
                >
                  {subCategories.map((subCategory) => (
                    <option key={subCategory.id} value={subCategory.id}>
                      {subCategory.subCategoryName}
                    </option>
                  ))}
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
