// const functions = require('firebase-functions');
// const admin = require('firebase-admin')
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path')

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
// app.use(express.static(path.join(__dirname, 'client/build')));
// app.use(express.static('client/build'));
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../', 'client', 'build', 'index.html'));
//     // "cd client && npm install && npm run build"
// })

app.use('/product', productRoute);
app.use('/', productRoute);

app.use('/favourites', favouritesRoute);
app.use('/bookmarks', bookmarksRoute);

app.use('/log', stylelogRoute);

app.use('/brand', brandRoute);

app.listen(port, () => {
    console.log('Server is running on 8080')
})