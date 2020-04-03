const express = require('express');
const app = express();
const postsData = require('./posts');


app.get('/posts', (req, res) => {

    const page = req.query.page; 
    const limit = req.query.limit;
    const title = req.query.title;

    const startIndex = (page -1) * limit;
    const endIndex = page * limit;

    const posts = postsData.slice(startIndex, endIndex).filter(val => val.title.indexOf(title) > -1);

    res.json(posts);
})

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));