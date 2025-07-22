import { useState, useEffect } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import axios from "axios";


function AboutUS() {
  const [isLoading, setIsLoading] = useState(true); // برای نمایش لودینگ هنگام ورود
  const [article, setArticle] = useState({
    title: "",
    text: "",
    backgroundColor: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // ۱ ثانیه برای تست
    return () => clearTimeout(timer);
  }, []);

  const handleChangeArticle = (e) => {
    const { name, value } = e.target;
    setArticle((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCreateNewArticle = () => {
    setIsLoading(true);
    setTimeout(() => {
      axios
        .post("http://localhost:3001/article", article)
        .then(() => {
          alert("Article added successfully!");
          setIsLoading(false);
        })
        .catch((err) => {
          console.error("Error adding article:", err);
          setIsLoading(false);
        });
    }, 1000);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Make Article</h1>

{isLoading && (
   <div style={{ display: "flex", justifyContent: "center", margin: "2rem" }}>
    <img 
      src="/pic/Intersection (1).gif" 
      alt="Loading..." 
      width="60" 
      height="60" 
      style={{ objectFit: "contain" }} 
    />
  </div>
)}

        {!isLoading && (
          <>
            <input
              name="title"
              type="text"
              value={article.title}
              onChange={handleChangeArticle}
              placeholder="Title"
            />
            <input
              name="backgroundColor"
              type="text"
              value={article.backgroundColor}
              onChange={handleChangeArticle}
              placeholder="Background Color"
            />
            <br />
            <textarea
            style={{width:"500px",height:"500px"}}
              name="text"
              value={article.text}
              onChange={handleChangeArticle}
              placeholder="Text"
            ></textarea><br />
            <button onClick={handleCreateNewArticle} disabled={isLoading}>
              Submit
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default AboutUS;
