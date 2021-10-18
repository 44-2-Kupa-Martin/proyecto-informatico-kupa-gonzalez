const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
  const MongoStore = require('connect-mongo')(session);
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { request } = require('express');
const User = require('./api/models/User');



const port = process.env.PORT        || 3000;
const db   = process.env.MONGODB_URI || 'mongodb+srv://hellodb:hellodb@cluster0.6btkp.mongodb.net/cluster0?retryWrites=true&w=majority';

const app = express();


mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log(`DB connected @ ${db}`);
  })
  .catch(err => console.error(`Connection error ${err}`));


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const connection = mongoose.createConnection(db);

const sessionStore = new MongoStore({ mongooseConnection: connection, collection: 'sessions' })

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    store: sessionStore 
}));

passport.use(new LocalStrategy(
  function(username, password, cb) {
      User.findOne({ username: username })
          .then((user) => {
              if (!user) { return cb(null, false, {err:0}) }
              
              if (user.password === password) {
                  return cb(null, user);
              } else {
                  return cb(null, false, {err: 1});
              }
          })
          .catch((err) => {   
              cb(err);
          });
}));
passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});
passport.deserializeUser(function(id, cb) {
  User.findById(id, function (err, user) {
      if (err) { return cb(err); }
      cb(null, user);
  });
});
app.use(passport.initialize());
app.use(passport.session());

app.post('/register', (req, res, next) => {
  if (req.username && req.password){
    const userinstance= new User({username: req.username, password: req.password})
    userinstance.save()
  }
  

});

app.get('/login', (req, res, next) => {
   
  const form = '<h1>Login Page</h1><form method="POST" action="/login">\
  Enter Username:<br><input type="text" name="username">\
  <br>Enter Password:<br><input type="password" name="password">\
  <br><br><input type="submit" value="Submit"></form>';
  res.send(form);
});

app.post('/login', (req, res, next) => {
  objeto= passport.authenticate('local');
  console.log(objeto);
  res.send(objeto);
});

app.listen(3000);