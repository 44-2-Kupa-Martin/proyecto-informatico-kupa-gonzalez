const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { request } = require('express');
const User = require('./api/models/User');
const multer = require('multer');



const port = process.env.PORT        || 3100;
const db   = process.env.MONGODB_URI || 'mongodb+srv://hellodb:hellodb@cluster0.6btkp.mongodb.net/cluster0?retryWrites=true&w=majority';

const app = express();

mongoose
  .connect(db, { useNewUrlParser: true,  useUnifiedTopology: true})
  .then(() => {
    console.log(`DB connected @ ${db}`);
  })
  .catch(err => console.error(`Connection error ${err}`));


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
;

const storage = multer.diskstorage({
  destination: 'api/images/',
  filename: function(req, file, cb){
    cb(null,file.fieldname + '-' + Date.now() + Path.extname(file.originalname));
  }
})

const upload = multer ({
  storage: storage,
  limits: {fileSize: 1000000},
  fileFilter: function (req, file, cb){
    checkFileType(file, cb);
  }
}).single('Myimage');


//funcion para decir que extensiones estan permitidas
function checkFileType(file, cb){
  const filetypes = /jpeg|jpg|png|gif|/;
  //chequeando la extension del archivo
  const extname = filetypes.test(Path.extname(file.originalname).toLowerCase());
  //chequeando el mime
  const mimetype = filetypes.test(file.mimetype);
}

if(mimetype && extname){
  return cb(null,true);
}   else{
    cb('Error: solo imagenes'); 
}

app.post('/upload',(req, res) => {
  upload(req, res, (err) => {
    if(err  ) {
      res.render('index', {
        msg: err
      }); 
    } else{
      if(req.file == undefined){
        res.render('index',   {
          msg: 'Error: ningun archivo seleccionado'
        });
      } else {
        res.render('index', {
          msg: 'Archivo subido',
          file: `images/${req.file.filename}`
        })
      }
    }
  })

})


app.use(express.json());
app.use(express.urlencoded({extended: true}));

passport.use(new LocalStrategy(
  function(username, password, cb) {
    console.log('until here');
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

app.use(session({
  secret: 'tu vija',
  resave: false,
  saveUninitialized: true,
  store: new MongoStore({
    mongoUrl: db
  })
}));

app.use(passport.initialize());
app.use(passport.session());

app.post('/register', (req, res, next) => {
  if (req.body.username && req.body.password){
    const userinstance= new User({username: req.body.username, password: req.body.password})
    userinstance.save()
  }
  next();

});

app.get('/login', (req, res, next) => {
   
  const form = '<h1>Login Page</h1><form method="POST" action="/login">\
  Enter Username:<br><input type="text" name="username">\
  <br>Enter Password:<br><input type="password" name="password">\
  <br><br><input type="submit" value="Submit"></form>';
  res.send(form);
});

app.post('/login', (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) { return next(err); }
    if (!user) { return res.send(info); }
    req.logIn(user, (err) => {
      if (err) { return next(err); }
    });
    return res.send('Nice cock');
  })(req, res, next);
});

app.get('/protected', (req, res, next) => {
  if (req.isAuthenticated()) {
    res.send('Nice cock');
  } else {
    res.send('ÑAo ÑAO AMIGO');
  }
})

app.get('/logout', (req, res, next) => {
  req.logout();
  res.send('bruhj');
})