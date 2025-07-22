import { useParams } from "react-router-dom";
import Navbar from "../../Component/Navbar/Navbar";
import styled from "./article1.module.css";
import { useEffect, useState } from "react";

function Article1() {
  const params = useParams();
  const [text, setText] = useState({});

useEffect(() => {
  fetch(`http://localhost:3001/article/${params.id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log("Fetched:", data);
      setText(data);
    })
    .catch((error) => console.log("Fetch error:", error));
}, [params.id]);


  return (
    <>
      <Navbar />
      <div className={styled.main}>
        <h1 className={styled.h1}>hello man</h1>
        <p className={styled.p}>{text?.text}</p>
      </div>
    </>
  );
}

export default Article1;
