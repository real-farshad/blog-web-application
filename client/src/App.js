import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";
import Article from "./pages/Article";
import "./styles/style.scss";

export default function App() {
    const [article, setArticle] = useState(null);

    const [loading, setLoading] = useState(false);
    const [closeLoadingScreen, setCloseLoadingScreen] = useState(false);

    async function getArticle(id) {
        setLoading(true);

        window.scrollTo(0, 0);

        const url = id ? `/api/articles/${id}` : "/api/articles/first-article";

        const res = await fetch(url);
        const newArticle = await res.json();

        setArticle(newArticle);
        setCloseLoadingScreen(true);

        const finishLoadingTimer = setTimeout(() => {
            setLoading(false);
            setCloseLoadingScreen(false);
            clearTimeout(finishLoadingTimer);
        }, 1000);
    }

    return (
        <>
            {loading && <LoadingScreen closeLoadingScreen={closeLoadingScreen} />}
            <Router>
                <Switch>
                    <Route exact path="/:articleId">
                        <Article article={article} getArticle={getArticle} />
                    </Route>
                    <Route path="/">
                        <Article article={article} getArticle={getArticle} />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}
