import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Post = () => {
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

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    axios
      .post("https://northwind.vercel.app/api/categories", {
        name: name,
        description: description,
      })
      .then((res) => {
        console.log(res.data);
      });
    setName("");
    setDescription("");
  };
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
          <h3 onClick={goCategory}>Category</h3>
          <h3 onClick={goPost} style={{ color: "red" }}>
            Post
          </h3>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          "align-items": "center",
          "justify-content": "center",
          "flex-direction": "column",
          gap: "5px",
          padding: "7% 0%",
        }}
      >
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: "270px", height: "40px" }}
        />
        <br />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ width: "270px", height: "40px" }}
        />
        <br />
        <button
          type="submit"
          onClick={handleSubmit}
          style={{
            width: "275px",
            height: "40px",
            "background-color": "blue",
            color: "white",
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Post;
