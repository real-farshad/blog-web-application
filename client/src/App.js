import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Article from "./pages/Article";

export default function App() {
    const article = {
        _id: "6140ab90392df274d3f7d6fc",
        title: "Making of The Witcher 3: Wild Hunt",
        imageURL: "/images/witcher-3.jpg",
        description:
            "<p>Ut nisi arcu, vehicula quis facilisis quis, venenatis et justo. Praesent pretium erat ex. Curabitur sed tortor sagittis, ornare purus eget, commodo massa. Proin porta odio odio, ut sodales lectus mattis eget. Sed molestie, diam nec vehicula facilisis, eros metus tempus erat, sodales semper ex turpis vitae velit. In id quam vitae velit pretium blandit scelerisque ac mi.</p><p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin porttitor, elit eget vehicula porttitor, massa nunc iaculis dolor, nec eleifend metus enim sit amet arcu. Donec vel augue erat. Ut leo nulla, viverra eget ligula ut, tempor rhoncus felis. Proin porttitor turpis metus, et convallis nulla maximus quis.</p><h1>Venenatis augue ornare</h1><p>Donec dictum dolor nec nisl condimentum, id fringilla felis dictum. Curabitur a laoreet quam. Sed hendrerit neque eu dolor faucibus lacinia. Quisque in nulla at enim bibendum tempor. Maecenas elementum sollicitudin turpis, eu malesuada magna varius sed.</p><h1>Praesent vehicula efficitur nulla et sagittis</h1><p>Nunc eget imperdiet purus. Fusce posuere porttitor nisi nec aliquam. Praesent suscipit lacus nisl, in ultricies justo hendrerit sollicitudin. Suspendisse potenti. Donec a nisi non ex efficitur scelerisque eget id nulla. Quisque laoreet augue metus, ut sodales turpis tempus sit amet.</p><p>Donec condimentum justo non venenatis fermentum. Mauris a nulla quam. Fusce posuere velit turpis, congue accumsan odio vulputate nec. Vestibulum aliquam ligula at erat tincidunt viverra. Vivamus id tellus venenatis, pulvinar augue in, convallis diam.</p><p>Morbi vulputate eros sapien, vel dignissim diam tempor ac. Vestibulum vitae tortor congue, fermentum dolor vel, venenatis libero.</p>",
        relatedArticles: [
            {
                _id: "6140ab90392df274d3f7d6fd",
                title: "Dark Souls Remake Release Date",
                thumbnailURL: "/images/dark-souls-thumbnail.jpg",
                category: { title: "News" },
                viewCount: 2263,
                commentCount: 33,
            },
            {
                _id: "6140ab90392df274d3f7d704",
                title: "Ghost Of Tsushima: The Game Of The Year",
                thumbnailURL: "/images/ghost-of-tsushima-thumbnail.jpg",
                category: { title: "News" },
                viewCount: 88729,
                commentCount: 128,
            },
            {
                _id: "6140ab90392df274d3f7d703",
                title: "Making Of God Of War",
                thumbnailURL: "/images/god-of-war-thumbnail.jpg",
                category: { title: "Development" },
                viewCount: 7681,
                commentCount: 13,
            },
        ],
    };

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Article article={article} />
                </Route>
                <Route exact path="/:articleId">
                    <Article article={article} />
                </Route>
            </Switch>
        </Router>
    );
}
