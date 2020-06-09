const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 8080;
const productRoute = require('./routes/product')

app.use(cors());
app.use(express.json());

app.use(express.static('asset'));

app.use('/product', productRoute);
app.use('/', productRoute);

app.listen(port, () => {
    console.log('Server is running on 8080')
})