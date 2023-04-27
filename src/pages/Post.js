import React, { useState } from "react";
import axios from "axios";

const Post = () => {
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
  return (
    <div>
    Name:
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
    Description : <br />
    <input
      type="text"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
    />
    <button type="submit" onClick={handleSubmit}>
      Submit
    </button>
  </div>
  )
}
}

export default Post