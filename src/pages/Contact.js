import { useEffect, useState } from "react";
import http from "../http";

const Contact = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    http.get("/posts/2").then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  }, []);
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
};

export default Contact;
