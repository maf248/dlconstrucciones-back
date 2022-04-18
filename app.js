require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

// Importing Routers
const interestsRouter = require("./routes/interests");
const servicesRouter = require("./routes/services");
const contentsRouter = require("./routes/contents");
const picturesRouter = require("./routes/pictures");
const typesRouter = require("./routes/types");
const jobsRouter = require("./routes/jobs");
const batchesRouter = require("./routes/batches");
const categoriesRouter = require("./routes/categories");
const projectsRouter = require("./routes/projects");
const cashflowsRouter = require("./routes/cashflows");
const paymentsRouter = require("./routes/payments");
const assetsRouter = require("./routes/assets");
const contactRouter = require("./routes/contact");
const usersRouter = require("./routes/users");

const app = express();
const port = Number(process.env.PORT || 3000);

app.use(logger("dev"));
app.use(express.json());
app.use(cors());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, DELETE"
  );
  res.setHeader("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use(cookieParser());

app.use(bodyParser.json());

// Main Routes
app.use("/api/interests", interestsRouter);
app.use("/api/services/contents", contentsRouter);
app.use("/api/services/pictures", picturesRouter);
app.use("/api/services", servicesRouter);
app.use("/api/types", typesRouter);
app.use("/api/jobs", jobsRouter);
app.use("/api/batches", batchesRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/projects", projectsRouter);
app.use("/api/cashflows", cashflowsRouter);
app.use("/api/payments", paymentsRouter);
app.use("/api/assets", assetsRouter);
app.use("/api/contact", contactRouter);
app.use("/api/users", usersRouter);

app.use(express.static(process.cwd() + "/public/"));

app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/public/index.html");
});
app.get("*", (req, res) => {
  res.sendFile(process.cwd() + "/public/index.html");
});

module.exports = app;
