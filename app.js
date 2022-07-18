const createError = require("http-errors");
const express = require("express");
const path = require("path");
const { flash } = require('express-flash-message');
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");
const methodOverride = require("method-override");

const homeRouter = require("./routes/home");
const postsRouter = require("./routes/posts");
const sessionsRouter = require("./routes/sessions");
const usersRouter = require("./routes/users");


const app = express();



// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));

app.use(
  session({
    key: "user_sid",
    secret: "super_secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 3600000,
      // you will currently be kicked out after 1 hour
    },
  })
);

// flash messages

app.use(flash({ sessionKeyName: 'flashMessage' }));

// app.get('/flash', async function (req, res) {
//   // Set a flash message by passing the key, followed by the value, to req.flash().
//   await req.flash('info', 'INVALID EMAIL');
//   res.redirect('/');
// });

// unsure whether needed
// app.get('/', async function (req, res) {
//   // Get an array of flash message by passing the key to req.consumeFlash()
//   const messages = await req.consumeFlash('info');
//   res.render('users/new', { message });
// });

// clear the cookies after user logs out
app.use((req, res, next) => {
  if (req.cookies.user_sid && !req.session.user) {
    res.clearCookie("user_sid");
  }
  next();
});

// middleware function to check for logged-in users
const sessionChecker = (req, res, next) => {
  if (!req.session.user && !req.cookies.user_sid) {
    res.redirect("/sessions/new");
  } else {
    next();
  }
};

// route setup
app.use("/", homeRouter);
app.use("/posts", sessionChecker, postsRouter);
app.use("/sessions", sessionsRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;


/* set up for flash */