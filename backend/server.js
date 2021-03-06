require('dotenv').config();
const express = require('express') //web application framework for Node
const cors = require('cors'); //Cross-Origin Resource Sharing middleware
const morgan = require('morgan')
const path = require('path');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
//express-validator добавить
const pdf = require('html-pdf')

// if (process.env.NODE_ENV !== 'production')
//sensetive information
//const { MONGODB } = require('./config.js');

const connectionDB = require('./config/mongodb.config');
const colors = require('colors');

// const {notFound, errorHandler} = require('./middlewares/errorHandling.js');
const personnelRouter = require('./routers/Personnel.routes')
const itAssetsRouter = require('./routers/ItAssets.routes')
const companyRouter = require('./routers/Company.routes')
const activitiesRouter = require('./routers/Activities.routes')
const equipmentsRouter = require('./routers/Equipments.routes')
const documentsRouter = require('./routers/Documents.routes')

const pdfTemplate = require('./documents/commission-order')

const app = express();
const PORT = process.env.PORT || 5001
connectionDB();

// view engine setup for EJS
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');


// Выполяет тоже самое
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'))
app.use(cors())
app.use(cookieParser())


app.post('/workflow/categorization-commission', (req, res) => {
  pdf.create(pdfTemplate(req.body), {}).toFile('commissionOrder.pdf', (err) => {
      if(err) {
          res.send(Promise.reject());
      }

      res.send(Promise.resolve());
  });
});

app.get('/workflow/categorization-commission', (req, res) => {
  res.sendFile(`${__dirname}/commissionOrder.pdf`)
})


//Routes call under cors
app.use('/api', personnelRouter)
app.use('/api', itAssetsRouter)
app.use('/api', companyRouter)
app.use('/api', activitiesRouter)
app.use('/api', equipmentsRouter)
// app.use('/', documentsRouter)

// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, '../client', 'build', 'index.html'));
//   });





//custom middleware

// const middlewareTest = (req, res, next) => {
//   console.log('request:')
//   next()
// }
//app.use(middlewareTest)



//Error Handling
//Промежуточный обработчик для обработки ошибок должен быть определен последним, после указания всех app.use() и вызовов маршрутов
// app.use(notFound);
// app.use(errorHandler)






// app.listen(PORT, error => {
//     if (error) throw error;
//     console.log(`Server running im ${process.env.NODE_ENV} on ${process.env.PORT} port`.yellow.bold);
// })



// app.use(express.static(path.join(__dirname, '../client/build/index.html')));


// if (process.env.NODE_ENV === 'production') {

// app.use(function (req, res, next) {
//       res.setHeader(
//         'Content-Security-Policy-Report-Only',
//         "default-src 'self'; font-src 'self'; img-src 'self'; script-src 'self'; style-src 'self'; frame-src 'self'"
//       );
//       next()
//     });

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', (req, res) => {

  res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
})
// }


app.listen(PORT, error => {
  if (error) throw error;
  console.log(`Server running im ${process.env.NODE_ENV} on ${PORT} port`.yellow.bold);
});

//For development mode
// if (process.env.NODE_ENV === 'production') {
//     app.get('*', function (req, res) {

//         res.sendFile(path.resolve('../client', 'build', 'index.html')); //or path.join
//     });
// } else {
//     app.get('/', (req, res, next) => {
//         res.send('API running ✌').json({
//             message: 'hello'
//         });
//     });
// }


//catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page

  // app.use(function (err, req, res, next) {
  //     console.error(err.message);
  //     if (!err.statusCode) err.statusCode = 500;
  //     res.status(err.statusCode).send(err.message);
  // });

  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  });
});

