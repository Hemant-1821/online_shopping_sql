const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const express = require('express');
//const expressHbs = require('express-handlebars');
const db = require('./util/database');

const app = express();

//app.engine('handlebars', expressHbs({defaultLayout:'main-layout', layoutsDir: "views/layouts/" }));
app.set('view engine', 'ejs');
//app.set('view engine', 'handlebars');
//app.set('view engine','pug');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRouter = require('./routes/shop');

const productsController = require('./controllers/error');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes);
app.use(shopRouter);

app.use(productsController.notFound);

//const server = http.createServer(app);
//server.listen(3000);  
app.listen(3000) //this can replace this both lines of code