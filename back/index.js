const express = require('express');
const bodyParser = require('body-parser');
const expressjwt = require('express-jwt').expressjwt;
// routing imports
const antiquesRouting = require('./routing/antique-routing');
const booksRouting = require('./routing/books-routing');
const electronicsRouting = require('./routing/electronics-routing');
const jewleryRouting = require('./routing/jewelry-routing');
const videoGameRouting = require('./routing/video-gaming-routing');
const pictureRouting = require('./routing/picture-routing');
const fileUploladRouting = require('./common/file-upload');
const userRouting = require('./routing/user-routing');
//db connection import
const dbConnection = require('./common/db-connection');
const { application } = require('express');
const { json } = require('body-parser');

const app = express();

//middleware
app.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin', '*'); // sa kojeg origina dozvoljavamo zahtijev
    0.
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization'); // kojeg tipa je sadrzaj, koji je origin,...
              //"Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); //  koje tipove zahtijeva dozvoljavamou
    // res.header('Access-Control-Allow-Credentials', 'true');
    next();
})  

app.use(express.json()); // "Nauci" program da parsira json request body

let auth = expressjwt({
    secret: 'SECRET',
    userProperty: 'body.userData',
    algorithms: ['HS256']
});


app.use(express.static("public")); // folder koji navedemo je staticki i ne treba nam ni ruta i akcija vec je automatski dostupno

app.use(userRouting);
app.use(fileUploladRouting);
app.use('/antiques', antiquesRouting);
app.use('/books', booksRouting);
app.use('/electronics', electronicsRouting);
app.use('/jewelry', jewleryRouting);
app.use('/videoGame',  videoGameRouting);
app.use('/pictures', pictureRouting);


app.listen(3000, () =>{
    console.log('Server is listening at port 3000');
})

dbConnection.authenticate()
    .then(connection => {
        console.log('Connection has been established!')
    })
    .catch(err => {
        console.log('Error while connecting', err);
    })