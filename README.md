# Full-Stack Blog Web Application

Live demo: [full-stack-blog-app-21.herokuapp.com](https://full-stack-blog-app-21.herokuapp.com/)

A blog application, built with, MERN stack and relational databases, that shows full articles. for each article there are 3 related articles, this is how articles are linked together.

## Development process

Back-end first: the back-end is a simple express and mongodb(mongoose) application. the data is stored in the database in two collections, articles, and categories.

The populate script, populates the database with the mock data. it first creates the category collection and fills it with categories in different articles.

Next article collection is created and filled with articles. as for article's category, it references to the related category by id. at this piont related articles field doesn't exists yet.

Finally, for each article, related articles are referenced by id.

There are two routes, one to get the article of the first page and another to get articles by their id. both routes populate the document with the referenced data.

After finishing the back-end i moved on to the fron-end.

Front-end: a mobile first, reponsive, react.js and sass application.

For styling, i used BEM convention for naming classes. each component lives undependent of it's placement in the UI. some components have their own custom animations, like navbar or loading screen.

The navbar has a step by step animation for small screen navigation. this is handled by local state and timeouts. loading screen component, however, uses keyframes for it's animation.

The state of the application lives in App.js, which manages the fetched article and loading state of the app, using "useState" and "useEffect" hooks.

For deployment, i used heroku.
