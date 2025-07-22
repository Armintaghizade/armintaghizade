import { useEffect, useState } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Article from "../../Component/Articles/Article";
import styled from "./home.module.css";
import { Link } from "react-router-dom";

function Home() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // شروع با true برای نمایش لودینگ

  useEffect(() => {
    // نمایش لودینگ به مدت ۱ ثانیه و سپس گرفتن داده‌ها
    const timer = setTimeout(() => {
      fetch("http://localhost:3001/article")
        .then((res) => res.json())
        .then((data) => {
          setArticles(data);
          setIsLoading(false); // بعد از دریافت داده‌ها، لودینگ رو خاموش کن
        })
        .catch((error) => {
          console.error(error);
          setIsLoading(false); // در صورت خطا هم لودینگ خاموش بشه
        });
    }, 1000);

    return () => clearTimeout(timer); // پاک‌سازی تایمر هنگام خروج از صفحه
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>A R M I N</h1>

        {isLoading ? (
          <p style={{ textAlign: "center" }}>Please wait...</p> // یا کامپوننت لودینگ خودت
        ) : (
          <div className={styled.article}>
            {articles.map((item) => (
              <Link key={item.id} to={`/article/${item.id}`}>
                <Article
                  title={item.title}
                  backgroundColor={item.backgroundColor}
                />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
