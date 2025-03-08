import { useEffect, useState } from "react";
import http from "../http";
import { Link } from "react-router-dom";
import { useProductStore } from "../store";

const Shop = () => {
  const [title, setTitle] = useState("");
  const { products, setProducts } = useProductStore((state) => state);
  console.log(title);
  useEffect(() => {
    let apiURLForProducts = "/api/v1/products";
    if (title) {
      apiURLForProducts = apiURLForProducts + "/?title=" + title;
    }

    http.get(apiURLForProducts).then((res) => {
      console.log(res.data);
      setProducts(res.data);
    });
  }, [title]);

  return (
    <div>
      <h1>Shop</h1>
      <p>
        <input
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </p>
      <ul>
        {products?.map((product) => {
          return (
            <li key={product.id}>
              <img src={product.images[0]} width={150} alt={product.title} />
              <h2>
                <Link to={"/product/" + product.id}>{product.title}</Link>{" "}
              </h2>
              <p>Category: {product.category.name}</p>
              <p>{product.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Shop;
