import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Article from "./pages/Article";
import "./styles/style.scss";

export default function App() {
    const [article, setArticle] = useState(null);

    async function getArticle(id) {
        window.scrollTo(0, 0);

        const url = id ? `/api/articles/${id}` : "/api/articles/first-article";

        const res = await fetch(url);
        const newArticle = await res.json();

        setArticle(newArticle);
    }

    return (
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
    );
}
