import { useEffect, useState } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";
import Navbar from "../components/Navbar";
import StandardCard from "../components/StandardCard";
import Wallpaper from "../components/Wallpaper";
import "../styles/Article.scss";

export default function Article() {
  const { id } = useParams();

  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [closeLoadingScreen, setCloseLoadingScreen] = useState(false);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const url = id ? `/api/articles/${id}` : "/api/articles/first-article";
        const res = await fetch(url);
        const newArticle = await res.json();
        setArticle(newArticle);
      } catch (error) {
        console.log(error);
      }

      setCloseLoadingScreen(true);

      setTimeout(() => {
        setLoading(false);
        setCloseLoadingScreen(false);
      }, 1000);
    };

    fetchArticle();
  }, [id]);

  const onClickNextArticle = () => {
    setArticle(null);
    setLoading(true);

    window.scrollTo(0, 0);
  };

  if (!loading && !article) {
    return <Navigate to="/" replace />;
  }

  if (loading || !article)
    return (
      <>
        {loading && <LoadingScreen closeLoadingScreen={closeLoadingScreen} />}
      </>
    );

  return (
    <>
      <header>
        <Navbar />
        <Wallpaper title={article.title} image={article.imageURL} />
      </header>

      <main className="container">
        <section
          className="article-description"
          dangerouslySetInnerHTML={{ __html: article.description }}
        />

        <section className="related-articles">
          <div className="related-articles__title">
            <h1>Related Articles</h1>
            <hr className="related-articles__separator" />
          </div>
          <div className="related-articles__cards">
            {article.relatedArticles.map((relatedArticle) => {
              return (
                <Link
                  to={`/${relatedArticle._id}`}
                  key={relatedArticle._id}
                  onClick={onClickNextArticle}
                >
                  <StandardCard data={relatedArticle} />
                </Link>
              );
            })}
          </div>
        </section>
      </main>

      <footer className="container">
        <div className="copyright">
          <p className="copyright__text">
            Designed and developed by m0hammadr3za
          </p>
          <a
            className="copyright__link"
            href="https://github.com/m0hammadr3za"
            target="_blank"
            rel="noreferrer"
          >
            Github Page
          </a>
        </div>
      </footer>
    </>
  );
}
