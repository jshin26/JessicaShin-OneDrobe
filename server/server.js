const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 8080;
const productRoute = require('./routes/product');
const favouritesRoute = require('./routes/favourites');
const stylelogRoute = require('./routes/stylelog');

app.use(cors());
app.use(express.json());

app.use(express.static('asset'));

app.use('/product', productRoute);
app.use('/', productRoute);

app.use('/favourites', favouritesRoute);

app.use('/log', stylelogRoute)

app.listen(port, () => {
    console.log('Server is running on 8080')
})