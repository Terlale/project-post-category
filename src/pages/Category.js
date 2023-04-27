import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Category = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  const goPost = () => {
    navigate("/post");
  };

  const goCategory = () => {
    navigate("/category");
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`https://northwind.vercel.app/api/categories`).then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div>
        <div
        style={{
          backgroundColor: "#E8960F",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          textAlign: "center",
          padding: "20px 60px",
        }}
      >
        <div>
          <h2 onClick={goHome}>Home</h2>
        </div>
        <div style={{ display: "flex", gap: "25px" }}>
          <h3 onClick={goCategory} style={{ color: "red" }}>
            Category
          </h3>
          <h3 onClick={goPost}>Post</h3>
        </div>
      </div>
      <div>
      {data.map((item) => (
        <div>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
        </div>
      ))}

      </div>
    </div>
  );
};

export default Category;
