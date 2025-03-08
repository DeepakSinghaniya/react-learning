import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import http from "../http";
import { useProductStore } from "../store";

const ProductDetail = () => {
  const [data, setData] = useState({});
  const { products } = useProductStore((state) => state);
  const params = useParams();
  const id = params.id;

  const selectedProduct = products.filter((product) => {
    console.log(product);
    return product.id == id;
  });
  const globalData = selectedProduct[0];

  useEffect(() => {
    if (globalData) {
      setData(globalData);
    } else {
      http.get("/api/v1/products/" + id).then((res) => {
        setData(res.data);
      });
    }
  }, []);
  return (
    <div>
      <div>
        <ul>
          {data?.images?.map((url) => {
            return (
              <li key={url}>
                <img src={url} alt="" height={100} />
              </li>
            );
          })}
        </ul>
      </div>
      <h1>{data.title}</h1>
      <p>Price: ${data.price}</p>
      <p>Category: {data?.category?.name}</p>
      <p>{data.description}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
