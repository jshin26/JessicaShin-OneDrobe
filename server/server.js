const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 8080;
const productRoute = require('./routes/product');
const favouritesRoute = require('./routes/favourites');
const bookmarksRoute = require('./routes/bookmarks');
const stylelogRoute = require('./routes/stylelog');
const brandRoute = require('./routes/brands');

app.use(cors());
app.use(express.json());

app.use(express.static('asset'));
app.use('/uploads', express.static('uploads'));

app.use('/product', productRoute);
app.use('/', productRoute);

app.use('/favourites', favouritesRoute);
app.use('/bookmarks', bookmarksRoute);

app.use('/log', stylelogRoute);

app.use('/brand', brandRoute);

app.listen(port, () => {
    console.log('Server is running on 8080')
})