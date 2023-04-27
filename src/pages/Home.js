import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
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
  return (
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
        <h2 onClick={goHome} style={{ color: "red" }}>
          Home
        </h2>
      </div>
      <div style={{ display: "flex", gap: "25px" }}>
        <h3 onClick={goCategory}>Category</h3>
        <h3 onClick={goPost}>Post</h3>
      </div>
    </div>
  );
};

export default Home;
