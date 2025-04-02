const express = require('express');
const { Liquid } = require('liquidjs');
const path = require('path');

const app = express();
const port = 3000;

//setup liquid
const engine = new Liquid({
    root: path.resolve(__dirname, 'views'),
    extname: '.liquid'
});

app.engine('liquid', engine.express());
app.set('views', './views');
app.set('view engine', 'liquid');

//serve static files from /public
app.use(express.static('public'));

//quotes array
const quotes = [
    "stay hungry, stay foolish.",
    "simplicity is the ultimate sophistication.",
    "Codde is like humor. When you have to explain it, it's bad."
];

//homepage route
app.get('/', (req, res) => {
    res.render('index');
});

//API route for random quote
app.get('/api/quote', (req, res) => {
    const randomQuote = quotes[ Math.floor( Math.random() * quotes.length )];
    res.json({ quote: randomQuote });
});

app.listen(port, () => {
    console.log(`🚀 Server is running at http://localhost:${port}`);
  });