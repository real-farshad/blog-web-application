# Full-Stack Blog Web Application

Live demo: [full-stack-blog-app-21.herokuapp.com](https://full-stack-blog-app-21.herokuapp.com/)<br>
Tech stack for front-end: React, React Router, Sass<br>
Tech stack for back-end: Node.Js, Express And Mongoose

A responsive mobile first express and react, blog application. Each page is an article including links to three related articles. In other words each article in the database has a property called related which is an array that references three related articles. on each query these references will populate the related array with the actual posts.

For styling, I used BEM convention. Each component lives independent of its placement in the UI. Some components have their own custom animations, like navbar or loading screen.

For deployment, I used heroku.
