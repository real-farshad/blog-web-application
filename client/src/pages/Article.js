import Navbar from "../components/Navbar";
import Wallpaper from "../components/Wallpaper";
import "../styles/Article.scss";

export default function Article({ article }) {
    return (
        <>
            <header>
                <Navbar />
                <Wallpaper title={article.title} />
            </header>

            <main className="container">
                <div className="article-description" dangerouslySetInnerHTML={{ __html: article.description }} />
            </main>

            <footer></footer>
        </>
    );
}
